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

        <BaseButton class="form__button" :is-disabled="isRegistrateButtonDisabled" text="Зареєструватись" />
      </div>

      <div class="pros">
        <h3 class="pros__title">З передплатою Академії ви отримаєте:</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseInput from './BaseComponents/BaseInput.vue'
import BaseButton from './BaseComponents/BaseButton.vue'

const name = ref('')
const phone = ref('')
const email = ref('')
const nameError = ref(false)
const phoneError = ref(false)
const emailError = ref(false)
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
    grid-template-columns: 1fr 1fr;
    column-gap: 88px;
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
}
</style>
