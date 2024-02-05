<template>
  <div>B3_slot_component</div>
  <section>
    <B3_slot_button>제출</B3_slot_button>
    <B3_slot_button>
      <!-- v-slot => #으로 축약 가능 -->
      <!-- eslint-disable-next-line vue/v-slot-style -->
      <template v-slot:title>
        제출 타이틀
      </template>
      제출 내용
    </B3_slot_button>
    <B3_slot_button>
      <template #title="titleSlotProps">
        {{ titleSlotProps.alt }}
      </template>
    </B3_slot_button>
    <B3_slot_button>
      <template #title="{ alt }">
        {{ alt }}
      </template>
      <template #default>
        v-slot default
      </template>
    </B3_slot_button>
  </section>
</template>

<script setup>
// * 기본적인 slot 사용 예제
import B3_slot_button from './B3_slot_button.vue'

/**
 * @note 동적 슬롯 사용 방법 (#[dynamicSlotName])
 * @see https://v3-docs.vuejs-korea.org/guide/components/slots.html#dynamic-slot-names
 */
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
