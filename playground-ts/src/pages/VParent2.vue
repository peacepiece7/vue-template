<template>
  <VErrorBoundary>
    <VAsyncMemberTable />
  </VErrorBoundary>
</template>

<script setup>
import VErrorBoundary from "@/components/VErrorBoundary.vue"
import VAsyncMemberTable from "@/components/VAsyncMemberTable.vue"
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
