<template>
  <button @click="$emit('handleClick', $event)">Button</button>
</template>

<script setup>
import { defineEmits, onMounted } from 'vue'

const emit = defineEmits(['handleClick'])

onMounted(() => {
  emit('handleClick', 'onMounted!!')
})
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
