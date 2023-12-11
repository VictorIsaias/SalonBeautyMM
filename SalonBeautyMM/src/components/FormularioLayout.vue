<template >
    <div >
        <v-card class='w-100 h-100  '  v-show='tipo=="info"' elevation='4'   width='45%'  >
        <v-card-title  class='d-flex justify-start'>{{titulo}}
           
        </v-card-title>
        <v-card-text class='d-flex justify-start'>
            
        </v-card-text>
          
                        
        <div class=" pb-3 interior h-100">
            <div class="pl-4 pr-4">
                <slot name='info' ></slot>
            </div>
            
           <v-container class="pl-10 pr-10">
                
                        <slot></slot>
    
            </v-container>
            </div>
        </v-card>




    <v-card class='w-100 h-100 contenedor' v-show='tipo!="info"'  elevation='4'   width='45%'  align='center'>
        <v-card-title>{{titulo}}
            <v-dialog width="700" v-if='basura=="true"'> 
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" variant="text"  density="compact" icon='mdi-trash-can'> </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                        <v-card  class="mx-auto float-start" elevation="16" min-width="270" title="¿Eliminar elemento?">
                            
                            <div class="pa-4 text-end" >
                            <v-btn class="text-none mr-3" color="medium-emphasis" min-width="100" rounded variant="outlined" @click="isActive.value = false">
                                Cancelar
                            </v-btn>
                            <v-btn  class="text-none" color="medium-emphasis" min-width="100" rounded variant="outlined" @click="isActive.value = false; basuraact();">
                                Aceptar
                            </v-btn>
                            </div>
                        </v-card>
                </template>
            </v-dialog>
        </v-card-title>

          
                        
        <div class="interior pb-3 contenedor">
            <v-divider v-show='titulo' class="border-opacity-50"></v-divider>
            
            <v-container class="pl-10 pr-10">
                
                        <slot></slot>
    
            </v-container>
           
            <v-card-actions  v-show='tipo!="sinboton"'>
            <div class='w-100' >
                <BotonPagina   @botonClick='btn' @boton2Click='btn2' :tipo='boton' propiedad='w-75' :tamaño='tamañobtn' :posicion='posicion' :texto='enviar' @click="click"></BotonPagina>
                
            </div>
           
        </v-card-actions>

        <BotonPagina :link='link' v-show='pie'  :texto='pie' tipo='minus'></BotonPagina>
                


    </div>
    

</v-card>

    </div>
</template>

<script setup>

import {ref} from 'vue'
import BotonPagina from "./BotonPagina.vue"



const props = defineProps({
titulo: String, //Titulo de formulario
enviar: String, //Texto del boton principal
pie:String, //Boton tipo link en la parte inferior, y que texto muestra
posicion:String, //Posicion del boton principal: end y start
link:String, //nombre de ruta (de routerlink) para boton tipo link
boton:String,
tamañobtn:String,
basura:String,
tipo:String
})



const emit = defineEmits(['datos','boton','boton2','basura'])
const click = () =>{
emit('datos')
}

const btn = ()=> emit('boton')
const btn2 = ()=> emit('boton2')
const basuraact = ()=>{

   
    emit('basura')
}

</script>

<style scoped>



.interior{

background: linear-gradient(182deg, rgba(255,255,255,0.55) 0%, rgba(211,211,211,0.55) 100%);
background-blend-mode: normal;
backdrop-filter: blur(50px);
}

.titulo{
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
@media screen and (max-width:320px) {
  .titulo{
    font-size: 1.1em;
  }
    .icon{
        width: 1px;
    }
}

</style>