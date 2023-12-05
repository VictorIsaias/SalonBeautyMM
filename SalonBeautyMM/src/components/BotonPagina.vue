<template>

    <div v-show='tipo!="ninguno"'>
        
        <div  v-if='tipo=="enviar"' >
            <div ref="boton" >
            <v-btn  @click='btnClick' :class=' clase' color='#ffdcd5' ref='boton-pry' block  elevation='3' rounded="lg" variant="flat"  :size="tamaño">
                <v-icon v-if='icon' :icon='icon' class='mr-2'></v-icon><strong class='texto' >{{texto}}</strong>
             </v-btn>
            </div>
        </div>

        <div  v-if='tipo=="pedir"'  >
            <div ref="boton">
            <v-btn @click='btnClick'  :class='clase'  ref='boton-pry' width='100%' height='3rem' elevation='3' rounded="lg" variant="tonal"  :size="tamaño">
                <div class='d-flex align-center '><v-icon icon='mdi-calendar-range' class='mr-3'></v-icon>
                    <strong >{{texto}}</strong></div>
             </v-btn>
            </div>
        </div>

        <div  v-if='tipo=="solo"' >
           <router-link :to='{name:link}'>
            <v-btn @click='btnClick'  :color='color' ref='boton-pry'   variant="text"  :size="tamaño">
                <slot></slot>
            </v-btn>
        </router-link>
        </div>

        

        <div  v-if='tipo=="dual"' >
            <div ref="boton">
            <v-btn @click='btn2Click'  color='#ffdcd5'  ref='boton-pry'   elevation='3' rounded="lg" variant="flat"  :size="tamaño">
                <div div class='texto'><strong>CANCELAR</strong></div>
             </v-btn>
             <v-btn  @click='btnClick'   color='#ffdcd5' ref='boton-pry'   elevation='3' rounded="lg" variant="flat"  :size="tamaño">
                <div div class='texto'><strong>{{texto}}</strong></div>
             </v-btn>
            </div>
        </div>
        <div  v-if='tipo=="servicio"' >
            <div ref="boton">
            <v-btn @click='btnClick' height='3rem' class=' pa-4 color d-flex justify-start' ref='boton-pry' block  elevation='1'    :size="tamaño">
                <v-icon class='pr-3' color='#169873' size='large' icon="mdi-plus"></v-icon><div class='text-body-2' style='font-size:100%;text-transform: capitalize;'>{{texto}}</div>
             </v-btn>
            </div>
        </div>
        

    <router-link v-if='tipo=="minus"' :to='{name:link}'>
        <v-btn  class='text-none'  variant='plain' density="compact" size='small'>
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
        link: {type:String}, //nombre de ruta (de routerlink) para boton minus
        color:{type:String},
        clase:{type:String},
        icon:{type:String}
})
const boton = ref(null)
const boton_pry = ref(null)


const emit = defineEmits(['botonClick','boton2Click'])

const btnClick = ()=> emit('botonClick')
const btn2Click = ()=> emit('boton2Click')


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

.btncita{
    opacity: 0.88;
  color:azure;
  font-size: 1.2rem;
  font-family: britannnic;
  border-radius: 15px;
  border: 1px solid rgba(0, 108, 77, 0.097);
  background: radial-gradient(circle, #28ebb3 0%, #89ffde 100%);
  background-blend-mode: normal;
  backdrop-filter: blur(23px);
  box-shadow: 0px 2px 4px 2px rgba(100,100,100,0.5);
}

.btncita strong,.cancelar strong,.finalizar strong,.btncita *,.cancelar *,.finalizar *{
   
  color:rgb(228, 255, 255);
  font-size: 1rem;
  font-family: britannnic;

}


.cancelar{
    opacity: 0.88;
  color:azure;
  font-size: 1.2rem;
  font-family: britannnic;
  border-radius: 15px;
  border: 1px solid rgba(0, 108, 77, 0.097);
  background: radial-gradient(circle, #eb4c2899 0%, #d17f5f97 100%);
  background-blend-mode: normal;
  backdrop-filter: blur(23px);
  box-shadow: 0px 2px 4px 2px rgba(100,100,100,0.5);
}

.finalizar{
    opacity: 0.88;
  color:azure;
  font-size: 1.2rem;
  font-family: britannnic;
  border-radius: 15px;
  border: 1px solid rgba(0, 108, 45, 0.097);
  background: radial-gradient(circle, #28eb70a5 0%, #82f8adc2 100%);
  background-blend-mode: normal;
  backdrop-filter: blur(23px);
  box-shadow: 0px 2px 4px 2px rgba(100,100,100,0.5);
}

.texto{
    color: #9F3E6D;
    
}

.texto2{
    color: #169873
}

.w-75{
    width: 75%;
}

.color{
    background: #fff5fa;
  background-blend-mode: normal;
  backdrop-filter: blur(29px);

}
</style>