<script setup lang="ts">
import { useOpenDropdownById } from "@/composables/toggle"
import { defineProps, ref, computed, CSSProperties, Transition } from "vue"

export interface DropdownOption {
  id: string
  label: string
  value: string
  checked?: boolean
}
export interface DropdownProps {
  id: string
  options: DropdownOption[]
  modelValue: DropdownOption[] | null
  disabled?: boolean
  optionsStyle?: CSSProperties
  selectedOptionsStyle?: CSSProperties
}

const props = withDefaults(defineProps<DropdownProps>(), {
  disabled: false,
})
const emits = defineEmits(["update:modelValue"])
const optionsRef = ref<DropdownOption[]>(
  props.options.map((opt) => ({ ...opt, checked: opt.checked ?? false }))
)

const selectedTitles = computed(() => {
  if (props.modelValue === null) return "Select an option"
  else if (props.modelValue.length === 0) return "Select an option"
  return props.modelValue.map((option) => option.label).join(", ")
})

const { isOpen } = useOpenDropdownById(props.id)

function handleOnClickOption(opt: DropdownOption) {
  optionsRef.value = optionsRef.value.map((option) => {
    if (option.id === opt.id) option.checked = !option.checked
    return option
  })
  emits(
    "update:modelValue",
    optionsRef.value.filter((option) => option.checked)
  )
}
</script>

<template>
  <div :id="props.id" role="combobox">
    <div class="title" :style="props.selectedOptionsStyle">{{ selectedTitles }}</div>
    <Teleport to="body">
      <Transition>
        <div :id="props.id" class="animationCover" :style="props.optionsStyle" v-if="isOpen">
          <ul class="optionCover">
            <li
              v-for="option in optionsRef"
              :key="option.id"
              class="option"
              @click="handleOnClickOption(option)"
            >
              <p>{{ option.label }}</p>
              <input type="checkbox" :checked="option.checked" />
            </li>
          </ul>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.title {
  font: 2rem;
  background-color: rgba(76, 132, 151, 0.1);
  cursor: pointer;
}
.animationCover {
  overflow: hidden;

  transition: opacity 0.5s ease;
}
.optionCover {
  height: inherit;
  background-color: rgba(0, 0, 0, 0.05);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.optionCover::-webkit-scrollbar {
  display: none;
}
.option {
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  cursor: pointer;
}
.option:last-child {
  margin-bottom: 0;
}

p {
  margin: 0;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  10% {
    opacity: 0.1;
    transform: translate3d(0, -10%, 0);
  }

  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
    transform: translateZ(0);
  }
  50% {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    height: 0px;
  }
}

/* Transition */
/* .v-enter-active,
.v-leave-active {
}
.v-enter-from,
.v-leave-to {
} */

.v-enter-active {
  /*   transition: opacity 0.5s ease; */
  animation: fadeInDown 0.3s;
  animation-fill-mode: forwards;
}

.v-leave-active {
  /* opacity: 0; */
  animation: fadeOutDown 0.3s;
  animation-fill-mode: forwards;
}
</style>
