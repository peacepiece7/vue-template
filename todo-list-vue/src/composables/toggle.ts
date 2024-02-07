import { ref } from "vue"
import { useEventListener } from "./event"

/**
 * @note html 요소에 click event listener를 추가합니다.
 * 파라메터 와 동일한 id 속성을 가지는 요소 외부를 클릭하면 dropdown을 닫습니다.
 */
export function useOpenDropdownById(id: string) {
  const isOpen = ref(false)

  function clickEventCb(e: MouseEvent) {
    const target = (e.target as HTMLElement).closest(`#${id}`)
    if (target && target.id === id) isOpen.value = true
    else isOpen.value = false
  }

  useEventListener(document.querySelector("html"), "click", clickEventCb)

  return { isOpen }
}
