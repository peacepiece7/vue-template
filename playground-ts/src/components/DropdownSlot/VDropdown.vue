<script setup lang="ts">
    import { defineProps, ref, computed, CSSProperties, Transition, watchEffect } from "vue";
    import { useOpenDropdown } from "@/composables/useOpenDropdown";
    import { useComputeFadeInDirection } from "@/composables/useComputeFadeInDirection";

    export type DropdownOption = {
        id: string;
        checked?: boolean;
    } & Record<string | number, unknown>;

    export interface DropdownProps {
        id: string;
        options: unknown[];
        modelValue: DropdownOption[] | DropdownOption | null;
        placeholder?: string;
        disabled?: boolean;
        optionsHeight?: number;
        selectedOptionsStyle?: CSSProperties;
        labelProperty?: string;
        type?: "single" | "multiple";
    }
    type DropdownEmits = {
        "update:modelValue": [p: DropdownOption[] | DropdownOption | null];
    };
    const props = withDefaults(defineProps<DropdownProps>(), {
        disabled: false,
        labelProperty: "label",
        placeholder: "선택하세요.",
        type: "single"
    });

    const emits = defineEmits<DropdownEmits>();

    // 선택된 옵션들의 label을 보여줍니다.
    const selectedTitles = computed(() => {
        if (!props.modelValue) return props.placeholder;
        if (props.modelValue instanceof Array && props.modelValue.length === 0) return props.placeholder;

        if (props.type === "single") {
            if (props.labelProperty in props.modelValue) {
                return (props.modelValue as DropdownOption)[props.labelProperty];
            }
            throw new Error(":options에 label속성 또는 :labelProperty가 존재하지 않습니다.");
        }

        if (props.type === "multiple") {
            return (props.modelValue as DropdownOption[])
                .map(option => {
                    if (props.labelProperty in option) {
                        return option[props.labelProperty];
                    }
                    throw new Error(":options에 label속성 또는 :labelProperty가 존재하지 않습니다.");
                })
                .join(", ");
        }
    });

    // 옵션을 선택하면 optRef(modalValue)를 업데이트 합니다.
    const optsRef = ref<DropdownOption[]>(
        props.options.map(opt => {
            if (!(opt instanceof Object)) throw new Error("옵션은 객체여야 합니다.");
            if (!opt.hasOwnProperty("id")) throw new Error("옵션은 id 속성을 가져야 합니다.");
            const option = opt as DropdownOption;
            return { ...option, checked: option.checked ?? false };
        })
    );

    // 옵션을 선택하면 modelValue를 업데이트 합니다.
    function handleOnClickOption(opt: DropdownOption) {
        if (props.type === "multiple") return handleOnClickMultipleOption(opt);
        if (props.type === "single") return handleOnClickSingleOption(opt);
    }
    function handleOnClickSingleOption(opt: DropdownOption) {
        if (props.modelValue && opt.id === (props.modelValue as DropdownOption)?.id) emits("update:modelValue", null);
        else emits("update:modelValue", opt);
    }
    function handleOnClickMultipleOption(opt: DropdownOption) {
        optsRef.value = optsRef.value.map(option => {
            if (option.id === opt.id) option.checked = !option.checked;
            return option;
        });
        emits(
            "update:modelValue",
            optsRef.value.filter(option => option.checked)
        );
    }

    // isActive가 true일 경우 options가 보여집니다.
    const { isOpen } = useOpenDropdown(props.id, document.querySelector("html"), props.type);
    const isActive = computed(() => !props.disabled && isOpen.value);

    const optStyleRef = ref<CSSProperties>({});
    const selectedOptStyleRef = ref<CSSProperties>(props.selectedOptionsStyle ?? {});

    // 옵션 리스트가 보여질 때, 옵션 리스트의 위치를 조정합니다. up/down두 가지 옵션이 있습니다.
    const optsHeight = props.optionsHeight ?? 150;
    const { direction, rect } = useComputeFadeInDirection(`#${props.id}`, optsHeight);
    watchEffect(() => {
        if (!rect.value) return;
        if (direction.value === "up") {
            optStyleRef.value = {
                ...optStyleRef.value,
                top: `${rect.value.bottom}px`,
                width: `${rect.value.width}px`,
                left: `${rect.value.left}px`
            };
        } else {
            optStyleRef.value = {
                ...optStyleRef.value,
                top: `${rect.value.top - optsHeight}px`,
                width: `${rect.value.width}px`,
                left: `${rect.value.left}px`
            };
        }
    });

    function selected(opt: DropdownOption) {
        if (!props.modelValue) return false;
        if (props.type === "single") {
            return opt.id === (props.modelValue as DropdownOption).id;
        } else {
            return (props.modelValue as DropdownOption[]).some(option => option.id === opt.id);
        }
    }
</script>

<template>
    <div :id="props.id" class="select" :class="{ disabled: disabled, active: isActive }" role="combobox">
        <p class="select-view" :style="selectedOptStyleRef">
            {{ selectedTitles }}
        </p>
        <div class="select-btn">+</div>
        <Teleport to="body">
            <div class="select-opt-animation-guard" :style="optStyleRef" :class="direction">
                <Transition>
                    <div :id="props.id" class="select-opt-cover" :style="{ height: `${optsHeight}px` }" v-if="isActive">
                        <ul class="select-opt-list">
                            <li
                                v-for="option in optsRef"
                                :key="option.id"
                                class="select-opt"
                                :class="{ selected: selected(option) }"
                                @click="handleOnClickOption(option)"
                            >
                                <input type="checkbox" :checked="!!option.checked" v-if="props.type === 'multiple'" />
                                <slot name="option" :option="option">
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
        @include flex(start, center);
        height: 40px;
        border-radius: 4px;
        border: 1px solid #ccc;
        color: #666;
        background-color: #fff;
        cursor: pointer;
        width: 200px;
        &.active {
            border-color: $primary;
            .select-view {
                color: #222;
                font-weight: 400;
            }
            .select-btn {
                color: $primary;
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
            margin-bottom: 0;
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
            .select-opt-list {
                height: inherit;
                border: 1px solid #ccc;
                border-radius: 4px;
                padding-left: 4px;
                overflow: auto;
                .select-opt {
                    @include flex(start);
                    cursor: pointer;
                    min-height: 30px;
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
                }
            }
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
