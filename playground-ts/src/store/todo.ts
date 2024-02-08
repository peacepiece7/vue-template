import { api } from "@/api"
import { Todo } from "@/types"
import { to } from "@/utils"
import { AxiosRequestConfig, AxiosResponse } from "axios"
import { nextTick, reactive } from "vue"

// 동시에 어려 개의 비동기 요청을 보내는 경우는 없다고 가정합니다! (처리하기 너무 귀찮아짐)

export type AsyncState = "loading" | "success" | "error" | undefined

export interface ITodoStore {
  todos: Todo[]
  fetchTodoState: AsyncState
  addTodoState: AsyncState
  editTodoState: AsyncState
  deleteTodoState: AsyncState
  fetchTodos: VoidFunction
  editTodo: (id: Todo["id"], body: TodoEditParams) => void
}

export const todoStore = reactive<ITodoStore>({
  todos: [],
  fetchTodoState: undefined,
  addTodoState: undefined,
  editTodoState: undefined,
  deleteTodoState: undefined,
  fetchTodos,
  editTodo,
})

/**
 * @note fetch todo
 */
async function fetchTodos() {
  todoStore.fetchTodoState = "loading"
  todoStore.addTodoState = undefined
  todoStore.editTodoState = undefined
  todoStore.deleteTodoState = undefined
  // HACK : 강제 로딩 시간 부여 (테스트)
  await new Promise((res) => setTimeout(() => res(null), 1000))
  const [error, todos] = await to(fetchTodosAPI<Todo[]>("/api/todos"))
  if (todos) {
    todoStore.fetchTodoState = "success"
    todoStore.todos = todos
  } else if (error) {
    todoStore.fetchTodoState = "error"
    alert(error?.message)
  }
}
// prettier-ignore
async function fetchTodosAPI<T>(url: string): Promise<AxiosResponse<T, any>> {
  return api<T>(url, { method: "GET" })
}

/**
 * @note edit todo
 * @param url "/api/todos/${todo.id}" 형식으로 보내주세요
 */
async function editTodo(id: Todo["id"], body: TodoEditParams) {
  todoStore.editTodoState = "loading"
  todoStore.addTodoState = undefined
  todoStore.deleteTodoState = undefined

  const [error, todo] = await to(
    editTodoAPI<Todo>(`/api/todos/${id}`, {
      method: "PUT",
      data: JSON.stringify(body),
    })
  )
  if (todo) {
    todoStore.editTodoState = "success"
    todoStore.todos = todoStore.todos.map((t) => (t.id === todo.id ? todo : t))
  } else if (error) {
    todoStore.editTodoState = "error"
    // TODO : 에러시 원본으로 mutate하거나, 에러 처리를 해야합니다.
    alert(error?.message)
  }
}
export type TodoEditParams = Pick<Todo, "id" | "title" | "order" | "done">
async function editTodoAPI<T>(url: string, config: AxiosRequestConfig) {
  return api<T>(url, config)
}

// TOOD : ADD TODO 함수 아래로 빼기
export type TodoAddParams = Pick<Todo, "title" | "order">
