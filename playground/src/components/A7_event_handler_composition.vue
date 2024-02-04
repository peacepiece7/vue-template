<template>
  <div>A7_event_handler_composition</div>
  <section>
    <button @click="greet">
      환영하기
    </button>
  </section>
  <section>
    <h2>인라인 핸들러에서 이벤트 객체 접근하기</h2>
    <!-- 특수한 키워드인 $event 사용 -->
    <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">
      제출하기
    </button>
    <!-- 인라인 화살표 함수 사용 -->
    <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">
      제출하기
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('Vue.js')

// v-on 디렉티브는 단축 문법으로 @ 기호를 사용
function greet(event) {
  alert(`안녕 ${name.value}!`)
  // 'event'는 네이티브 DOM 이벤트 객체입니다.
  if (event) {
    alert(event.target.tagName)
  }
}

function warn(message, event) {
  if (event) {
    event.preventDefault()
  }
  alert(message)
}

/**
 * @note 인라인 핸들러에서 이벤트 객체 접근하기
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers
 * @description
 * 다음 수식어 키워드를 제공합니다.
 * 이벤트 핸들러 : .stop, .prevent, .self, .capture, .once, .passive
 * 입력키 별칭 : .enter,.tab, .delete ("Delete" 및 "Backspace" 키 모두 캡처), .esc, .space, .up, .down, .left, .right
 * 시스템 입력키 수식어 : .ctrl, .alt, .shift, .meta
 */
</script>

<style scoped>
section {
  margin: 40px;
}
</style>