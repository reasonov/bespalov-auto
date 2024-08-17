<script setup>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Navigation } from "vue3-carousel"

console.log(Carousel)

function prev() {
  console.log("prev")
}

function next() {
  console.log("next")
}
</script>

<template>
  <Carousel :items-to-show="5" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped lang="scss">
@import "carousel-component";
</style>