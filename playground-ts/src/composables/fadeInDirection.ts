/**
 * fade in 방향을 view port를 기준으로 구합니다.
 */

/**
 * @note compute Y size to the element from the top of the view port
 */
export function useFadeInDirection(baselineSelector: string, maxHeight: number) {
  const element = document.querySelector(baselineSelector)
  if (!element) throw new Error(`Element not found: ${baselineSelector}`)
  const rect = element.getBoundingClientRect()

  const top = rect.top
  const bottom = rect.bottom
  const height = rect.height
  const left = rect.left
  const right = rect.right
  const width = rect.width

  const viewHeight = window.innerHeight
  const viewWidth = window.innerWidth

  const topY = top
  const bottomY = viewHeight - bottom
  const leftX = left
  const rightX = viewWidth - right

  return { topY, bottomY, leftX, rightX, height, width }
}
