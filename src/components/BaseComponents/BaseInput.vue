<template>
  <div class="base-input">
    <label class="base-input__label" for="input">{{ label }}</label>
    <input
      :class="['base-input__input', { error: isError }]"
      @blur="checkField"
      @input="onInput"
      :value="modelValue"
      :placeholder="placeholder"
      :type="type || 'text'"
      id="input"
    />
    <p v-if="errorMsg && isError" class="base-input__error">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  modelValue: string
  placeholder: string
  type?: string
  errorMsg?: string
  isError?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'checkField'): void
}>()
const checkField = (): void => {
  emit('checkField')
}

const onInput = (event: Event): void => {
  const target = event.target as HTMLInputElement

  if (props.type === 'tel') {
    target.value = target.value.replace('+38 (0', '').replace(/\D/g, '').slice(0, 9)
    const phoneRegex = /^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/

    target.value = target.value.replace(phoneRegex, (_match, p1, p2, p3, p4) => {
      const formattedNumber = []

      if (p1) {
        formattedNumber.push(`+38 (0${p1}`)
      }
      if (p2) {
        formattedNumber.push(`) ${p2}`)
      }
      if (p3) {
        formattedNumber.push(` ${p3}`)
      }
      if (p4) {
        formattedNumber.push(` ${p4}`)
      }

      return formattedNumber.join('')
    })
  }
  emit('update:modelValue', target.value)
}
</script>

<style lang="scss" scoped>
.base-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 488px;

  &__label {
    @extend p;
    margin-bottom: 8px;
    font-weight: 400;
    line-height: 30px;
  }

  &__input {
    @extend p;
    padding: 16px 24px;
    box-shadow: inset 0 0 0 1px $black;
    border-radius: 32px;
    background-color: $gray;
    font-weight: 400;
    line-height: 30px;
    caret-color: $purple;
  }

  &__error {
    margin-top: 8px;
    font-weight: 400;
    line-height: 30px;
    color: $red;
  }

  .error {
    box-shadow: inset 0 0 0 1px $red;
  }
}
</style>
