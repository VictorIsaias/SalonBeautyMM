<script setup>
import boton from '@/components/BotonPagina.vue';
import { ref,onMounted,onActivated, onUpdated } from 'vue';
import {ServiciosStore} from '@/stores/ServiciosStore.js'
import { storeToRefs } from 'pinia'
import {useUsuarioStore} from '@/stores/UsuariosStore'
const serv = ServiciosStore()
const pagina = useUsuarioStore()

const {estadonav} = storeToRefs(pagina)


const servicio = ref({
  nombre:'none',
  precio:0,
duracion_min:0,
descripcion:''
})
import {useRoute} from 'vue-router'

  const route = useRoute()

  var servicios = ref([])
  const response = async ()=>{
    try{
        const respuesta = await fetch('http://18.116.31.102/servicios_activos');
        const data = await respuesta.json();
        servicios.value=data.data;
    }catch{

    }
  }  


  onMounted(   seleccion);
  onUpdated(   seleccion);
  async function seleccion (){
    await response()
    for(let i=0;i<=servicios.value.length-1;i++){
      if(route.params.idserv==servicios.value[i].id){
        
        servicio.value= servicios.value[i]
        
      }
    }
    
    return 
   
  }



</script>

<template>
  <div class='fondu'>
    <v-container  class="bg-red-lighten-4 elevation-5 contenedor">
    <div >
      <div >


      <v-row class="desaparce">
      <v-col cols="6" class='carrusel'>
        <v-img :src="servicio.img" cover class='h-100' width="100%" height='100%' :aspect-ratio="1"></v-img>
                
      </v-col>

      <v-col cols="6" >
        <v-container class='d-flex  h-100 w-100 flex-column' >
          <v-card-title class="font-weight-black text-wrap" style="font-family: Britannic ; font-size:1.5rem;">{{servicio.nombre}}</v-card-title>
        
          <v-card-text style="font-family: Oswald;">{{servicio.descripcion}}</v-card-text>
          <v-row class="h-100  d-flex justify-center align-end ">
           <v-card-text style='font-size:1.1rem' class=" font-weight-black"> <v-divider class="mb-5 border-opacity-25"></v-divider>
             ${{servicio.precio}}</v-card-text>
        
          </v-row>
          <v-row class=" d-flex align-end justify-end">
           
          <v-col cols="3" >
            
              <div class="font-weight-bold">{{servicio.duracion_min}} minutos</div>
            </v-col>
            <v-col cols="9">
              <router-link v-if='estadonav==0' :to='{name:"iniciar"}'><boton tipo='pedir' clase='btncita' texto="INICIA SESION" ></boton></router-link>
                 <router-link v-else :to='{name:"crear_cita",params:{idserv:servicio.id}}'><boton tipo='pedir' clase='btncita' texto="PEDIR CITA" ></boton></router-link>
                  </v-col>
        </v-row>
        



        </v-container>
        
      </v-col>
      
    </v-row>
    
   
    <div align="center" justify="center">
            <v-row class="desaparce2">
              <v-col cols="12" class='carrusel'>
                <v-img :src="servicio.img" cover class='h-100' width="100%" height='100%' :aspect-ratio="1"></v-img>
                        
              </v-col>
              <v-col cols="12">
                <v-card-title class="font-weight-black text-wrap titulo" style="font-family: Britannic Bold;">{{servicio.nombre}}</v-card-title>
              <v-card-text style="font-family: Oswald; height: 5rem;">{{servicio.descripcion}}</v-card-text>
              <v-divider></v-divider>
              <v-row align="center" justify="center">
                <v-col cols='4'>
                  <v-card-subtitle class="font-weight-black">${{servicio.precio}}</v-card-subtitle>
                 
                </v-col>
                <v-col cols="3">
                  <v-card-text class="font-weight-bold">{{servicio.duracion_min}} min.</v-card-text>
                
                </v-col>
              
                <v-col cols="5">
                  
                  <v-row justify="end">
                <v-card-actions>
                 <router-link v-if='estadonav==0' :to='{name:"iniciar"}'><boton tipo='pedir' clase='btncita' texto="INICIA SESION" ></boton></router-link>
                 <router-link v-else :to='{name:"crear_cita",params:{idserv:servicio.id}}'><boton tipo='pedir' clase='btncita' texto="PEDIR CITA" ></boton></router-link>
                  
                </v-card-actions>
              </v-row>
              </v-col>
              </v-row>
              </v-col>
            </v-row>
          </div>
       
  </div>
</div>


  </v-container>
  <div class="text-caption font-italic mt-1 ml-1">Todos los precios y duraciones son aproximaciones y podrian no ser exactos</div> 
       
  </div>
      
</template>

<style scoped>

.contenedor{
  background: linear-gradient(153deg, #ffd3c6 0%, #ffc0ab 30.2%, #fcb5b5 100%);
  background-blend-mode: normal;
  box-shadow: 0px 2px 4px 4px rgba(100,100,100,0.5);
}
.carrusel{
  width: 35rem;
  height: 28rem;
  border-radius: 8px;
  border: 1px dashed rgba(128,128,128,0);
  background: linear-gradient(182deg, rgba(255,255,255,0.55) 0%, rgba(211,211,211,0.55) 100%);
  background-blend-mode: normal;
  backdrop-filter: blur(50px);
  box-shadow: 0px 1px 1px 1px rgba(100,100,100,0.3);
}
@media screen and (min-width: 686px) {
  .desaparce2{
    display: none;
  }
  .fondu{
    height: 100vh;
  }
}

@media screen and (max-width: 686px) {
  .desaparce{
    display: none;
  }
  
  .contenedor{
    width: 350px;
  }

  .titulo{
    font-size: 2em;
  }
  .fondu{
    height: 100%;
    
  }
}

@media screen and (max-width: 634px) {
  .titulo{
    font-size: 1.8em;
  }
}
@media screen and (max-width: 585px) {
  .titulo{
    font-size: 1.6em;
  }
}
@media screen and (max-width: 780px) {
  .botoncito{
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 752px) {
  .botoncito{
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 425px) {
  .titulo{
    font-size: 1.3em;
  }
  .contenedor{
    width: 100vw;
  }
  .desaparce{
    width: 100vw;
  }
}
</style>