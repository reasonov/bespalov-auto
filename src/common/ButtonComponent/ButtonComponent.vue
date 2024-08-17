<script setup lang="ts">
interface Props {
  text: string;
  fullWidth?: boolean;
  size?: "max" | "lg" | "md" | "sm";
}

const props = withDefaults(defineProps<Props>(), {
  fullWidth: false,
  size: "md"
});
</script>

<template>
  <button
    class="button"
    :class="[{ 'button--full-width': props.fullWidth }, `button--${props.size}`]"
    type="button"
  >
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
@import "button-component";
</style>
