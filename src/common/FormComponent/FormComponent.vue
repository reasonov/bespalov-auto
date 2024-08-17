<script setup>
import { InputComponent, ButtonComponent } from "@/common";
import { ref } from "vue";

const formValues = ref({
  name: "",
  phone: "",
  place: ""
});

function submitForm() {
  console.log(formValues.value);
}
</script>

<template>
  <div class="form-wrapper">
    <form class="form">
      <InputComponent
          placeholder="Имя"
          :value="formValues.name"
          @onInput="formValues.name = $event"
      />
      <InputComponent
          placeholder="Номер телефона"
          :value="formValues.phone"
          @onInput="formValues.phone = $event"
      />
      <InputComponent
          placeholder="Ваш город"
          :value="formValues.place"
          @onInput="formValues.place = $event"
      />
    </form>
    <ButtonComponent text="Отправить" size="lg" fullWidth @click="submitForm" />
  </div>
</template>

<style scoped lang="scss">
@import "form-component";
</style>
