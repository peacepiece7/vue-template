<template>
  <section>
    <div>{{ pageName }}</div>
    <div>
      <RouterLink class="nav" :to="'/nested/first'">Nested - first</RouterLink>
      <RouterLink class="nav" :to="'/nested/second'">Nested - second</RouterLink>
    </div>
    <RouterView />
  </section>
</template>

<script setup>
import { useRoute } from "vue-router"
import { ref } from "vue"

const route = useRoute()
const pageName = ref(route.params.id)
</script>

<style scoped>
section {
  margin: 40px;
  font-size: 1.6rem;
}
.nav {
  margin: 2rem;
}
</style>
