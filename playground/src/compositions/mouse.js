import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}

/**
 * @note 비동기 상태 예제
 * @link https://v3-docs.vuejs-korea.org/guide/reusability/composables.html#async-state-example
 */

/**
 * @note SSR 등 사이드 이펙트가 필요한 경우
 * @link https://v3-docs.vuejs-korea.org/guide/reusability/composables.html#side-effects
 */

/**
 * @note 옵션 API에서 사용하는 방법
 * @link https://v3-docs.vuejs-korea.org/guide/reusability/composables.html#using-composables-in-options-api
 */