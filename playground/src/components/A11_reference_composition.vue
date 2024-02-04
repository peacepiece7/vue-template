<template>
  <div>A11_reference_composition</div>
  <section>
    <input ref="inputRef" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const inputRef = ref(null)

onMounted(() => {
  // ! 컴포넌트가 마운트된 후에만 ref에 접근할 수 있습니다.
  inputRef.value.focus()
})
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
