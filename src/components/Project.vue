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
    title: "Photo editing photoshop",
    description: " Kadang saya juga mendesain logo atau desain untuk kaos.",
  },
  {
    img: photo2,
    alt: "Photo editing stlyed",
    title: "Photoshop stlyed",
    description: "Editing style terfavorit saya",
  },
  {
    img: photo3,
    alt: "Potografi",
    title: "Mencoba potografi",
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
  <section id="project" class="pt-24 pb-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="w-full text-center mb-12">
        <h4 class="text-lg font-semibold text-indigo-500">Portofolio</h4>
        <h2 class="text-3xl font-bold text-gray-900 mt-2">Project Terbaru</h2>
        <p class="text-md text-gray-500 mt-3">
          Beberapa hal yang saya tertarik
        </p>
      </div>

      <div class="space-y-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="flex flex-col md:flex-row items-center gap-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <!-- Image -->
          <div class="w-full  flex justify-center">
            <div class="relative border-2 rounded-xl p-3 shadow-lg">
              <img
                :src="project.img"
                :alt="project.alt"
                class="rounded-lg shadow-md"
              />
            </div>
          </div>

          <!-- Text -->
          <div class="w-full md:w-1/2">
            <span
              class="bg-black text-white text-sm font-semibold px-3 py-1 rounded-full"
              >Project</span
            >
            <h3 class="mt-4 text-2xl font-bold text-gray-900">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mt-3">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1100px;
}
</style>
