<template>
  <div>B3_event_computed_input</div>
  <input v-model="value" />
  <button>Submit</button>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
