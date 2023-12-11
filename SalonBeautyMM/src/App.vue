<script setup>

import { storeToRefs } from 'pinia'
import barra from '@/components/BarraNav.vue'
import {PaginaStore} from '@/stores/PaginaStore.js'

const pagina = PaginaStore()

const {estadonav} = storeToRefs(pagina)

</script>

<template >
  <div class="fondo" >
    <div  :elevation="4" >
      <barra ></barra>
    
    </div>
    
      <RouterView ></RouterView>
  
  </div>
</template>

<style scoped>
.fondo {
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
  
}


</style>
