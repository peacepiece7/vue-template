<template>
  <section>
    <div>B3_provide_inject_child</div>
    <slot name="title">
      <h1>Default Title</h1>
    </slot>
  </section>
  <section>
    <B3_provide_inject_deep_child />
  </section>
</template>

<script setup>
import B3_provide_inject_deep_child from './B3_provide_inject_deep_child.vue';
</script>

<style scoped>
  section { margin: 40px; }
</style>