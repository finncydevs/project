<template>
  <section id="tools" class="pt-32 bg-bg">
    <div class="container" >
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-secondary mb-2">Tools</h4>
          <h2 class="font-bold text-primary text-3xl mb-4">
            Tools we have been made
          </h2>
          <p class="font-medium text-md text-dark">
            Beberapa tools yang bisa kalian gunakan sehari-hari
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <ToolsCard
          v-for="tool in tools"
          :key="tool.id"
          :tool="tool"
          @openModal="openModal(tool)"
        />
      </div>
    </div>
  </section>

  <!-- Modal -->
  <ToolsModal
    v-if="isModalOpen"
    :tool="selectedTool"
    :isModalOpen="isModalOpen"
    :closeModal="closeModal"
  />
</template>

<script setup>
import { ref } from "vue";
import ToolsCard from "@/components/ToolsCard.vue";
import ToolsModal from "@/components/ToolsModal.vue";
import Dictionary from '@/components/tools/Dictionary.vue';
import JokeGenerator from '@/components/tools/JokeGenerator.vue';
import jokes from '@/assets/imgs/jokes.jpg'
import dictionary from '@/assets/imgs/dictionary.jpg'

const isModalOpen = ref(false);
const selectedTool = ref(null);

const openModal = (tool) => {
  selectedTool.value = tool;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedTool.value = null;
};

const tools = ref([
  {
    id: 1,
    title: "Joke Generator",
    description: "Dapatkan joke random untuk hiburan!",
    component: JokeGenerator,
  image: jokes,
  },
  {
    id: 2,
    title: "Dictionary",
    description: "Cari arti kata dengan cepat!",
    component: Dictionary,
    image: dictionary,
  },
]);
</script>
