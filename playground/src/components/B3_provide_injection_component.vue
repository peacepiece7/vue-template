<template>
  <div>B3_provide_injection_component</div>
  <section>
    <B3_provide_inject_child />
  </section>
  <section>
    <h2>dynamic provide</h2>
    <input v-model="content" />
  </section>
</template>

<script setup>
/**
 * @note provide/inject 사용 방법
 * @link https://v3-docs.vuejs-korea.org/guide/components/provide-inject.html#working-with-symbol-keys
 */
import B3_provide_inject_child from './B3_provide_inject_child.vue';
import { provide , ref } from 'vue';
provide('titleContent', 'Hello deep child');

// * dynamic provide
const content = ref("deep child content")
provide("content", content)

</script>

<style scoped>
  section { margin: 40px; }
</style>