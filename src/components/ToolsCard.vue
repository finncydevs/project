<template>
  <div class="w-full px-4 mb-16 lg:w-1/2 xl:w-1/3">
    <div
      class="bg-white rounded-xl  shadow-lg overflow-hidden hover:ring-2 hover:ring-black cursor-pointer h-full flex flex-col"
      @click="$emit('openModal', tool)"
    >
      <div class="w-full h-48">
        <img
          :src="tool.image"
          :alt="tool.title"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="py-8 px-6 flex-grow flex flex-col">
        <h3 class="block mb-3 font-semibold text-2xl text-primary truncate">
          {{ tool.title }}
        </h3>
        <p class="font-medium text-base text-primary mb-4 flex-grow">
          {{ tool.description }}
        </p>
        <button
          class="font-medium text-sm text-bg bg-primary py-2 px-4 rounded-lg hover:opacity-80"
        >
          Klik untuk membuka tool
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["tool"]);
defineEmits(["openModal"]);
</script>
