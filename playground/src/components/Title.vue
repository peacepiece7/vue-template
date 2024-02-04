<template>
  <div>{{ title }}</div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['title'])
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
