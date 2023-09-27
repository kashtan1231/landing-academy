<template>
  <button class="base-button" :disabled="isDisabled">{{ text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string; isDisabled?: boolean }>()
</script>

<style lang="scss" scoped>
.base-button {
  @extend p;
  padding: 18px 32px;
  font-weight: 700;
  background-color: $blue;
  border-radius: 32px;
  color: $white;
  transition-duration: 0.2s;

  &:hover {
    background-color: $purple;
  }

  &:disabled {
    background-color: $gray-dark;
    pointer-events: none;
  }
}
</style>
