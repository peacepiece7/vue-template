<template>
  <div>B1_registration_component</div>
</template>

<script setup>
/**
 * @see {@link https://v3-docs.vuejs-korea.org/guide/components/registration.html}
 */

// * 전역 등록
// main.js에서 등록해서 사용하게는게 좋아 보임, 주로 Teleport, Dialog, Loading 등에 쓰자.
// tree-shaking이 안되니 주의!
import { createApp } from 'vue'
import Title from './Title.vue'
import Button from './Button.vue'

// const app = createApp({})
// app.component('TitleA', Title)
// app.component('ButtonB', Button)

// * 로컬 등록
// Option API의 export default { component : {}}
// Composition에서는 import 해주기만 하면 됨 import Title from './Title.vue'
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
