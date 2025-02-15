<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const joke = ref("Loading..."); // State untuk menyimpan joke
const url = "https://v2.jokeapi.dev/joke/any";

const getJoke = async () => {
  try {
    const response = await axios.get(url);
    const item = response.data;

    if (item.joke) {
      joke.value = item.joke; // Single-part joke
    } else {
      joke.value = `${item.setup} - ${item.delivery}`; // Two-part joke
    }
  } catch (error) {
    joke.value = "Gagal mengambil joke, coba lagi!";
    console.error("Error:", error);
  }
};
defineProps({
  isModalOpen: Boolean,
  closeModal: Function,
});

onMounted(getJoke);
</script>

<template>
  <div
    class="text-center text-slate-900 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold w-90 absolute rounded-lg p-4 bg-white"
  >
    <div class="flex justify-between items-center border-b pb-2">
      <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
        ✖
      </button>
    </div>
    <span class="block text-8xl pb-10">😂</span>
    <p class="m-3 mx-0">{{ joke }}</p>
    <button
      @click="getJoke"
      class="bg-sky-800 mx-auto h-9 rounded-sm text-md px-5 m-0 block shadow"
    >
      Get random joke
    </button>
  </div>
</template>

<style></style>
