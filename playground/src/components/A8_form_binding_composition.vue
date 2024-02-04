<!-- eslint-disable vue/v-on-style -->
<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <div>A8_form_binding_composition</div>
  <section>
    <h2>v-model을 사용하면 값을 수동으로 연결하는 번거로운 작업을 생략 가능</h2>
    <div>but IME가 필요한 언어는 v-model 불가능..!</div>
    <input v-model="text" />
    <input :value="text" v-on:input="event => text = event.target.value" />
  </section>
  <section>
    <h2>여러 줄 메세지:</h2>
    <p style="white-space: pre-line;">
      {{ message }}
    </p>
    <textarea v-model="message" placeholder="여러 줄을 추가해보세요"></textarea>
    <textarea :value="message" @input="e => message = e.target.value"></textarea>
  </section>
  <section>
    <h2>체크 박스</h2>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </section>
  <section>
    <h2>체크된 이름: {{ checkedNames }}</h2>
    <div>반응형이 배일일 경우 자동으로 push/pop 됩니다.</div>
    <input type="checkbox" id="jack" value="젝" v-model="checkedNames" />
    <label for="jack">젝</label>
    <input type="checkbox" id="john" value="존" v-model="checkedNames" />
    <label for="john">존</label>
    <input type="checkbox" id="mike" value="마이크" v-model="checkedNames" />
    <label for="mike">마이크</label>
  </section>
  <section>
    <h2>선택한 것: {{ picked }}</h2>
    <input type="radio" id="one" value="하나" v-model="picked" />
    <label for="one">하나</label>
    <input type="radio" id="two" value="둘" v-model="picked" />
    <label for="two">둘</label>
  </section>
  <section>
    <div>선택됨: {{ selected }}</div>
    <select v-model="selected" multiple>
      <option disabled value="">
        다음 중 하나를 선택하세요
      </option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.text }}
      </option>
    </select>
  </section>
  <section>
    <div>true, false에 값을 바인딩 할 경우</div>
    <input
      type="checkbox"
      v-model="checked"
      true-value="네"
      false-value="아니오" />
    <!-- :true-value="dynamicTrueValue" -->
    <!-- :false-value="dynamicFalseValue" -->
    <label for="checkbox">{{ checked }}</label>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
const text = ref('Vue.js')
const message = ref('안녕하세요!')
const checked = ref(true)
const checkedNames = ref([])
const picked = ref('')

const selected = ref('')
const options = ref([
  { text: '하나', value: '1' },
  { text: '둘', value: '2' },
  { text: '셋', value: '3' }
])

/**
 * @note 그 외 수식어, 동작 true, false 값 바인딩 등 다음 코드 참고
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/forms.html#checkbox
 */
</script>

<style scoped>
section {
  margin: 40px;
}
</style>