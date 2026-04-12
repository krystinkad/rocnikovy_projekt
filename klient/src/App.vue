<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerBar from '@/components/header.vue'

</script>

<template>

<headerBar></headerBar>
<RouterView/>

</template>

<style scoped lang="scss">

.wraper{
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
headerBar{
  z-index: 10;
} 
</style>
