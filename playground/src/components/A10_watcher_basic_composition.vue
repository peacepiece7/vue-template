<template>
  <div>A10_observer_composition</div>
  <section>
    <h2>감시자 안 씀, 질문 "yes" => 네, else => 아니오</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="question" />
      <input type="submit" value="질문하기" />
    </form>
    <div>
      <div>answer :</div>
      <span v-if="answer">{{ answer }}</span>
    </div>
  </section>
  <section>
    <h2>감시자 씀</h2>
    <p>
      예/아니오 질문:
      <input v-model="question1" />
    </p>
    <p>{{ answer1 }}</p>
  </section>
  <section>
    <h2>감시자 주의사항</h2>
    <div>obj1</div>
    <input v-model="obj.count" />
    <div>obj2</div>
    <input v-model="obj2.count" />
    <div>deepObj</div>
    <input v-model="deepObj.foo.bar" />
  </section>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'
/**
 * @note 감시자 안 쓸 경우
 */
const question = ref('')
const answer = ref('')
async function handleSubmit() {
  answer.value = '잠시만 기다려주세요...'
  await new Promise((res) => setTimeout(res, 1000))
  if (question.value.includes('yes')) answer.value = '네'
  else answer.value = '아니오'
}

/**
 * @note 감시자 쓴 경우 (좋은 예제가 아님!)
 */
const question1 = ref('')
const answer1 = ref('')
watch(question1, async (newQuestion, oldQuestion) => {
  answer1.value = '입력하신 질문을 받아들이고 있습니다...'
  await new Promise((res) => setTimeout(res, 1000))
  if (newQuestion.includes('yes')) answer1.value = '네'
  else answer1.value = '아니오'
})

/**
 * @note watch 주의점
 * @description
 * 반응형 객체의 속성을 감시할 수 없습니다.
 */

// reactive는 안됩니다!
// reactive는 컬렉션 유형에만 동작하기 떄문에, 반응형 속성을 인자로 할당하면 감시가 끊어집니다!
const obj = reactive({ count: 1 })
watch(obj.count, (newObj, oldObj) => {
  console.log('이 로그는 출력되지 않습니다. :', newObj)
})

// ref는 가능합니다!
// ref는 반응형 속성도 감시되기 떄문에 사용 가능합니다.
const obj2 = ref({ count: 1 })
watch(obj2.value, (newObj, oldObj) => {
  console.log(newObj)
})

// reactive로 감시하고 싶다면 다음과 같이 getter로 작성하세요.
// obj 객체가 변경될 때마다 watch가 실행됩니다.
watch(
  () => obj.count,
  (newObj, oldObj) => {
    console.log('이 로그는 출력됩니다. :', newObj)
  }
)

// deep: true 옵션을 사용하면 객체의 중첩된 속성을 감시할 수 있습니다.
// () => deepObj.foo.bar를 사용하면 반응형으로 동작하지만, 경우에 따라서 객체를 반환해야할 경우 다음과 같이 deep : true로 설정해서 검사할 수 있다. 다만 계산 비용을 고려해야함
const deepObj = reactive({ foo: { bar: 'bar' } })
watch(
  () => deepObj.foo,
  (newObj, oldObj) => {
    console.log('deepObj :', newObj)
  },
  {
    // deep: true,
  }
)
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
