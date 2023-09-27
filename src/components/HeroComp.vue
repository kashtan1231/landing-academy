<template>
  <div class="hero-comp">
    <div class="hero-comp__wrapper">
      <p class="hero-comp__subtitle regular">Вища Бухгалтерська Online-Академія</p>
      <h1 class="hero-comp__title">
        Підвищення кваліфікації <br />
        та профперепідготовка для бухгалтерів
      </h1>

      <BaseButton text="Обрати навчання >>" />

      <div class="hero-comp__images">
        <img class="image margin-images" src="@/assets/professions.png" alt="professions" />
        <img class="image" src="@/assets/lections.png" alt="lections" />
        <img class="image margin-images" src="@/assets/qualification.png" alt="qualification" />
      </div>

      <h3>
        Разом дешевше! Купуйте передплату на Вищу Бухгалтерську <br />
        Online-Академію <span class="blue">8 професій за ціною 2</span>
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseComponents/BaseButton.vue'
</script>

<style scoped lang="scss">
.hero-comp {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  background-color: $white;
  padding: 0 16px 48px;

  &__wrapper {
    max-width: 1080px;
    width: 100%;
  }

  &__subtitle {
    margin-bottom: 24px;
  }

  &__title {
    margin-bottom: 24px;
  }

  &__images {
    display: flex;
    margin: 40px 0;
    justify-content: center;

    :not(:last-child) {
      margin-right: 40px;
    }

    .image {
      width: 276px;
      height: 593px;
    }

    .margin-images {
      margin-top: 36px;
    }
  }
}

.blue {
  color: $blue;
}
</style>
