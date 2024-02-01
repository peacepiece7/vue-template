<template>
  <h1>the first animal is {{ animals[0] }}</h1>
  <ul> 
    <li
      v-for="animal in animals"
      :key="animal">
      {{ animal }}
    </li>
  </ul>
  <p>텍스트 보간법 사용: {{ rawHtml }}</p>
  <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>
</template>

<script>
export default {
    data() {
        return {
            animals : ['dog', 'cat', 'rabbit'],
            rawHtml : '<span>HTML PROPS TEST </span>'
        }
    },
    methods: {
        popAnimal() {
            this.animals.pop()
        },
        pushAnimal(animal) {
            this.animals.push(animal)
        }
    }
}
</script>

<style scoped>
</style>