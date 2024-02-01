<template>
  <li>{{ fruitName }}</li>
</template>

<script>
export default {
    props : {
        fruitName : {
            type : String,
            default : ''
        }
    }
}
</script>