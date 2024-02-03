<template>
  <!-- Remove & use example component! -->
  <HelloWorld 
    :msg="message" 
    @click="handler" />
  <HelloWorld
    :msg="foo"
    @click="handler" />
  <Test />
</template>

<script>
import HelloWorld from '~/components/HelloWorld'
import Test from './components/Test'

export default {
  components: {
    HelloWorld,
    Test
  },
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    handler() {
      console.log(this.message)
      this.foo = 'foo'
      this.message += '!'
    },
  },
  /**
   * Lifecycle hooks
   * @See https://vuejs.org/guide/essentials/lifecycle#lifecycle-diagram
   * created, mount, update, unmount와 접두사 before가 추가된 lifecycle hooks가 있다.
   */
   beforeCreate() {
    console.log('beforeCreate')
   }, 
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  beforeUnmount(){
    console.log('beforeUnmount')
  },
  unmounted(){
    console.log('unmounted')
  },
}

/**
 * # Created vs Mounted
 * 
 * Created : data, methods, computed, watch 등이 초기화 되고, template이 render 되기 전 ($el, $refs는 undefined)
 * Mounted : template이 render 되고, $el, $refs가 정의됨
 * 
 * Created는 초기화가 목적이고 Mounted는 DOM 조작에 대한 목적으로 사용할 수 있다.
 * 
 * @link https://aomee0880.tistory.com/185
 */
</script>
