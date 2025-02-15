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
  <section class="bg-bg py-8 px-4">
    <div
      class="grid grid-cols-1 lg:m-5 lg:mx-[100px] md:grid-cols-2 gap-6"
     
    >
      <div
        class="shadow-lg flex flex-col p-4 rounded-lg bg-bg  border border-slate-200"
        v-for="detail in details"
        :key="detail.id"
      >
        <div class="flex items-center gap-4 text-dark py-5">
          <img
            :src="detail.image"
            alt="Tania Andrew"
            class="h-[58px] w-[58px] rounded-full object-cover"
          />
          <div class="flex w-full flex-col">
            <h5 class="text-xl font-semibold text-dark">
              {{ detail.name }}
            </h5>
            <p class="text-xs uppercase font-bold text-secondary">
              {{ detail.role }}
            </p>
          </div>
          <div class="flex flex-row gap-4 text-xl">
            <a :href="detail.whatsapp" target="_blank">
              <i class="pi pi-whatsapp"></i>
            </a>
            <a :href="detail.instagram" target="_blank">
              <i class="pi pi-instagram"></i>
            </a>
          </div>
        </div>
        <p class="text-base text-secondary font-light leading-normal">
          {{ detail.description }}
        </p>
        <button
          class="py-3 bg-primary text-bg font-bold w-80 justify-center mt-4 rounded-lg"
        >
          Lihat portofolio
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
</style>
