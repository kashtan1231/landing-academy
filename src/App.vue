<template>
  <div>
    <h1>Навчання, яке працює!Відкрийте для себе найпопулярніші курси</h1>
    <BaseInput
      v-model="name"
      @checkField="checkField"
      :isError="isError"
      errorMsg="asdasd"
      placeholder="Ваше ім’я"
      label="Name"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "./components/BaseComponents/BaseInput.vue";
const name = ref("");
let isError = ref(false);

const checkField = (): void => {
  console.log("hi");

  isError.value = true;
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
