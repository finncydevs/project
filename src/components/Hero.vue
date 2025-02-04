<script setup></script>

<template>
  <section id="home" class="h-screen pt-10 bg-white">
    <div class="container h-full flex items-center">
      <div class="flex flex-wrap w-full">
        <div class="w-full self-center px-4 lg:w-1/2">
          <h1 id="type" class="text-7xl lg:text-8xl font-bold text-black mb-6">
            Wujudkan semuanya dengan kita.
          </h1>

          <p
            class="mb-10 font-medium leading-relaxed text-lg lg:text-xl text-black"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            accusantium soluta quae voluptas officia labore recusandae nemo
            officiis nulla quos sed, consectetur quidem asperiores commodi eum
            neque ea unde iste!
            <b class="font-bold text-primary text-lg">Learn!</b>
          </p>

          <button
            type="button"
            class="text-white bg-black font-bold rounded-lg text-lg px-7 py-4 text-center mr-2 mb-2"
          >
            Contact me
          </button>
        </div>

        <div class="w-full self-center pl-5 lg:w-1/2">
          <img
            src="https://i.pinimg.com/736x/ad/b4/0a/adb40a610c898a70fb990dc5e224f397.jpg"
            alt="sakana"
            id="sakan"
            class="shadow-2xl rounded-lg object-cover w-full lg:justify-center h-auto max-h-[500px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#sakana {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
