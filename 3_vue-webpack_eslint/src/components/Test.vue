<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <h2 @click="handleIncreaseNumber">
    {{ count }}
  </h2>
  <div v-if="count > 4">
    <h3>Count is greater than 4</h3> // Directive
  </div>
  <ul>
    <Fruit
      v-for="fruit in fruits"
      :key="fruit"
      :fruitName="fruit" />
  </ul>
  <Animals />
</template>


<script>
import Fruit from './Fruit.vue'
import Animals from './Animals.vue'
    export default {
      data() {
        return {
          count: 0, // Reactive
          fruits: ['apple', 'banana', 'orange']
        }
      },
      methods: {
        handleIncreaseNumber() {
          this.count += 1
        }
      },
      components: {
        Fruit,
        Animals
      }
    }
</script>


<!-- scoped => module.scss 같은 역할 -->
<style scoped lang="scss" >
h2 {
  font-size: 40px;
}
ul {
  list-style: none;
  font-size: 20px;
}
</style>