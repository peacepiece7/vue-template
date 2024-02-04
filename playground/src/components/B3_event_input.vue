<template>
  <!-- prettier-ignore -->
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" />
  <button>Submit</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps(['modelValue']) // v-model을 사용하려면 "modelValue" props에 대한 정의를 해줘여합니다.
defineEmits(['update:modelValue']) // update:~ 도 예약어 입니다.
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
