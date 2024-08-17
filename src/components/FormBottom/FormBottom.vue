<script setup lang="ts">
import { FormComponent } from "@/common";

interface IProps {
  title?: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: "Остались вопросы?"
})
</script>

<template>
  <div class="form-bottom">
    <div class="form-bottom__container">
      <div class="form-bottom__main">
        <div class="form-bottom__text">
          <h4 class="form-bottom__title">{{ props.title }}</h4>
          <h5 class="form-bottom__subtitle">Оставьте данные и мы вам перезвоним</h5>
        </div>
        <FormComponent />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "form-bottom";
</style>
