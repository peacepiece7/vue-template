<!-- 
    option API에서 반응형 변수를 사용하는 방법

    깊은 반응형으로 동작 합니다. (A2_reactive_composition.vue 참고)
 -->

<template>
  <div>A2_reactive_option</div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    increment() {
      // ! Arrow function으로 작성하면 this가 인식되지 않는다.
      this.count++
    },
    click() {
      console.log('click')
    },
  },

  /**
    * @note 메서드가 동적으로 추가되는 경우
    * @link https://v3-docs.vuejs-korea.org/guide/essentials/reactivity-fundamentals.html#stateful-methods
  */
  created() {
    //  this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    //  this.debouncedClick.cancel()
  },

  // `mounted`는 나중에 설명할 생명 주기 훅입니다.
  mounted() {
    // `this`는 컴포넌트 인스턴스를 나타냅니다.
    console.log(this.count) // => 1

    // 값을 변경할 수 있습니다.
    this.count = 2
  },
}
</script>

<style scoped></style>
