<template>
  <div class="p-8 shadow-lg bg-bg min-h-screen flex flex-col items-center">
    <h1 class="text-3xl text-primary font-bold mb-1">Lokasi</h1>
    <p class="mb-6 text-secondary">Kami Bersekolah di</p>
    <div
      class="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden"
    >
      <div
        class="bg-primary text-seconndary p-10 flex-1 flex flex-col justify-center items-center"
      >
        <h2 class="text-2xl font-semibold text-bg">Indonesia</h2>
        <p class="mt-2 text-center">Desa Selajambe, Kec Cilaku, Kab. Cianjur</p>
      </div>
      <div class="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7263690873806!2d107.2169495085445!3d-6.8031049665051055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68535d2dd12b03%3A0xbb08b654531fb447!2sNurul%20Islam%20Vocational%20High%20School!5e0!3m2!1sid!2sid!4v1738900908040!5m2!1sid!2sid"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
iframe {
  min-height: 300px;
}
</style>
