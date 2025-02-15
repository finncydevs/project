<template>
  <div class="w-full overflow-hidden bg-black py-4">
    <div
      class="whitespace-nowrap animate-marquee text-white text-lg font-semibold"
    >
      <span class="mx-8 font-bold">Fische</span>
      <span class="mx-8 font-bold">Fische</span>
      <span class="mx-8 font-bold">Fische</span>
      <span class="mx-8 font-bold">Fische</span>
      <span class="mx-8 font-bold">Fische</span>
      <span class="mx-8 font-bold">Fische</span>
      <span class="mx-8 font-bold">Fische</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
}
</style>
