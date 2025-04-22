<script setup>
import { ref } from "vue";
import jindan from "@/assets/imgs/JINDAN.jpg";
import ruby from "@/assets/imgs/ruby.jpg";
import ahmad from "@/assets/imgs/ahmad.jpg";
import rifqi from "@/assets/imgs/rif.jpg";
const details = ref([
  {
    id: 1,
    name: "Jindan",
    role: "Full Stack Developer",
    image: jindan,
    whatsapp: "https://wa.me/6281318510319",
    instagram: "https://www.instagram.com/finn.vue/",
    description:
      "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
  },
  {
    id: 2,
    name: "Ahmad",
    role: "Frontend Developer",
    image: ahmad,
    whatsapp: "https://wa.me/6282123377092",
    instagram: "https://www.instagram.com/ahmmd_rzkyy24/",
    description:
      "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
  },
  {
    id: 3,
    name: "Muhammad Rifqi Hummaidilah",
    role: "Frontend Developer",
    image: rifqi,
    whatsapp: "https://wa.me/62895326822578",
    instagram: "https://www.instagram.com/mrifqihum/",
    description:
      "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
  },
  {
    id: 4,
    name: "M Ruby Alamsyah",
    role: "Backend Developer",
    whatsapp: "https://wa.me/+6285722136836",
    instagram: "https://www.instagram.com/anotherubb/",
    image: ruby,
    description:
      "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
  },
]);
</script>
<template>
  <section id="Anggota" class="bg-bg py-12 px-4">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="detail in details"
        :key="detail.id"
        class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <!-- Header -->
        <div class="flex items-center p-6 gap-4 border-b border-slate-200">
          <img
            :src="detail.image"
            :alt="detail.name"
            class="h-16 w-16 rounded-full object-cover"
          />
          <div class="flex-1">
            <h5 class="text-xl font-extrabold text-dark">{{ detail.name }}</h5>
            <p class="text-xs uppercase font-semibold text-secondary">{{ detail.role }}</p>
          </div>
          <div class="flex space-x-3 text-2xl text-secondary">
            <a :href="detail.whatsapp" target="_blank" class="hover:text-primary transition">
              <i class="pi pi-whatsapp"></i>
            </a>
            <a :href="detail.instagram" target="_blank" class="hover:text-primary transition">
              <i class="pi pi-instagram"></i>
            </a>
          </div>
        </div>
        <!-- Body -->
        <div class="p-6 flex-1 flex flex-col">
          <p class="text-gray-700 flex-1 leading-relaxed">
            {{ detail.description }}
          </p>
          <button
            class="mt-6 self-center w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
          >
            Lihat Portofolio
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* All styling handled by Tailwind utilities */
</style>
