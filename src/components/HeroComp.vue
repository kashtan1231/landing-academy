<template>
  <div class="hero-comp">
    <div class="hero-comp__wrapper">
      <p class="hero-comp__subtitle regular">Вища Бухгалтерська Online-Академія</p>
      <h1 class="hero-comp__title">
        Підвищення кваліфікації <br />
        та профперепідготовка для бухгалтерів
      </h1>

      <BaseButton text="Обрати навчання >>" />

      <div v-if="isMobileSize" class="hero-comp__carousel">
        <Carousel :itemsToShow="itemsToShow" :wrapAround="true" ref="carousel">
          <Slide v-for="slide in images" :key="slide">
            <img class="image" :src="require(`@/assets/${slide}.png`)" alt="professions" />
          </Slide>
        </Carousel>

        <div class="buttons">
          <img class="buttons__prev" src="@/assets/next.svg" @click="prevSlide" />
          <img class="buttons__next" src="@/assets/next.svg" @click="nextSlide" />
        </div>
      </div>

      <div v-else class="hero-comp__images">
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
import { ref, computed, Ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const images = ['professions', 'lections', 'qualification']
const carousel: Ref = ref()

const itemsToShow = computed((): number => {
  return document.documentElement.clientWidth / 346
})
const isMobileSize = computed((): boolean => {
  return document.documentElement.clientWidth <= 763
})

const prevSlide = () => {
  carousel.value.prev()
}
const nextSlide = () => {
  carousel.value.next()
}
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

  &__carousel ::v-deep {
    margin: 24px 0 32px;
    .carousel__slide {
      padding: 0;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 48px;

      img {
        width: 44px;
      }

      &__prev {
        rotate: 180deg;
        margin-right: 8px;
      }
    }
  }
}

.blue {
  color: $blue;
}
</style>
