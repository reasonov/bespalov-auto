<script setup>
import { AccordionComponent } from "@/common";
import { Faqs } from "./constants.js";
</script>

<template>
  <div class="faq">
    <div class="faq__container" data-aos="fade-up" data-aos-duration="800">
      <h4 class="faq__title">Часто задаваемые вопросы</h4>

      <div class="faq__list">
        <AccordionComponent
          class="faq__item"
          v-for="item in Faqs"
          :key="item.title"
          :title="item.title"
          :text="item.text"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "faq";
</style>
