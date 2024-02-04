<template>
  <div>B2_props_component</div>
  <div>{{ foo }}</div>
  <div>{{ bar }}</div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'

/**
 * Props는 읽기 전용 객체입니다.
 * 객체/배열 props는 참조로 전달되기에 속성의 변경이 가능하지만 데이터 흐름을 추적하기 아려워지니까 하지 맙시다..!
 * props를 직접 수정하지 말고 submit, click등 이벤트를 상위로 전달하는 방식으로 작성하자. ($emit 사용)
 * @see props {@link https://v3-docs.vuejs-korea.org/guide/components/props.html}
 * @see 유효성-검사 {@link https://v3-docs.vuejs-korea.org/guide/components/props.html#prop-validation}
 */
const props = defineProps({
  foo: String,
  bar: Number,
})

onMounted(() => console.log(...props))
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
