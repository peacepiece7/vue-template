<template>
  <div>A10_watcher_egaer_composition</div>
  <section>
    <h2>Eager Wachter</h2>
    <input v-model="input" />
  </section>
  <section>
    <h2>WatchEffect</h2>
    <input v-model="text" />
    <div>{{ '응답 : ' + data }}</div>
  </section>
</template>

<script setup>
import { ref, watch, reactive, watchEffect } from 'vue'
const input = ref('')

// * 열성적 감시자
watch(
  input,
  (newInput, oldInput) => {
    console.log('newInput', newInput)
    console.log('oldInput', oldInput)
  },
  {
    immediate: true, // onMounted와 같은 효과
  }
)

// * 사이드 이펙트 내에서 모든 상태를 감시하기 (watchEffect)
const text = ref('')
const data = ref('')
/**
 * @note watchEffect
 * @description
 * 내부 반응형 상태가 변경되면 즉시 실행됩니다.
 * useEffect와 비슷한데, 의존성에 모든 상태가 들어가 있다고 보면 된다.
 * ! 비동기 콜백과 함께 사용할 때 첫 번째 await 틱 이전에 접근한 속성들만 추적한ㄷ. 아래 예제는 ArrowFunction이라서 동작!
 */
watchEffect(async () => {
  // const url = 'https://api' + text.value <= 이런식으로 작성해야 감시됨
  const response = await new Promise((res) =>
    setTimeout(() => {
      if (text.value === '') return res('정보가 없습니다.')
      res('정보 ' + text.value)
    }, 1000)
  )
  data.value = response
})

/**
 * watchEffect VS watch
 * * watch : 명시적으로 감시된 소스만 추적
 * * watchEffect : 동기적(sync) 실행 중에 조회되는 모든 반응형 속성을 자동으로 추적
 *
 */

/**
 * @note Cb 실행 타이밍
 */
const obj = ref({ count: 1 })
const cb = (newObj, oldObj) => {
  console.log('obj가 변경되었습니다.', newObj)
}

watchEffect(cb, {
  flush: 'post', // DOM 업데이트 이후에 콜백 실행 ( $refs를 통해 업데이트 된 DOM 또는 하위 컴포넌트에 접근해야하는 경우 사용)
})
watch(obj, cb, {
  flush: 'pre', // DOM 업데이트 이전에 콜백 실행 (default)
})
watch(obj, cb, {
  flush: 'sync', // 값이 변경되는 즉시 콜백 실행 (로직의 순서가 중요할 경우나 비동기로 동작할 경우 사용 가능)
})

// * watchEffect 수동 중단하기
// unmounted시 자동으로 중단 된다. 수동으로 중단하려면 반환된 함수를 호출한다.
const unwatch = watchEffect(() => {
  console.log('이 로그는 출력됩니다.')
})
unwatch() // watchEffect를 중단합니다.
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
