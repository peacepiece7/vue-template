<!--  eslint-disable-next-line vue/v-on-style -->

<!--  reactive로 생성한 반응형 객체는 JavaScript Proxy이며 일반 객체처럼 작동합니다  -->

<template>
  <div>A2_Reactive_Synctax</div>
  <section>
    <div id="count">
      {{ state.count }}
    </div>
    <button @click="increment">Increment</button>
  </section>
  <section>
    <div>
      <h2>깊은 반응형 deep arr</h2>
      <ul>
        <li v-for="(item, idx) of state.deepArr" :key="item.id">
          {{ idx + item.name }}
        </li>
      </ul>
      <li>{{ state.deepArr.length }}</li>
    </div>
    <button @click="addDeepArr">Add deepArr</button>
    <button @click="editArr">Edit Some Arr</button>
  </section>
</template>

<!-- 
* setup() 함수를 사용할 경우    
<script>
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      count: 0,
    })
    return { state }
  },
}
</script> -->

<!-- * <script setup>를 사용할 경우     -->
<script setup>
import { reactive, nextTick } from 'vue'

/**
 * @note 반응형 상태 설정
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state
 */
const state = reactive({
  count: 0,
  arr: ['foo', 'bar'],
  deepArr: [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
  ],
})

/**
 * @note DOM 업데이트 타이밍
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/reactivity-fundamentals.html#dom-update-timing
 */
function increment() {
  // vue/script-setup-uses-vars 참고
  state.count++ // 비동기적으로 화면 업데이트
  console.log('update before :', document.getElementById('count').textContent)
  nextTick(() => {
    //  업데이트된 DOM에 접근 가능
    console.log('update after :', document.getElementById('count').textContent)
  })
}

/**
 * @note 깊은 반응형으로 상태의 변경을 감지
 * @link https://v3-docs.vuejs-korea.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue
 * @link https://v3-docs.vuejs-korea.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue
 */
async function addDeepArr() {
  const nextId = state.deepArr.indexOf(state.deepArr.length - 1) + 1
  await new Promise((res) => setTimeout(res, 1000)) // TODO : 수많은 요청이 동시에 들어오더라도 한 번에 처리
  state.deepArr.push({ id: nextId, name: 'baz' })
  state.arr.push('baz')
}
function editArr() {
  state.deepArr[0].name = 'edited'
}

/**
 * @note reactive() 주의사항
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/reactivity-fundamentals.html#reactive-proxy-vs-original-1
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive
 * @description
 * 1. reactive()의 반환 값은 원본 객체의 Proxy이며, 원본 객체와 다른 참조를 가집니다.
 * 2. 컬렉션 유형에만 작동함 (Promitive type은 작동하지 않음)
 * 3. Proxy 객체이기 때문에 연결이 끊어지면 반응성이 사라집니다.
 */
</script>

<style scoped></style>
