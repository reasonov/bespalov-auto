<script setup lang="ts">
interface Props {
  isMenuOpen: boolean
}

const props = defineProps<Props>()

const emits = defineEmits(["closeMenu"])
</script>

<template>
  <div class="menu" :class="{ 'menu--opened': props.isMenuOpen }">
    <nav class="menu__nav">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="#catalog" class="menu__link" @click="emits('closeMenu')">Каталог</a>
        </li>
        <li class="menu__item">
          <a href="#schema" class="menu__link" @click="emits('closeMenu')">Схема работы</a>
        </li>
        <li class="menu__item">
          <a href="#cases" class="menu__link" @click="emits('closeMenu')">Наши кейсы</a>
        </li>
        <li class="menu__item">
          <a href="#reviews" class="menu__link" @click="emits('closeMenu')">Отзывы</a>
        </li>
        <li class="menu__item">
          <a href="#faq" class="menu__link" @click="emits('closeMenu')">Вопросы</a>
        </li>
      </ul>
    </nav>
    <div class="menu__phone-wrapper">
      <img src="@/assets/img/phone-icon.svg" alt="phone" class="phone__image">
      <a href="" class="phone__link">+ 7 987 764 87 66</a>
    </div>
    <span class="menu__text">Обращайтесь в любое время</span>
    <div class="menu__socials">
      <a class="socials__item">
        <img src="@/assets/img/telegram-icon.svg" alt="telegram" class="socials__image">
      </a>
      <a class="socials__item">
        <img src="@/assets/img/whatsapp-icon.svg" alt="whatsapp" class="socials__image">
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "menu";
</style>