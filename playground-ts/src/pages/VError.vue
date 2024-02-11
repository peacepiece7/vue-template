<template>
  <VErrorBoundary>
    <VErrorFirst />
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </VErrorBoundary>
</template>

<script setup>
import VErrorBoundary from "@/components/VErrorBoundary.vue"
import VErrorFirst from "@/components/VErrorFirst.vue"
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
