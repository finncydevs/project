<script setup>
import { scrollInto } from "@/utils/script";
</script>

<template>
  <footer class="bg-slate-900 pt-24 pb-8">
    <div class="container flex justify-center items-center" >
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
          <h2 class="font-bold text-4xl mb-5 text-white">Fische</h2>
          <h3 class="font-bold text-4xl mb-5">Hubungi kami</h3>
          <p>fische@gmail.com</p>
          <p>Jl. Peusar</p>
          <p>Cianjur</p>
        </div>
        <div class="w-full px-4 mb-12 md:w-1/3">
          <h3 class="font-semibold text-xl text-white mb-5">
            Kategori Tulisan
          </h3>
          <ul class="text-slate-300">
            <li>
              <a href="" class="inline-block text-base hover:text-primary mb-3"
                >Kelompok</a
              >
            </li>
            <li>
              <a href="" class="inline-block text-base hover:text-primary mb-3"
                >Kerja Sama</a
              >
            </li>
            <li>
              <a href="" class="inline-block text-base hover:text-primary mb-3"
                >Learning</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full px-4 mb-12 md:w-1/3">
          <h3 class="font-semibold text-xl text-white mb-5">Kategori Tautan</h3>
          <ul class="text-slate-300">
            <li>
              <a
                @click="scrollInto('home')"
                class="inline-block text-base hover:text-primary mb-3"
                >Beranda</a
              >
            </li>
            <li>
              <a
                @click="scrollInto('contact')"
                class="inline-block text-base hover:text-primary mb-3"
                >Contact</a
              >
            </li>
            <li>
              <a
                @click="scrollInto('about')"
                class="inline-block text-base hover:text-primary mb-3"
                >Project</a
              >
            </li>
          </ul>
        </div>
        <div class="class w-full pt-10 border-t border-slate-700">
          <div class="flex items-center justify-center mb-5">
            <a
              href="#"
              class="group w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-400 hover:border-sky-600 hover:bg-sky-600"
            >
              <i
                class="pi pi-youtube text-xl group-hover:text-white text-sky-300"
              ></i>
            </a>
            <a
              href=""
              class="group w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-400 hover:border-sky-600 hover:bg-sky-600"
            >
              <i
                class="pi pi-discord text-xl group-hover:text-white text-sky-300"
              ></i>
            </a>
            <a
              href="#"
              class="group w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-400 hover:border-sky-600 hover:bg-sky-600"
            >
              <i
                class="pi pi-twitter text-xl group-hover:text-white text-sky-300"
              ></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100071960914104"
              class="group w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-400 hover:border-sky-600 hover:bg-sky-600"
            >
              <i
                class="pi pi-facebook text-2xl group-hover:text-white text-sky-300"
              ></i>
            </a>
            <a
              href="https://www.instagram.com/enopy.finn/"
              class="group w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-400 hover:border-sky-600 hover:bg-sky-600"
            >
              <i
                class="pi pi-instagram text-xl group-hover:text-white text-sky-300"
              ></i>
            </a>
          </div>

          <p class="font-medium text-sm text-sky-200 text-center">
            Dibuat dengan <span class="text-ping-500">❤️</span> oleh
            <a
              href="http://instagram.com/enopy.finn"
              class="text-primary"
              target="_blank"
              >Jindan</a
            >, Menggunakan
            <a href="https://vuejs.org/" target="_blank" class="text-green-500"
              >Vue</a
            >
            dan
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              class="text-sky-600"
              >Tailwindcss</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
