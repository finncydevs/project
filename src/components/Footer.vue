<script setup>
import { scrollInto } from "@/utils/script";
</script>

<template>
  <footer class="bg-slate-900 pt-24 pb-12">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
          <h2 class="font-bold text-4xl mb-5 text-white">Finn/Jindan</h2>
          <h3 class="font-bold text-4xl mb-5">Hubungi kami</h3>
          <p>finnnxptrix@gmail.com</p>
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
                >Gaming</a
              >
            </li>
            <li>
              <a href="" class="inline-block text-base hover:text-primary mb-3"
                >Games</a
              >
            </li>
            <li>
              <a href="" class="inline-block text-base hover:text-primary mb-3"
                >Hobi</a
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
                @click="scrollInto('about')"
                class="inline-block text-base hover:text-primary mb-3"
                >Tentang Saya</a
              >
            </li>
            <li>
              <a
                @click="scrollInto('blog')"
                class="inline-block text-base hover:text-primary mb-3"
                >Blog</a
              >
            </li>
            <li>
              <a
                @click="scrollInto('contact')"
                class="inline-block text-base hover:text-primary mb-3"
                >Contact</a
              >
            </li>
          </ul>
        </div>
        <div class="class w-full pt-10 border-t border-slate-700">
          <div class="flex items-center justify-center mb-5">
            <a
              href="#"
              class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-200 hover:border-primary hover:bg-primary hover:text-dark"
            >
              <i class="pi pi-youtube hover:text-white text-sky-300"></i>
            </a>
            <a
              href=""
              class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-200 hover:border-primary hover:bg-primary hover:text-white"
            >
              <i
                class="pi pi-discord fill-current hover:text-white text-sky-300"
              ></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-200 hover:border-primary hover:bg-primary hover:text-white"
            >
              <i
                class="pi pi-twitter fill-current hover:text-white text-sky-300"
              ></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100071960914104"
              class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-200 hover:border-primary hover:bg-primary hover:text-white"
            >
              <i
                class="pi pi-facebook fill-current hover:text-white text-sky-300"
              ></i>
            </a>
            <a
              href="https://www.instagram.com/enopy.finn/"
              class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border-2 border-sky-200 hover:border-primary hover:bg-primary hover:text-white"
            >
              <i
                class="pi pi-instagram fill-current hover:text-white text-sky-300"
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
