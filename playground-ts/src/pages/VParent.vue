<script setup lang="ts">
import { defineComponent, ref } from "vue"
import AsyncMemberTable from "@/components/VAsyncMemberTable.vue"
import { onErrorCaptured } from "vue" // 요기서 suspense의 에러 여부를 받는다.

const hasError = ref<boolean>(false)

onErrorCaptured((e: Error) => {
  console.error(e)
  hasError.value = true
  return false
})

defineComponent({
  name: "AdminMain",
})
</script>

<template>
  <div class="flex w-full">
    <div v-if="hasError">ERROR CURRED!</div>
    <Suspense v-else>
      <AsyncMemberTable />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>
