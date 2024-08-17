<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import { CASES } from "./constants.js"
import { CAROUSEL_BREAKPOINTS } from "@/constants.js";
</script>

<template>
  <div class="cases">
    <div class="cases__container" data-aos="fade-right" data-aos-duration="800">
      <h4 class="cases__title">Наши кейсы</h4>
      <Carousel :wrap-around="true" :breakpoints="CAROUSEL_BREAKPOINTS">
        <Slide v-for="card in CASES" :key="card.link">
          <a class="case" :href="card.link" target="_blank">
            <img class="case__image" :src="card.image" alt="car-photo">
            <img class="case__play" src="@/assets/img/video-play.svg" alt="play-icon">
          </a>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "cases";
</style>
