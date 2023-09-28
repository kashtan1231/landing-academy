<template>
  <div class="registration-comp">
    <div class="registration-comp__wrapper">
      <div class="form">
        <h3 class="form__title">Залиште заявку, і ми підберемо для вас умови зі знижкою</h3>
        <BaseInput
          v-model="name"
          class="form__input"
          @checkField="checkField('name')"
          :is-error="nameError"
          error-msg="Введіть коректне ім’я"
          label="Ваше ім’я"
          placeholder="Ваше ім’я"
        />
        <BaseInput
          v-model="phone"
          class="form__input"
          @checkField="checkField('phone')"
          :is-error="phoneError"
          type="tel"
          error-msg="Введіть коректний телефон"
          label="Номер телефону"
          placeholder="Введіть Ваш номер телефону"
        />
        <BaseInput
          v-model="email"
          class="form__input"
          @checkField="checkField('email')"
          :is-error="emailError"
          type="email"
          error-msg="Введіть коректний e-mail"
          label="Ваш e-mail"
          placeholder="Введіть Ваш e-mail"
        />

        <BaseButton
          class="form__button"
          @click="sendUserData"
          :is-disabled="isRegistrateButtonDisabled"
          text="Зареєструватись"
        />
      </div>

      <div class="pros">
        <h3 class="pros__title">З передплатою Академії ви отримаєте:</h3>
        <div class="pros__grid">
          <div class="grid-item">
            <p class="grid-item__title">8+</p>
            <p class="grid-item__descriprion">професійних курсів</p>
          </div>
          <div class="grid-item">
            <p class="grid-item__title">12</p>
            <p class="grid-item__descriprion">закритих клубних лекцій</p>
          </div>
          <div class="grid-item">
            <p class="grid-item__title">48</p>
            <p class="grid-item__descriprion">нових вебінарів та тренінгів</p>
          </div>
          <div class="grid-item">
            <img src="@/assets/infinity.svg" alt="infinity" />
            <p class="grid-item__descriprion">Безлімітні відповіді на запитання протягом навчання</p>
          </div>
          <div class="grid-item">
            <p class="grid-item__title">Тестові та практичні</p>
            <p class="grid-item__descriprion">завдання зі зворотнім зв'язком</p>
          </div>
        </div>
      </div>

      <transition name="fade">
        <BaseNotification v-if="isShownTip" @closeTip="closeTip" :text="tipText" :is-error="isTipError" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseInput from './BaseComponents/BaseInput.vue'
import BaseButton from './BaseComponents/BaseButton.vue'
import BaseNotification from './BaseComponents/BaseNotification.vue'
import { sendForm } from '@/api/mainRequests'

const tipText = ref('')
const name = ref('')
const phone = ref('')
const email = ref('')
const nameError = ref(false)
const phoneError = ref(false)
const emailError = ref(false)
const isShownTip = ref(false)
const isTipError = ref(false)
const emailRegex =
  // eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\"\.+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const isRegistrateButtonDisabled = computed((): boolean => {
  return name.value.length <= 1 || phone.value.length < 19 || !emailRegex.test(email.value)
})

const checkField = (field: string): void => {
  if (field === 'name') nameError.value = name.value.length <= 1
  else if (field === 'phone') phoneError.value = phone.value.length < 19
  else if (field === 'email') emailError.value = !emailRegex.test(email.value)
}
const closeTip = (): void => {
  isShownTip.value = false
}
const sendUserData = async (): Promise<void> => {
  try {
    const { data } = await sendForm({
      name: name.value,
      phone: phone.value,
      email: email.value,
    })

    if (data.result) {
      tipText.value = 'Успішна реєстрація'
      isTipError.value = false
      isShownTip.value = true
    }
  } catch (error: any) {
    tipText.value = error.response.data.message
    isTipError.value = true
    isShownTip.value = true
  }
}
</script>

<style lang="scss">
.registration-comp {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 32px 16px;
  background-color: $white;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(240px, 496px));
    justify-content: space-between;
    column-gap: 16px;
    max-width: 1080px;
    width: 100%;
  }

  .form {
    padding: 0 24px;

    &__title {
      margin-bottom: 24px;
    }

    &__input {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    &__button {
      margin-top: 12px;
    }
  }

  .pros {
    &__title {
      margin-bottom: 24px;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 228px));
      justify-content: space-between;
      gap: 32px 8px;

      .grid-item {
        &__title {
          @extend h1;
          font-size: 64px;
          line-height: 94px;
          font-weight: 400;
          color: $blue;
        }

        &:last-child {
          grid-column: span 2;

          .grid-item__title {
            font-family: $font-family-default;
            font-size: 40px;
            line-height: 60px;
            font-weight: 700;
          }
        }
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
