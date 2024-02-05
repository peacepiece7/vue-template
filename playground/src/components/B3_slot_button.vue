<template>
  <div>
    <slot
      name="title"
      :alt="altTitle">
      Fallback Title
    </slot>
  </div>
  <button>
    <slot>Fallback content</slot>
  </button>
</template>

<script setup>
import { ref } from 'vue'
const altTitle = ref('alt title')
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
