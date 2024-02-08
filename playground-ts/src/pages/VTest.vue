<script setup>
import { ref } from "vue"
import VDropdownSlot from "@/components/DropdownSlot/VDropdownSlot.vue"

const options = [
  { id: "1", label: "Option 1", value: "option1" },
  { id: "2", label: "Option 2", value: "option2" },
  { id: "3", label: "Option 3", value: "option3" },
  { id: "4", label: "Option 4", value: "option4" },
  { id: "5", label: "Option 5", value: "option5" },
  { id: "6", label: "Option 6", value: "option6" },
]

const selectedOptions = ref(null)
</script>

<template>
  <main>
    <VDropdownSlot
      id="dropdown1"
      :options="options"
      v-model="selectedOptions"
      :optionsStyle="{ width: '200px' }"
      :selectedOptionsStyle="{ width: '200px' }"
      :labelProperty="'id'"
    >
    </VDropdownSlot>
  </main>
</template>

<style scoped>
main {
  margin: 40px;
  font-size: 1.6rem;
}
</style>
