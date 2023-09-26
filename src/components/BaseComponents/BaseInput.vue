<template>
  <div class="base-input">
    <label for="input">{{ label }}</label>
    <input @input="onInput" :value="modelValue" type="text" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string; modelValue: string }>();

const onInput = (event: Event): void => {
  console.log(event.target.value);
};
</script>

<style lang="scss">
#app {
  font-family: $font-family-default;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $gray;
}
</style>
