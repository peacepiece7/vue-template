<script setup lang="ts"></script>

<template>
  <div>
    <slot name="title">
      <!-- 대체 텍스트 -->
      <p className="no-content">내용이 없습니다!</p>
    </slot>
  </div>
</template>

<style scoped>
.no-content {
  color: rgba(0, 0, 0, 0.5f);
}
</style>
