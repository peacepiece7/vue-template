<template>
  <h2 @click="$emit('click')">
    {{ msg }}
    {{ foo && foo }}
  </h2>
  <img
    src="~assets/logo.png"
    alt="foo bar" />
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
    foo : {
      type : String || undefined,
      default : undefined
    }
  },
  emits: ['click'],
}
</script>

<style scoped lang="scss">
h2 {
  font-size: 22px;
  & + img {
    width: 120px;
  }
}
</style>
