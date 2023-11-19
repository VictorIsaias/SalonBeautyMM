<template>
  <div >
    <router-view></router-view>
  </div>
</template>

<script setup>
import {ref,computed,onMounted} from 'vue'
import router from '../router/index'

onMounted(()=>{
    router.push({ name: 'iniciar'})
})


</script>

<style scoped>
.fondo {
  height: 100%;
  margin: 0;
  
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);

}
</style>