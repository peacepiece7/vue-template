<template>
  <div>B3_event_component</div>
  <section>
    <!-- prettier-ignore -->
    <B3_event_input
      :model-value="input"
      @update:model-value="handleInput" />
    <B3_event_input v-model="input" />
  </section>
  <section>
    <B3_event_computed_input v-model="computedInput" />
  </section>
  <section>
    <h2>사용자 이름 입력 받기</h2>
    <!-- prettier-ignore -->
    <B3_user_name
      v-model:firstName.onlyString="fistName"
      v-model:lastName.noSpace="lastName" />
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import B3_event_input from './B3_event_input.vue'
import B3_event_computed_input from './B3_event_computed_input.vue'
import B3_user_name from './B3_user_name.vue'

const input = ref('hello!')
function handleInput(e) {
  console.log(e)
  // input.value = e
}

const computedInput = ref('Foo!!')
watch(computedInput, (newVal, oldVal) => {
  console.log('computedInput', newVal, oldVal)
})
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
