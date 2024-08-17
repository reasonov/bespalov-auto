<script setup>
import {Pluses} from "@/components/index.js";
</script>

<template>
  <div class="pluses">
    <div class="pluses__container" data-aos="fade-right" data-aos-duration="800">
      <div class="pluses__list">
        <article class="pluses__card">
          <img src="@/assets/img/pluses1.svg" alt="icon" class="pluses__image" />
          <div class="card__main">
            <h4 class="card__title">Гарантия</h4>
            <p class="card__text">Все риски по доставке авто мы берем на себя</p>
          </div>
        </article>
        <article class="pluses__card">
          <img src="@/assets/img/pluses2.svg" alt="icon" class="pluses__image" />
          <div class="card__main">
            <h4 class="card__title">доставка 3 недели</h4>
            <p class="card__text">Доставка авто займет до 3х недель вмесе с подбором</p>
          </div>
        </article>
        <article class="pluses__card">
          <img src="@/assets/img/pluses3.svg" alt="icon" class="pluses__image" />
          <div class="card__main">
            <h4 class="card__title">Оплата 20/80</h4>
            <p class="card__text">Всего 20% по договору, остаток при получении авто</p>
          </div>
        </article>
        <article class="pluses__card">
          <img src="@/assets/img/pluses4.svg" alt="icon" class="pluses__image" />
          <div class="card__main">
            <h4 class="card__title">Страхование</h4>
            <p class="card__text">Компенсируем ущерб в любых ситуациях</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "pluses";
</style>
