<template>
  <div>
    <div >
        <v-card :text="nombreServ" class='d-flex justify-space-between color ma-2'>
           <boton class=' ma-2'  texto='Editar'></boton>
        </v-card>

        <v-card  text="Añadir servicio" class=' color ma-2'>
            
        </v-card>
        
    </div>
  
    
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import Boton from './BotonPagina.vue'

var nombreServ = ref('')
nombreServ.value='Corte de caballero'

</script>

<style scoped>
.color{
    background: #fff5fa;
  background-blend-mode: normal;
  backdrop-filter: blur(29px);

}
</style>