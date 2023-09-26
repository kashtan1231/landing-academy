<template>
  <div>
    <h1>Навчання, яке працює!Відкрийте для себе найпопулярніші курси</h1>
    <BaseInput label="Name" />
  </div>
</template>

<script setup lang="ts">
import BaseInput from "./components/BaseComponents/BaseInput.vue";
</script>

<style lang="scss">
#app {
  font-family: $font-family-default;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $gray;
}
</style>
