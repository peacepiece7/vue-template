<template>
  <div>A3_computed_props_composition</div>
  <p>책을 가지고 있다 : </p>
  <span>{{ publishedBooksMessage }}</span>
</template>

<script setup>
import { ref,reactive, computed } from 'vue'
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 계산된 ref, 캐싱됨 의존된 반응형이 변경되지 않으면 캐싱된 값을 반환
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// 캐싱되지 않음 (매번 호출됨)
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}


const firstName = ref('John')
const lastName = ref('Doe')

/**
 * @note 계산된 속성에 수정이 필요한 경우
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/computed.html#writable-computed
 */
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 참고: 분해 할당 문법을 사용함.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

</script>

<style scoped>
section {
  margin: 40px;
}
</style>