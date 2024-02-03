<template>
  <div>A5_conditional_rendering_composition</div>
  <section>
    <div v-if="awesome">
      show content
    </div>
    <div v-else>
      sorry!
    </div>
  </section>

  <section>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else>
      C
    </div>
  </section>
</template>

<script setup>
/**
 * @note Conditional Rendering
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/conditional.html
 */

import { ref } from "vue"
const awesome = ref(true)
const type = ref('A')

/**
 * @note v-show VS v-if
 * @description
 * v-show는 항상 렌더링되고, CSS를 사용하여 토글합니다. 즉 초기 조건 관계없이 렌더링됩니다.
 * v-if는 조건에 따라 렌더링됩니다.
 * @link https://v3-docs.vuejs-korea.org/guide/essentials/conditional.html#v-if-vs-v-show
 */

</script>

<style scoped>
section {
  margin: 40px;
}
</style>