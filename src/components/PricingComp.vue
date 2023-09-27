<template>
  <div class="pricing-comp">
    <div class="pricing-comp__wrapper">
      <h1 class="pricing-comp__title">
        Передплата на Вищу Бухгалтерську <br />
        Онлайн-Академію
      </h1>
      <p class="pricing-comp__subtitle">Оберіть свій тарифний пакет:</p>

      <div class="pricing-comp__header">
        <vue-countdown class="countdown" :time="date" v-slot="{ days, hours, minutes, seconds }">
          <div class="countdown__time">
            <span>{{ days }}</span>
            <span>{{ hours }}</span>
            <span>{{ minutes }}</span>
            <span>{{ seconds }}</span>
          </div>
          <div class="countdown__markers">
            <span>дн</span>
            <span>год</span>
            <span>хв</span>
            <span>сек</span>
          </div>
          <p class="countdown__sale">
            (для діючих передплатників <br />
            додаткова знижка 10%)
          </p>
        </vue-countdown>

        <div v-for="(item, index) in prices" class="prices" :key="item.title">
          <div v-if="index === 0" class="prices__header">
            <img src="@/assets/arrow-down.svg" alt="arrow-down" />
            <span class="prices__header-text">ХІТ ПРОДАЖУ</span>
            <img src="@/assets/arrow-down.svg" alt="arrow-down" />
          </div>
          <p class="prices__title">{{ item.title }} <img src="@/assets/sale.svg" alt="sale" /></p>
          <p v-html="item.description" class="prices__description"></p>
          <p class="prices__old-price">1079 грн/міс.</p>
          <p class="prices__sale regular">679 грн/міс.</p>
          <BaseButton class="prices__button" text="Оплатити карткою" />
          <a href="#" class="prices__link">Оплатити частинами</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from './BaseComponents/BaseButton.vue'

const prices = [
  {
    title: 'СУПЕРПРОФЕСІОНАЛ',
    description: '8 професійних курсів<br/> за ціною 2',
  },
  {
    title: 'ПРЕМІУМ',
    description: '8 професійних курсів за ціною 2 +<br/>Бухгалтерська Відеоплатформа №1',
  },
]

const date = computed(() => {
  const nowDate = new Date()
  const eventDate = new Date('October 3, 2023 17:00:00')
  return Number(eventDate) - Number(nowDate)
})
</script>

<style lang="scss">
.pricing-comp {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 80px 16px 112px;

  &__wrapper {
    max-width: 1080px;
    width: 100%;
  }

  &__title {
    margin-bottom: 16px;
  }

  &__subtitle {
    @extend p;
    margin-bottom: 76px;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
  }

  &__header {
    display: flex;
    align-items: center;

    .countdown {
      margin-right: auto;
      padding-left: 12px;

      &__time {
        display: flex;
        justify-content: center;

        span {
          position: relative;
          display: block;
          min-width: 34px;
          @extend p;
          font-size: 29px;
          font-weight: 400;
          line-height: 44px;
          color: $blue;

          &:not(:last-child) {
            margin-right: 20px;

            &::after {
              content: ':';
              position: absolute;
              right: -13px;
            }
          }
        }
      }

      &__markers {
        display: flex;
        justify-content: space-around;
        color: $blue;
      }

      &__sale {
        margin-top: 12px;
        font-weight: 400;
      }
    }

    .prices {
      position: relative;
      padding: 12px 28px;
      max-width: 312px;

      &:last-child {
        background-color: rgba($blue, 0.05);
        border-top-right-radius: 18px;
        border-top-left-radius: 18px;
      }

      &__header {
        position: absolute;
        top: -28px;
        left: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 28px * 2);
        background-color: $yellow;
        padding: 6px;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;

        > :not(:last-child) {
          margin-right: 12px;
        }

        &-text {
          @extend p;
          font-size: 13px;
          font-weight: 700;
          line-height: 14px;
        }
      }

      &__title {
        @extend p;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 800;
        line-height: 20px;

        img {
          margin-left: 16px;
        }
      }

      &__description {
        @extend p;
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 20px;
      }

      &__old-price {
        @extend p;
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 20px;
        text-decoration: line-through;
        color: $gray-dark;
      }

      &__sale {
        font-weight: 700;
        margin-bottom: 12px;
      }

      &__button {
        width: 100%;
        margin-bottom: 12px;
      }

      &__link {
        @extend p;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
