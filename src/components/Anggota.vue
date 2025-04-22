<script setup>
import { ref } from "vue";
import jindan from "@/assets/imgs/JINDAN.jpg";
import ruby from "@/assets/imgs/ruby.jpg";
import ahmad from "@/assets/imgs/ahmad.jpg";
import rifqi from "@/assets/imgs/rif.jpg";

// Team members data
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
    profil:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
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
    profil:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
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
    profil:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
  },
  {
    id: 4,
    name: "M Ruby Alamsyah",
    role: "Backend Developer",
    image: ruby,
    whatsapp: "https://wa.me/+6285722136836",
    instagram: "https://www.instagram.com/anotherubb/",
    description:
      "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    profil:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
  }
]);

// Modal state
const showModal = ref(false);
const selectedMember = ref(null);

function openModal(member) {
  selectedMember.value = member;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedMember.value = null;
}
</script>

<template>
  <section id="Anggota" class="bg-bg py-12 px-4">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="member in details"
        :key="member.id"
        class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <!-- Header -->
        <div class="flex items-center p-6 gap-4 border-b border-slate-200">
          <img
            :src="member.image"
            :alt="member.name"
            class="h-16 w-16 rounded-full object-cover"
          />
          <div class="flex-1">
            <h5 class="text-xl font-extrabold text-dark">{{ member.name }}</h5>
            <p class="text-xs uppercase font-semibold text-secondary">{{ member.role }}</p>
          </div>
          <div class="flex space-x-3 text-2xl text-secondary">
            <a :href="member.whatsapp" target="_blank" class="hover:text-primary transition">
              <i class="pi pi-whatsapp"></i>
            </a>
            <a :href="member.instagram" target="_blank" class="hover:text-primary transition">
              <i class="pi pi-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6 flex-1 flex flex-col">
          <p class="text-gray-700 flex-1 leading-relaxed">{{ member.description }}</p>
          <button
            class="mt-6 self-center w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
            @click="openModal(member)"
          >
            Lihat Profil
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Overlay -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-2xl p-6 relative shadow-xl max-w-md w-full">
          <button
            @click="closeModal"
            class="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </button>
          <h3 class="text-2xl font-bold text-primary mb-4">{{ selectedMember.name }}</h3>
          <p class="text-gray-700 leading-relaxed">{{ selectedMember.profil }}</p>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
/* All styles via Tailwind and DaisyUI */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
