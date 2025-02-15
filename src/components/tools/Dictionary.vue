<script setup>
import { ref } from "vue";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";
const inputWord = ref("");
const result = ref(null);
const sound = ref(null);

const fetchWord = async () => {
  if (!inputWord.value.trim()) {
    result.value = { error: "Please enter a word!" };
    return;
  }

  try {
    const response = await fetch(`${url}/${inputWord.value.trim()}`);
    const data = await response.json();

    if (!data || data.title === "No Definitions Found") {
      result.value = {
        error: `No definitions found for "${inputWord.value}". Try another word!`,
      };
      return;
    }

    result.value = data[0];

    const phonetics = result.value.phonetics.find((p) => p.audio)?.audio || "";
    sound.value = phonetics ? `https:${phonetics}` : null;
  } catch (error) {
    result.value = { error: "Error fetching data. Please try again!" };
    console.error("Error:", error);
  }
};

const playSound = () => {
  if (sound.value) {
    new Audio(sound.value).play();
  } else {
    alert("No pronunciation available for this word.");
  }
};

defineProps({
  isModalOpen: Boolean,
  closeModal: Function,
});
</script>

<template>
  <div
    class="container bg-white w-[90vmin] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-10 rounded-lg shadow-lg"
  >
    <div class="flex justify-between items-center border-b pb-2">
      <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
        ✖
      </button>
    </div>
    <div class="search-box w-full flex justify-center">
      <input
        v-model="inputWord"
        type="text"
        class="search-input p-[5px] w-[70%] border-b-2 text-black rounded-md border-opacity-15 border-slate-800"
        placeholder="Type word here..."
      />
      <button
        @click="fetchWord"
        class="search-btn ml-3 p-3 text-white bg-sky-800 rounded-lg"
      >
        Search
      </button>
    </div>

    <div v-if="result" class="result relative mt-6">
      <p v-if="result.error" class="text-red-500">{{ result.error }}</p>

      <div v-else>
        <div class="word flex mt-4 justify-between">
          <h2 class="text-lg text-black">{{ result.word }}</h2>
          <button
            @click="playSound"
            class="sound-btn p-3 text-black text-md"
          >
            🔊
          </button>
        </div>

        <div class="details flex gap-3 mt-2 ">
          <p class="text-black">{{ result.meanings[0].partOfSpeech }}</p>
          <p>/{{ result.phonetic || "No phonetic available" }}/</p>
        </div>

        <p class="word-meaning mt-2 text-black">
          {{ result.meanings[0].definitions[0].definition }}
        </p>
        <p
          v-if="result.meanings[0].definitions[0].example"
          class="word-example p-4 text-black border-2 mt-2"
        >
          "{{ result.meanings[0].definitions[0].example }}"
        </p>
      </div>
    </div>
  </div>
</template>
