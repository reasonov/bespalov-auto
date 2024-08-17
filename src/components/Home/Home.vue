<script setup>
import {
  Header,
  Preview,
  Pluses,
  Catalog,
  Schema,
  Cases,
  Reviews,
  Faq,
  FormBottom,
  Footer,
  Menu
} from "@/components";
import { ref } from "vue"

const isMenuOpen = ref(false)
</script>

<template>
  <div class="home">
    <Header :isMenuOpen="isMenuOpen" @toggleMenu="isMenuOpen = !isMenuOpen" />

    <Menu :isMenuOpen="isMenuOpen" @closeMenu="isMenuOpen = false" />

    <Preview />

    <Pluses />

    <Catalog id="catalog" />

    <FormBottom title="Заинтересовал автомобиль?" data-aos="fade-right" data-aos-duration="800" />

    <Schema id="schema" />

    <Cases id="cases" />

    <FormBottom title="Хотите узнать больше?" data-aos="fade-up" data-aos-duration="800" />

    <Reviews id="reviews" />

    <Faq id="faq" />

    <FormBottom data-aos="fade-right" data-aos-duration="800" class="form-footer" />
  </div>

  <Footer />
</template>

<style scoped lang="scss">
@import "home";
</style>
