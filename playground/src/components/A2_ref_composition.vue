<!-- ref()를 사용한 반응형 변수 -->
<!-- 
    ref와 reactive는 둘 다 반응형 변수를 생성하는데 사용됩니다.
    ref는 단일 값을 감싸고, reactive는 객체를 감쌉니다.
    ref는 .value를 사용하여 내부 값을 언래핑 해야하지만, reactive는 그럴 필요가 없습니다.

    ref는 주로 컴포저블 API에서 사용됩니다.
    https://v3-docs.vuejs-korea.org/guide/reusability/composables.html

-->

<template>
  <div>A2_ref_composition</div>
  <section>
    <h2>unwrapping-in-templates</h2>
    <div>{{ num }}</div>
    <div>{{ state.obj.count }}</div>
    <button @click="increment">
      Increment
    </button>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
// 어떠한 유형의 데이터라도 반응형으로 재정의할 수 있다.
const num = ref(1)

const obj = ref({count : 1})
const state = reactive({
    obj // 반응형 객체에서 ref는 언래핑 된다. (.value를 사용하지 않아도 됩니다.) 
})


// obj의 참조가 유지 됩니다.
obj.value.count = 2
console.log(obj.value.count)
console.log(state.obj.count)

const obj20 = ref({count : 20})

// state의 obj가 obj20을 참조하므로 obj의 참조가 끊어집니다.
state.obj = obj20
console.log(obj.value.count)
console.log(state.obj.count)


/**
 * @note 템플릿에서 ref 언래핑
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/reactivity-fundamentals.html#ref-unwrapping-in-templates
 */
function increment() {
    num.value++
}
</script>

<style scoped>
section {
  margin: 40px;
}
</style>