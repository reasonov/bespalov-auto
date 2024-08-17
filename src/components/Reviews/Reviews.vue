<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import avatar from "@/assets/img/review-avatar.png"
import {ref} from "vue";
import { CAROUSEL_BREAKPOINTS } from "@/constants.js";

const REVIEWS = [
  {
    author: "Дмитрий Кожухов",
    avatar: avatar,
    comment: "Прошло все идеально! Купили авто в Корее, были получены все документы, автомобиль был готов, помыт. Компания доставила машину до того места где я указал. Мне понравилось сотрудничество, покупкой очень доволен",
    date: "10.09.2023",
    isOpen: ref(false)
  },
  {
    author: "Дмитрий Кожухов1",
    avatar: avatar,
    comment: "Прошло все идеально! Купили авто в Корее, были получены все документы, автомобиль был готов, помыт. Компания доставила машину до того места где я указал. Мне понравилось сотрудничество, покупкой очень доволен Прошло все идеально! Купили авто в Корее, были получены все документы, автомобиль был готов, помыт. Компания доставила машину до того места где я указал. Мне понравилось сотрудничество, покупкой очень доволен",
    date: "10.09.2023",
    isOpen: ref(false)
  },
  {
    author: "Дмитрий Кожухов2",
    avatar: avatar,
    comment: "Прошло все идеально! Купили авто в Корее, были получены все документы, автомобиль был готов, помыт. Компания доставила машину до того места где я указал. Мне понравилось сотрудничество, покупкой очень доволен Прошло все идеально! Купили авто в Корее, были получены все документы, автомобиль был готов, помыт. Компания доставила машину до того места где я указал. Мне понравилось сотрудничество, покупкой очень доволен Прошло все идеально! Купили авто в Корее, были получены все документы, автомобиль был готов, помыт. Компания доставила машину до того места где я указал. Мне понравилось сотрудничество, покупкой очень доволен",
    date: "10.09.2023",
    isOpen: ref(false)
  },
  {
    author: "Дмитрий Кожухов3",
    avatar: avatar,
    comment: "Прошло все идеально! Купили авто в Корее, были получены все документы, автомобиль был готов, помыт. Компания доставила машину до того места где я указал. Мне понравилось сотрудничество, покупкой очень доволен",
    isOpen: ref(false)
  },
]

const LARGE_TEXT_SYMBOLS = 250

function isLargeComment(comment) {
  return comment.length > LARGE_TEXT_SYMBOLS
}

function normalizeLargeComment({ comment, isOpen }) {
  if (isOpen.value || !isLargeComment(comment)) return comment
  return comment.slice(0, LARGE_TEXT_SYMBOLS) + "..."
}
</script>

<template>
  <div class="review">
    <div class="review__container" data-aos="fade-right" data-aos-duration="800">
      <h4 class="review__title">Отзывы</h4>
      <Carousel :breakpoints="CAROUSEL_BREAKPOINTS" :wrap-around="true">
        <Slide v-for="(review, index) in REVIEWS" :key="review.author + index">
          <div class="review__card">
            <div class="review__header">
              <img class="review__image" :src="review.avatar" alt="reviewer">
              <div class="review__wrapper">
                <h5 class="review__name">{{ review.author }}</h5>
                <span v-if="review.date" class="review__date">{{ review.date }}</span>
              </div>
            </div>
            <p class="review__comment" :class="{ 'comment--toggle': review.isOpen.value }">{{ normalizeLargeComment(review) }}</p>
            <button
                v-if="isLargeComment(review.comment)"
                class="review__toggle"
                type="button"
                @click="review.isOpen.value = !review.isOpen.value"
            >
              <span v-if="!review.isOpen.value">Читать все</span>
              <span v-else>Скрыть</span>
              <img class="toggle-icon" :class="{ 'toggle-icon--active': review.isOpen.value }" src="@/assets/img/arrow-bottom.svg" alt="arrow">
            </button>
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
@import "reviews";
</style>
