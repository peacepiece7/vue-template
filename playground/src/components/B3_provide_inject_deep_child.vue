<template>
  <div>B3_provide_inject_deep_child</div>
  <div>Title content : {{ titleContent }}</div>
  <div>Content : {{ content }}</div>
</template>

<script setup>
import { inject } from 'vue';
const titleContent = inject('titleContent');
const content = inject('content');

</script>

<style scoped>
  section { margin: 40px; }
</style>