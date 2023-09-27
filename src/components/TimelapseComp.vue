<template>
  <div class="timelaps-comp">
    <div class="timelaps-comp__wrapper">
      <h1 class="timelaps-comp__title">
        Навчання, яке працює! <br />
        Відкрийте для себе найпопулярніші курси
      </h1>

      <div class="text-box">
        <p class="text-box__item regular">Ціни раннього бронювання</p>
        <p class="text-box__item regular">Подорожчання на 10%</p>
        <p class="text-box__item regular">Подорожчання на 15%</p>
        <p class="text-box__item regular">Квитки <br />вже закінчаться</p>
      </div>

      <div class="timeline">
        <div class="timeline__slider" :style="`width: ${timeLineWidth}%`"></div>
        <div class="timeline__points">
          <div v-for="point in 5" class="timeline__point" :key="point"></div>
        </div>
        <div class="timeline__shadow-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const timeLineWidth = ref(0)

onMounted((): void => {
  const today = new Date().getTime()
  const datePoint1 = new Date(2023, 7, 21).getTime()
  const datePoint2 = new Date(2023, 8, 1).getTime()
  const datePoint3 = new Date(2023, 8, 15).getTime()
  const datePoint4 = new Date(2023, 9, 3).getTime()

  switch (true) {
    case today < datePoint1:
      timeLineWidth.value = 9
      break
    case today === datePoint1:
      timeLineWidth.value = 18
      break
    case today < datePoint2:
      timeLineWidth.value = 34
      break
    case today === datePoint2:
      timeLineWidth.value = 50
      break
    case today < datePoint3:
      timeLineWidth.value = 66
      break
    case today === datePoint3:
      timeLineWidth.value = 82
      break
    case today < datePoint4:
      timeLineWidth.value = 91
      break
    default:
      timeLineWidth.value = 100
  }
})
</script>

<style lang="scss">
.timelaps-comp {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  background-color: $white;
  padding: 80px 16px 112px;

  &__wrapper {
    max-width: 1080px;
    width: 100%;
  }

  &__title {
    margin-bottom: 56px;
  }

  .text-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;

    &__item {
      width: 137px;

      &:first-child {
        text-align: left;
      }

      &:last-child {
        text-align: right;
      }
    }
  }

  .timeline {
    position: relative;
    width: 100%;

    &__slider {
      position: relative;
      top: 0;
      left: 0;
      width: 60%;
      height: 6px;
      background-color: $black;
      z-index: 2;

      &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(50%, -50%);
        display: block;
        width: 33px;
        height: 33px;
        background-color: $yellow;
        border-radius: 50%;
        box-shadow: inset 0 0 0 3px $black;
      }

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(50%, -50%);
        display: block;
        width: 13px;
        height: 13px;
        background-color: $black;
        border-radius: 50%;
      }
    }

    &__point {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 3px;
      height: 17px;
      background-color: $black;
      z-index: 1;

      &:nth-child(2) {
        left: 18%;

        &::after {
          content: '21 серпня';
          position: absolute;
          top: 36px;
          left: 0;
          transform: translateX(-50%);
          width: max-content;
          @extend .regular;
          font-weight: 700;
        }
      }

      &:nth-child(3) {
        left: 50%;
        transform: translate(-50%, -50%);

        &::after {
          content: '1 вересня';
          position: absolute;
          top: 36px;
          left: 0;
          transform: translateX(-50%);
          width: max-content;
          @extend .regular;
          font-weight: 700;
        }
      }

      &:nth-child(4) {
        right: 18%;
        left: unset;

        &::after {
          content: '15 вересня';
          position: absolute;
          top: 36px;
          left: 0;
          transform: translateX(-50%);
          width: max-content;
          @extend .regular;
          font-weight: 700;
        }
      }

      &:last-child {
        left: unset;
        right: 0;

        &::after {
          content: '3 жовтня';
          position: absolute;
          top: 36px;
          right: 0;
          width: max-content;
          @extend .regular;
          font-weight: 700;
        }
      }
    }

    &__shadow-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: $gray;
    }
  }
}
</style>
