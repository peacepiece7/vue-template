<script setup lang="ts">
import { routes } from "@/constants"
</script>

<template>
  <nav>
    <router-link v-for="route in routes" :key="route" :to="route">
      {{ route === "/" ? "Home" : route }}
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  display: block;
  font-size: 1.6rem;
  text-align: end;
  padding-right: 3rem;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
}
</style>
