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

<template>
  <header>
    <nav class="bg-bg shadow-md py-4 px-6 flex justify-between items-center">
      <div class="text-2xl font-bold text-primary">Fische</div>
      <div class="hidden md:flex space-x-6">
        <a
           v-scroll-to="'#project'"
          class="text-primary text-lg font-bold cursor-pointer"
          >Project</a
        >
        <a
        v-scroll-to="'#Misi'"
        class="text-primary text-lg font-bold cursor-pointer hover:text-xl">Visi Misi</a>
        <a
        v-scroll-to="'#Fasilitas'"
        class="text-primary text-lg font-bold cursor-pointer hover:text-xl">Fasilitas</a>
        <a
        v-scroll-to="'#Anggota'"
        class="text-primary text-lg font-bold cursor-pointer hover:text-xl">Anggota</a>
      </div>
      <button
        class=" md:block inline-block px-3 py-2 bg-gradient-to-r text-base from-primary to-secondary text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
      >
       Contact Us   
      </button>
    </nav>
  </header>
</template>
