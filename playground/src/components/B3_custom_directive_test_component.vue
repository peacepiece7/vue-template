<template>
  <div>B3_custom_directive_test_component</div>
  <section>
    <input v-focus:foo="'foo'" />
  </section>
</template>

<script setup >
const vFocus = {
  created(el, binding, vnode, prevVnode) {

    console.log('vFocus created', el, binding, vnode, prevVnode)
  },
  mounted: (el) => el.focus()
}
</script>

<style scoped>
  section { margin: 40px; }
</style>