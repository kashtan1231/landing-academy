<template>
  <div :class="['base-notification', { error: isError }]">
    <p class="base-notification__text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{ text: string; isError?: boolean }>()
const emit = defineEmits<{
  (e: 'closeTip'): void
}>()

onMounted((): void => {
  setTimeout(() => {
    emit('closeTip') // Генерируем событие для закрытия нотификации
  }, 5000)
})
</script>

<style lang="scss">
.base-notification {
  position: fixed;
  top: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 50px;
  padding: 16px;
  background-color: $green;
  border-radius: 18px;
  z-index: 100;

  &__text {
    color: $white;
  }
}

.error {
  background-color: $red;
}
</style>
