<template>
  <!-- prettier-ignore -->
  <input
    :value="firstName"
    @input="emitValue" />
  <!-- prettier-ignore -->
  <input
    :value="lastName"
    @input="emitValue" />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
/**
 * @note props가 하나라면 다음과 같이 예약어를 사용해야함
 * @example
 * const props = defineProps({
 * modelValue: String,
 * modelModifiers: { default: () => ({})
 * })
 * @see https://v3-docs.vuejs-korea.org/guide/components/v-model.html#handling-v-model-modifiers
 */
const props = defineProps([
  'firstName',
  'firstNameModifiers',
  'lastName',
  'lastNameModifiers',
])
const emits = defineEmits(['update:firstName', 'update:lastName'])

function emitValue(e) {
  const value = e.target.value
  if (props.firstNameModifiers?.onlyString) {
    emits('update:firstName', value.replace(/[^a-zA-Z]/g, ''))
  } else if (props.lastNameModifiers?.noSpace) {
    emits('update:lastName', value.replace(/\s/g, ''))
  } else {
    emits('update:firstName', value)
  }
}
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
