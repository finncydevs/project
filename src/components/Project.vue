<script setup>
// Import images from assets
import photo1 from "@/assets/imgs/1.jpg";
import photo2 from "@/assets/imgs/2.jpg";
import photo3 from "@/assets/imgs/3.jpg";
import photo4 from "@/assets/imgs/4.jpg";

// Create a list of project data to make the template more dynamic
const projects = [
  {
    img: photo1,
    alt: "Photo editing",
    title: "Photo Editing Photoshop",
    description: "Kadang saya juga mendesain logo atau desain untuk kaos.",
  },
  {
    img: photo2,
    alt: "Photo editing styled",
    title: "Photoshop Styled",
    description: "Editing style terfavorit saya",
  },
  {
    img: photo3,
    alt: "Fotografi",
    title: "Mencoba Fotografi",
    description: "Saya suka memfoto pemandangan",
  },
  {
    img: photo4,
    alt: "WhatsApp bot",
    title: "FionaBot di Whatsapp",
    description:
      "Kodingannya bukan punya saya seluruhnya (fork dari github lain) tapi saya menambahkan beberapa fitur dan memperbaiki beberapa kodingan",
  },
];
</script>

<template>
  <section id="Project" class="bg-bg py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h4 class="text-lg font-semibold text-primary">Portofolio</h4>
        <h2 class="text-3xl lg:text-4xl font-bold text-dark mt-2">Project Terbaru</h2>
        <p class="text-md text-secondary mt-3">Beberapa hal yang saya tertarik</p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="relative">
            <img
              :src="project.img"
              :alt="project.alt"
              class="w-full h-48 object-cover"
            />
            <span
              class="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white text-xs uppercase font-semibold px-2 py-1 rounded-full"
              >Project</span
            >
          </div>

          <div class="p-6">
            <h3 class="text-xl font-extrabold text-dark">{{ project.title }}</h3>
            <p class="text-gray-700 mt-2 leading-relaxed">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
