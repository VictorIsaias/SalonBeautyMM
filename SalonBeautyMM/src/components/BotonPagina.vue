<template>

    <div >
        
        <div v-if='tipo=="enviar"' >
            <div ref="boton">
            <v-btn   color='#ffdcd5' ref='boton-pry' block  elevation='3' rounded="lg" variant="flat"  :size="tamaño">
                <div   div class='texto'><strong>{{texto}}</strong></div>
             </v-btn>
        </div>
        </div>
        

    <router-link :to='{name:link}'>
        <v-btn v-if='tipo=="minus"' class='text-none'  variant='plain' density="compact" size='small'>
        <div class='texto2'>{{texto}}</div>
        </v-btn>
        
    </router-link>
   
    </div>
    

</template>

<script setup>
import {ref,computed,onMounted} from 'vue'

const props = defineProps({
    texto: {
        type:String,
        required: true}, //texto que se muestra dentro del boton
    tipo: {
        type: String,
        default: 'enviar'}, //tipo de boton: 'enviar' es el boton normal, 'minus' es el boton tipo link
        posicion:{type:String}, //posicion flex-direction: end y start
        tamaño: {type:String}, //tamaño: x-small, small, large, x-large
        propiedad: {type:String}, //propiedad extra de vuetify btn
        link: {type:String} //nombre de ruta (de routerlink) para boton minus

})
const boton = ref(null)
const boton_pry = ref(null)

onMounted(()=>
{
    const btn = boton.value
    const btn_pry = boton.value

    if(props.posicion){
        
    btn.classList.add('d-flex')
    switch(props.posicion)
    {
    case 'end':
    
    btn.classList.add('justify-end')
    break
    case 'start':
    btn.classList.add('justify-start')
    }
    }
    

    if(props.propiedad){
        
        btn_pry.classList.add(props.propiedad)
        
    }
    
})




 
</script>



<style scoped>

.texto{
    color: #9F3E6D;
    
}

.texto2{
    color: #169873
}

.w-75{
    width: 75%;
}

</style>