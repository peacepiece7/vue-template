<template>
  <div>A12_component_composition</div>
  <section>
    <div>버튼들</div>
    <Button @handle-click="handleClick" />
    <Button />
  </section>
  <section>
    <div>타이틀</div>
    <Title :title="title" />
  </section>
</template>

<script setup>
import Button from './Button.vue'
import Title from './Title.vue'

import { ref } from 'vue'
const title = ref('hello, world')

function handleClick(e) {
  console.log('Parent : Button clicked', e)
}
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
