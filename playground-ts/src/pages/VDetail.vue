<template>
  <section>
    <div>Vue Detail Page Id : {{ pageName }}</div>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"
import { ref } from "vue"
const router = useRouter()
const route = useRoute()
console.log("ROUTER :", router)
console.log("ROUTE :", route)

const pageName = ref(route.params.id)
</script>

<style scoped>
section {
  margin: 40px;
  font-size: 1.6rem;
}
</style>
