<template>
  <button @click="$emit('handleClick')">Button</button>
</template>

<script setup>
import { defineEmits } from 'vue'
function handleClick() {
  console.log('Child : Button clicked')
}
defineEmits(['handleClick'])
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
