<template>
  <div>B3_async_conponent</div>
  <div>
    <VAsyncComponent />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const VAsyncComponent = defineAsyncComponent({
    loader :  () => {
        // * async로 작성할 수 없음
        return import('./B3_async_child_component.vue')
    },
    delay : 200, // default
    errorComponent : "<div>Error occured!</div>",
    loadingComponent : "<div>Loading...</div>",
    timeout :30000 // default : infinity
});
</script>

<style scoped>
  section { margin: 40px; }
</style>