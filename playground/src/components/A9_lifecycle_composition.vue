<template>
  <div>A9_lifecycle_composition</div>
</template>

<script >
/**
 * @note Lifecycle table
 * @see {@link https://v3-docs.vuejs-korea.org/guide/essentials/lifecycle.html#lifecycle-diagram}
 */

 /**
  * @note 다양한 lifecycle  hook 살펴 보기
  * @see {@link https://v3-docs.vuejs-korea.org/api/composition-api-lifecycle.html#onupdated}
  */
 
import { onMounted } from 'vue'
export default {
    setup() {
        onMounted(() => {
            console.log('mounted')
        })
    },

    mounted() {
        console.log('mounted')
    }
}
</script>

<style scoped>
</style>