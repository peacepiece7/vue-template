<script setup lang="ts">
import { defineProps, ref, computed, CSSProperties, Transition, watchEffect } from "vue"
import { useOpenDropdown } from "@/composables/useOpenDropdown"
import { useComputeFadeInDirection } from "@/composables/useComputeFadeInDirection"

interface SelectDefaultOption {
  id: string
}
type SelectOption = SelectDefaultOption & Record<string | number, unknown>
interface SelectProps {
  id: string
  options: unknown[]
  modelValue: SelectOption | null
  placeholder?: string
  disabled?: boolean
  optionsStyle?: CSSProperties
  selectedOptionsStyle?: CSSProperties
  labelProperty?: string
}
type DropdownEmits = {
  "update:modelValue": [p: SelectOption | null]
}
const props = withDefaults(defineProps<SelectProps>(), {
  disabled: false,
  labelProperty: "label",
  placeholder: "선택하세요.",
})
const emits = defineEmits<DropdownEmits>()

// 선택된 옵션들의 label을 ,로 구분하여 보여줍니다.
const selectedTitle = computed(() => {
  if (props.modelValue === null) return props.placeholder
  else if (props.modelValue.length === 0) return props.placeholder

  if (props.labelProperty in props.modelValue) {
    return props.modelValue[props.labelProperty]
  }
  throw new Error(":options에 label속성 또는 :labelProperty가 존재하지 않습니다.")
})

// 옵션을 선택하면 optRef(modalValue)를 업데이트 합니다.
const optsRef = ref<SelectOption[]>(
  props.options.map((opt) => {
    if (!(opt instanceof Object)) throw new Error("옵션은 객체여야 합니다.")
    if (!Object.prototype.hasOwnProperty.call(opt, "id"))
      throw new Error("옵션은 id 속성을 가져야 합니다.")
    return opt as SelectOption
  })
)

function handleOnClickOption(opt: SelectOption) {
  if (opt.id === props.modelValue?.id) emits("update:modelValue", null)
  else emits("update:modelValue", opt)
}

// isActive가 true일 경우 options가 보여집니다.
const { isOpen } = useOpenDropdown(props.id, document.querySelector("html"))
const isActive = computed(() => !props.disabled && isOpen.value)

const optStyleRef = ref<CSSProperties>(props.optionsStyle ?? {})
const selectedOptStyleRef = ref<CSSProperties>(props.selectedOptionsStyle ?? {})

// 옵션 리스트가 보여질 때, 옵션 리스트의 위치를 조정합니다. up/down두 가지 옵션이 있습니다.
const optsHeight = parseInt((optStyleRef.value.height as string) || "150px")
const { direction, rect } = useComputeFadeInDirection(`#${props.id}`, optsHeight)
watchEffect(() => {
  if (!rect.value) return
  if (direction.value === "up") {
    optStyleRef.value = {
      ...optStyleRef.value,
      top: `${rect.value.bottom}px`,
      width: optStyleRef.value.width ?? `${rect.value.width}px`,
      left: `${rect.value.left}px`,
    }
  } else {
    optStyleRef.value = {
      ...optStyleRef.value,
      top: `${rect.value.top - optsHeight}px`,
      width: optStyleRef.value.width ?? `${rect.value.width}px`,
      left: `${rect.value.left}px`,
    }
  }
})

function selected(opt: SelectOption) {
  return opt.id === props.modelValue?.id
}
</script>

<template>
  <div
    :id="props.id"
    class="select"
    :class="{ disabled: disabled, active: isActive }"
    role="combobox"
  >
    <p class="select-view" :style="selectedOptStyleRef">
      {{ selectedTitle }}
    </p>
    <div class="select-btn">+</div>
    <Teleport to="body">
      <div class="select-opt-animation-guard" :style="optStyleRef" :class="direction">
        <Transition>
          <div :id="props.id" class="select-opt-cover" v-if="isActive">
            <ul class="select-opt-list">
              <li
                v-for="option in optsRef"
                :key="option.id"
                class="select-opt"
                :class="{ active: selected(option) }"
                @click="handleOnClickOption(option)"
              >
                <slot name="option" v-bind="{ val: option[props.labelProperty] }">
                  <p>
                    {{ option[props.labelProperty] }}
                  </p>
                </slot>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #666;
  background-color: #fff;
  cursor: pointer;
  width: 200px;
  &.active {
    border-color: #4d90fe;
    .select-view {
      color: #222;
      font-weight: 400;
    }
    .select-btn {
      color: #4d90fe;
      transform: rotate(45deg);
    }
  }
  &.disabled {
    cursor: default;
    .select-view,
    .select-btn {
      color: #ccc;
    }
  }
  .select-view {
    width: 80%;
    font-weight: 400;
    text-align: left;
    padding-left: 10px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .select-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 7px;
    height: fit-content;
    margin: auto;
    transition: transform 0.3s;
  }
}
/* Teleport */
.select-opt-animation-guard {
  position: absolute;
  overflow: hidden;
  .select-opt-cover {
    background-color: #fff;
    height: 150px;

    .select-opt-list {
      height: inherit;
      border: 1px solid #ccc;
      border-radius: 4px;
      overflow-y: scroll;
      /* -ms-overflow-style: none; */
      scrollbar-width: 20px;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: #666;
        border-radius: 5px;
      }
      .select-opt {
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
        min-height: 30px;
        margin: 4px;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &.selected,
        &:hover {
          background-color: #eee;
        }
        input[type="checkbox"] {
          margin-right: 4px;
        }
        &.active {
          background-color: #eee;
        }
      }
    }
  }
  ul,
  li {
    margin: 0;
    padding: 0;
  }
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
    opacity: 0.1;
    transform: translate3d(0, -10%, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  10% {
    opacity: 0.1;
    transform: translate3d(0, 10%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0.1;
    transform: translate3d(0, 10%, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}

/* Transition */
.up {
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
}

.down {
  .v-enter-active {
    /*   transition: opacity 0.5s ease; */
    animation: fadeInUp 0.3s;
    animation-fill-mode: forwards;
  }

  .v-leave-active {
    /* opacity: 0; */
    animation: fadeOutUp 0.3s;
    animation-fill-mode: forwards;
  }
}
</style>
@/composables/useComputeFadeInDirection
