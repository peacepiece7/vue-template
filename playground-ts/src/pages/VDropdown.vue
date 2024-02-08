<script setup lang="ts">
import { ref } from "vue"
import VDropdown, { DropdownOption } from "@/components/VDropdown.vue"

const options = [
  { id: "1", label: "Option 1", value: "option1" },
  { id: "2", label: "Option 2", value: "option2" },
  { id: "3", label: "Option 3", value: "option3" },
]

const selectedOptions = ref<null | DropdownOption[]>(null)

const options1 = [
  { id: "1", label: "Option 1", value: "option1" },
  { id: "2", label: "Option 2", value: "option2" },
  { id: "3", label: "Option 3", value: "option3" },
  { id: "4", label: "Option 4", value: "option4" },
  { id: "5", label: "Option 5", value: "option5" },
  { id: "6", label: "Option 6", value: "option6" },
]

const selectedOptions1 = ref<null | DropdownOption[]>(null)
</script>
<template>
  <section>
    <VDropdown
      :id="'dropdownTest2'"
      v-model="selectedOptions"
      :options="options"
      :selected-options-style="{ border: '1px solid black', margin: '10px 0' }"
    />

    <VDropdown
      :id="'dropdownTest1'"
      v-model="selectedOptions1"
      :options="options1"
      :selected-options-style="{ border: '1px solid black', margin: '10px 0' }"
    />
  </section>
</template>

<style scoped>
section {
  margin: 40px;
  padding: 40px;
  font-size: 1.6rem;
}
</style>
