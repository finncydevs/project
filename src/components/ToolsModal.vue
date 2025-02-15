<template>
  <div class="container">
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4"
    >
      <div class="p-4 items-center justify-center">
        <component
          :is="tool?.component"
          v-if="tool?.component"
          :key="tool?.title"
          :closeModal="closeModal"
        />
        <p v-else class="text-gray-600">Tidak ada tool yang tersedia.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tool: Object,
  isModalOpen: Boolean,
  closeModal: Function,
});
</script>
