<script setup lang="ts">
interface Props {
  isMenuOpen: boolean
}

const emit = defineEmits(["toggleMenu"])

const props = defineProps<Props>()
</script>

<template>
  <div class="header">
    <div class="header__container">
      <a href="#" class="header__logo">
        <img src="@/assets/img/logo.png" alt="logo" />
      </a>


      <nav class="menu__nav">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="#catalog" class="menu__link">Каталог</a>
          </li>
          <li class="menu__item">
            <a href="#schema" class="menu__link">Схема работы</a>
          </li>
          <li class="menu__item">
            <a href="#cases" class="menu__link">Наши кейсы</a>
          </li>
          <li class="menu__item">
            <a href="#reviews" class="menu__link">Отзывы</a>
          </li>
          <li class="menu__item">
            <a href="#faq" class="menu__link">Вопросы</a>
          </li>
        </ul>
      </nav>

      <div class="header__right">
        <div class="menu__phone-wrapper">
          <img src="@/assets/img/phone-icon.svg" alt="phone" class="phone__image">
          <a href="" class="phone__link">+ 7 987 764 87 66</a>
        </div>
        <div class="menu__socials">
          <a class="socials__item">
            <img src="@/assets/img/telegram-icon.svg" alt="telegram" class="socials__image">
          </a>
          <a class="socials__item">
            <img src="@/assets/img/whatsapp-icon.svg" alt="whatsapp" class="socials__image">
          </a>
        </div>
      </div>


      <button
          class="menu__toggle"
          :class="{ 'menu__toggle--opened': props.isMenuOpen }"
          @click="emit('toggleMenu')"
      >
        <span class="menu__line menu__line1"></span>
        <span class="menu__line menu__line2"></span>
        <span class="menu__line menu__line3"></span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "header";
</style>
