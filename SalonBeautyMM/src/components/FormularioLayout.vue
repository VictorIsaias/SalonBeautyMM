<template >
    
    <v-card elevation='4'   width='45%' :title="titulo"  align='center'>
    <div class="interior pb-3">
            <v-divider class="border-opacity-50"></v-divider>
            <v-container class="pl-10 pr-10">
                
                        <slot></slot>
    
            </v-container>
           
            <v-card-actions>
            <div style="width: 100%" align='center'>
                <BotonPagina propiedad='w-75' tamaño='large' :posicion='posicion' :texto='enviar' @click="click"></BotonPagina>
                
            </div>
           
        </v-card-actions>

        <BotonPagina :link='link' v-show='pie'  :texto='pie' tipo='minus'></BotonPagina>
                


    </div>
    

</v-card>


</template>

<script setup>

import {ref} from 'vue'
import BotonPagina from "./BotonPagina.vue"



const props = defineProps({
titulo: String, //Titulo de formulario
enviar: String, //Texto del boton principal
pie:String, //Boton tipo link en la parte inferior, y que texto muestra
posicion:String, //Posicion del boton principal: end y start
link:String //nombre de ruta (de routerlink) para boton tipo link

})



const emit = defineEmits(['datos'])
const click = () =>{
emit('datos',correo.value,contra.value)
}


</script>

<style scoped>



.interior{

background: linear-gradient(182deg, rgba(255,255,255,0.55) 0%, rgba(211,211,211,0.55) 100%);
background-blend-mode: normal;
backdrop-filter: blur(50px);
}
</style>