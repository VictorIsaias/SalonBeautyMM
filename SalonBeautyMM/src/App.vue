<script setup>
import barra from '@/components/BarraNav.vue'

</script>

<template>
  <div class="fondo">
    <div :elevation="4" >
      <barra ></barra>
    
    </div>
    
      <RouterView ></RouterView>
  
  </div>
</template>

<style scoped>
.fondo {
  
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
  overflow-x: hidden;
}


</style>
