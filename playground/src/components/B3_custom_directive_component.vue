<template>
  <div>B3_custom_directive_component</div>
</template>

<script setup >

// 일반적으로 컴포넌트에 커스텀 디렉티브를 사용하는 것은 권장되지 않습니다.


const vCustomDirective  = {

  // 바인딩된 엘리먼트의 속성 또는
  // 이벤트 리스너가 적용되기 전에 호출됩니다.
  created(el, binding, vnode, prevVnode) {
    /**
     * el: 디렉티브가 바인딩된 엘리먼트입니다. DOM을 직접 조작하는 데 사용할 수 있습니다.
     * binding: 다음 속성을 포함하는 객체입니다
     * - value: 디렉티브에 전달된 값입니다. 예를 들어 v-my-directive="1 + 1"에서 value는 2입니다.
     * - oldValue: 이것은 beforeUpdate 및 updated에서만 사용할 수 있습니다. 값이 변경되었는지 여부에 관계없이 사용 가능합니다.
     * - arg: 디렉티브에 전달된 인자(있는 경우). 예를 들어 v-my-directive:foo에서 인자는 "foo"입니다.
     * - modifiers: 수식어가 있는 경우 수식어를 포함하는 객체입니다. 예를 들어 v-my-directive.foo.bar에서 수식어 객체는 { foo: true, bar: true }입니다.
     * - instance: 디렉티브가 사용되는 컴포넌트의 인스턴스입니다.
     * - dir: 디렉티브를 정의하는 객체
     * - vnode: 바인딩된 엘리먼트를 나타내는 기본 VNode.
     * prevNode: 이전 렌더링에서 바인딩된 엘리먼트를 나타내는 VNode입니다. beforeUpdate 및 updated 훅에서만 사용할 수 있습니다.
     */
  },
  // 엘리먼트가 DOM에 삽입되기 직전에 호출됩니다.
  beforeMount(el, binding, vnode, prevVnode) {},
  // 바인딩된 엘리먼트의 부모 컴포넌트 및
  // 모든 자식 컴포넌트의 mounted 이후에 호출됩니다.
  mounted(el, binding, vnode, prevVnode) {},
  // 부모 컴포넌트의 updated 전에 호출됩니다.
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 바인딩된 엘리먼트의 부모 컴포넌트 및
  // 모든 자식 컴포넌트의 updated 이후에 호출됩니다.
  updated(el, binding, vnode, prevVnode) {},
  // 부모 컴포넌트의 beforeUnmount 이후에 호출됩니다.
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 부모 컴포넌트의 unmounted 전에 호출됩니다.
  unmounted(el, binding, vnode, prevVnode) {}
}
</script>

<style scoped>
  section { margin: 40px; }
</style>