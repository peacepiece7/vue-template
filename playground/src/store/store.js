// store.js
import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment() {
    this.count++
  }
})


/* 
example 1)

<script setup>
import { store } from './store.js'
</script>

<template>A 컴포넌트에서: {{ store.count }}</template> 
*/

// https://v3-docs.vuejs-korea.org/guide/scaling-up/state-management.html