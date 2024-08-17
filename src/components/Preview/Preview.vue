<script setup>
import { ButtonComponent } from "@/common";
</script>

<template>
  <div class="preview">
    <div class="preview__container" data-aos="zoom-out" data-aos-duration="800">
      <h1 class="preview__title">
        <span class="text--green">Подбор и доставка авто</span><br />
        из Японии, Кореи, Китая, ОАЭ и Америки
      </h1>
      <p class="preview__subtitle">
        Подбираем авто с несколькими экспертами и с использованием профессионального оборудования
      </p>
      <ButtonComponent text="Оставить заявку" size="max" />
      <div class="preview__background">
        <div class="preview__background-wrapper">
          <img class="preview__image" src="@/assets/img/preview-bg.png" alt="background" />
          <img class="preview__star preview__star1" src="@/assets/img/star-effect.png" alt="effect" />
          <img class="preview__star preview__star2" src="@/assets/img/star-effect.png" alt="effect" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "preview";
</style>
