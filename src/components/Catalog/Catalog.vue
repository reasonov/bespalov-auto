<script setup>
import { ButtonComponent } from "../../common"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import { CAROUSEL_BREAKPOINTS } from "@/constants.js";
</script>

<template>

  <div class="catalog">
    <div class="catalog__container" data-aos="fade-up" data-aos-duration="800">
      <div class="catalog__header">
        <h3 class="catalog__title">Каталог автомобилей</h3>
      </div>

      <Carousel :breakpoints="CAROUSEL_BREAKPOINTS" :wrap-around="true">
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">
            <div class="card">
              <img src="@/assets/img/car-photo.png" alt="car-image" class="card__image">
              <h5 class="card__title">Mercedes-Benz G-Класс 500, 2019 г.</h5>

              <div class="card__stats">
                <div class="card__stroke">
                  <span class="card__label">Пробег</span>
                  <span class="card__value">80 000 км</span>
                </div>
                <div class="card__stroke">
                  <span class="card__label">Модификация</span>
                  <span class="card__value">2.0 АТ</span>
                </div>
                <div class="card__stroke">
                  <span class="card__label">Тип двигателя</span>
                  <span class="card__value">Бензин</span>
                </div>
                <div class="card__stroke">
                  <span class="card__label">Привод</span>
                  <span class="card__value">Полный</span>
                </div>
                <div class="card__stroke">
                  <span class="card__label">Владецев по ПТС</span>
                  <span class="card__value">1</span>
                </div>
              </div>

              <div class="card__prices">
                <div class="card__stroke card__price--main">
                  <img src="@/assets/img/bespalov-catalog.png" alt="site-logo" class="prices__logo">
                  <span class="card__price">12 000 000 ₽</span>
                </div>

                <div class="card__prices--secondary">
                  <div class="card__stroke">
                    <img src="@/assets/img/avito-catalog.png" alt="avito-logo" class="prices__logo">
                    <span class="card__price">от 19 000 000 ₽</span>
                  </div>
                  <div class="card__stroke">
                    <img src="@/assets/img/drom-catalog.png" alt="drom-logo" class="prices__logo">
                    <span class="card__price">от 19 000 000 ₽</span>
                  </div>
                  <div class="card__stroke">
                    <img src="@/assets/img/auto-ru-catalog.png" alt="auto-ru-logo" class="prices__logo">
                    <span class="card__price">от 18 000 000 ₽</span>
                  </div>
                </div>
              </div>

              <div class="card__actions">
                <ButtonComponent text="Хочу заказать такой" fullWidth size="lg" />

                <button class="card__call" type="button">
                  <img src="@/assets/img/phone-icon.svg" alt="phone-icon">
                </button>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/common/CarouselComponent/carousel-component";
@import "catalog";
</style>
