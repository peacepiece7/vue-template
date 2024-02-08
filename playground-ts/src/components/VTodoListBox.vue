<script setup lang="ts">
import { todoStore } from "@/store/todo"
import VItem from "./VItem.vue"
import { Todo } from "@/types"

function HandleOnClickCheckbox(e: Event, id: Todo["id"]) {
  const target = e.target as HTMLInputElement
  const todo = todoStore.todos.find((todo) => todo.id === id)
  if (!todo) {
    // HACK :  에러 처리 필요
    return import.meta.env.MODE === "development" && console.error(`todo not found: ${id}`)
  }
  todoStore.editTodo(todo.id, { ...todo, done: target.checked })
}
</script>

<template>
  TODO LIST BOX
  <ul>
    <VItem v-for="todo in todoStore.todos" :key="todo.id">
      <template v-slot:title>
        <p>{{ todo.title }}</p>
        <p>생성일 : {{ todo.createdAt }}</p>
        <!-- TODO : check box 인풋 따로 UI 빼기 -->
        <input
          type="checkbox"
          :checked="todo.done"
          @click="HandleOnClickCheckbox($event, todo.id)"
        />
      </template>
    </VItem>
  </ul>
</template>

<style scoped></style>
