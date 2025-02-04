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
  <nav class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    <div class="text-xl font-bold text-black">LOGO/nama</div>
    <div class="hidden md:flex space-x-6">
      <a href="#" class="text-black text-xl font-bold">Project</a>
      <a href="#" class="text-black text-xl font-bold">Blog</a>
      <a href="#" class="text-black text-xl font-bold">Karir</a>
    </div>
    <button
      class="hidden md:block bg-black text-white px-4 py-2 rounded-lg text-sm"
    >
      Get Started
    </button>
  </nav>
</template>
