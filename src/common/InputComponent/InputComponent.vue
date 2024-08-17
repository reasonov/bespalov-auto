<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "text" | "phone" | "place";
  value: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text"
});

const emit = defineEmits(["onInput"]);

const normalizeType = computed(() => (props.type === "phone" ? "tel" : "text"));

function onInput(event) {
  emit("onInput", event.target.value);
}
</script>

<template>
  <input
    :type="normalizeType"
    :placeholder="props.placeholder"
    class="input"
    :value="props.value"
    @input="onInput($event)"
  />
</template>

<style scoped lang="scss">
@import "input-component";
</style>
