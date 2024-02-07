<template>
  <main>
    <h1>HomePage</h1>
    <VTodoListBox v-if="fetchTodoState === 'success'" />
    <div v-else-if="fetchTodoState === 'loading'">Loading...</div>
  </main>
</template>

<script setup>
import VTodoListBox from "@/components/VTodoListBox.vue"
import { onMounted, computed } from "vue"
import { todoStore } from "@/store/todo"

const fetchTodoState = computed(() => todoStore.fetchTodoState)

onMounted(() => todoStore.fetchTodos())
</script>

<style scoped>
main {
  font-size: 1.6rem;
}
</style>
