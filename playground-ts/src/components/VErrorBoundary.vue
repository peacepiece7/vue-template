<script setup lang="ts">
import { ref, onErrorCaptured } from "vue"

const hasError = ref<boolean>(false)

onErrorCaptured((e: Error) => {
  console.error(e)
  hasError.value = true
  return false
})
</script>

<template>
  <div v-if="hasError">
    <slot name="error">
      <div>Error occurred!</div>
    </slot>
  </div>
  <Suspense>
    <template #default>
      <slot name="default" />
    </template>
    <template #fallback>
      <slot name="fallback">
        <div>Loading...</div>
      </slot>
    </template>
  </Suspense>
</template>
