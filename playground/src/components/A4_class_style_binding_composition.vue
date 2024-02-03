<!-- eslint-disable vue/v-bind-style -->

<template>
  <div>
    A4_class_style_binding_composition
  </div>
  <section>
    <div :class="classObject">
      Class Object
    </div>
    <div :class="computedClassArray">
      Class Array
    </div>
    <div v-bind:class="{active : isActive, 'text-danger' : hasError}">
      Class Ref
    </div>
    <div :style="styleObject">
      inline Style Binding
    </div>
    <!-- 브라우저가 지원하는 배열 내 마지막 값을 렌더링합니다. -->
    <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }"></div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue"

// * 클래스 바인딩 1
const classObject = reactive({
    active : true,
    'text-danger' : false
})

// * 클래스 바인딩 2
const classArray = reactive([ 'active', 'text-danger' ])

// * 클래스 바인딩 3
const isActive = ref(true)
const hasError = ref(false)


/**
 * @note computed 사용하여 클래스 바인딩 (계산된 속성 + 반응형 + 캐싱)
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/class-and-style.html#with-components
 */
const error = ref(null)
const computedClassObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))
const computedClassArray = computed(() => [  
    isActive.value && !error.value && 'active',
    error.value && error.value.type === 'fatal' && 'text-danger'])

/**
 * @note component 사용하여 클래스 바인딩
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/class-and-style.html#with-components
 */

// * inlin style 바인딩
const activeColor = ref('red')
const fontSize = ref(20)
const styleObject = reactive({
  color: activeColor.value,
  fontSize: fontSize.value + 'px'
})
</script>

<style scoped>
section {
  margin: 40px;
}
</style>