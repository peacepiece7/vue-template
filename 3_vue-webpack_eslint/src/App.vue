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
    }
  }
}
</script>
