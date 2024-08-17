<script setup lang="ts">
import { ref } from "vue";

interface Props {
  title: string;
  text: string;
}

const props = defineProps<Props>();

const isOpen = ref(false);
</script>

<template>
  <div class="accordion">
    <div class="accordion__header" @click="isOpen = !isOpen">
      <h5 class="accordion__title">{{ props.title }}</h5>
      <button class="accordion__toggle" :class="{ 'accordion__toggle--open': isOpen }">
        <span class="toggle__line toggle__line1"></span>
        <span class="toggle__line toggle__line2"></span>
      </button>
    </div>
    <transition name="accordionAm">
      <div class="accordion__wrapper" v-if="isOpen">
        <div class="accordion__body">
          <p class="accordion__text">{{ props.text }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import "accordion-component";
</style>
