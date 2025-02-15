<script setup>
import { onMounted } from "vue";
import { scrollInto } from "@/utils/script";

async function scrollNav() {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  window.onscroll = () => {
    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
}
onMounted(() => {
  scrollNav();
});
</script>
// Navbar.vue
<template>
  <nav class="bg-bg shadow-md py-4 px-6 flex justify-between items-center">
    <div class="text-2xl font-bold text-primary">Fische</div>
    <div class="hidden md:flex space-x-6">
      <a class="text-primary text-lg font-bold">Project</a>
      <a class="text-primary text-lg font-bold">Blog</a>
      <a class="text-primary text-lg font-bold">Karir</a>
    </div>
    <button
      class="hidden md:block bg-primary text-white px-5 py-4 rounded-lg text-sm"
    >
      Get Started
    </button>
  </nav>
</template>
