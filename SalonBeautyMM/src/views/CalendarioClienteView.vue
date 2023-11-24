<template>
  <div >
    <div >
      <v-container >
          
          
          <vue-cal  
          style="height: 90vh"
          :special-hours="bloqueos"
          @cell-click='abrirCrearcita'
          :min-date="minDate"
           :max-date="maxDate"
           hideViewSelector
           small
           :time-from="minimo * 60"
           :time-to="maximo * 60"
           v-model:selected-date="semanaact"
          :hide-weekdays='array'
          :time-step="30"  locale="es"  
          id="calendario" 
          :time-cell-height="50"
          active-view='week'
          :disable-views="['years', 'year', 'month','day']"
          :week-start='1'
          >
          <template v-slot:no-event>{{}}</template>
          <template v-slot:arrow-prev>   <boton hidden id='previo' tipo='solo' @botonClick='anterior' texto='aNTERIOR'>
            <v-icon icon="mdi-chevron-left"></v-icon></boton>
            </template>
          <template v-slot:arrow-next>   <boton tipo='solo' id='siguiente' @botonClick='siguiente' texto='siguiente'>
            <v-icon icon="mdi-chevron-right"></v-icon></boton>
           </template>
          <template v-slot:title>
            <v-container class='text-h5' >
              <v-row>
              Selecciona una fecha y hora
            
            </v-row>
            <v-row class='text-body-2'>
              {{hoy.toLocaleString('es-ES',{ month: 'long' }).charAt(0).toUpperCase() + hoy.toLocaleString('es-ES',{ month: 'long' }).slice(1)}} {{hoy.getFullYear()}}
         
            </v-row>
            </v-container>
           
          </template>
          
          </vue-cal>
        </v-container>

        <ventana ></ventana>

    </div>
        

  </div>


  
</template>

<script setup>

import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import '../assets/vuecal.scss'
import {computed, ref,onMounted} from "vue"
import boton from '../components/BotonPagina.vue'
import ventana from '../components/FlotanteCalendario.vue'
import {CalendarioStore} from '../stores/CalendariosStore'
import { storeToRefs } from 'pinia'

const cal = CalendarioStore()

const {preService,minimo,maximo,bloqueos,modo, servs,flotante ,cita,servCita,servicios,citas} = storeToRefs(cal)
const {actualizarCita,leerBloqueos,abrirCrearcita,enviarCita}= cal

import {useRoute} from 'vue-router'

  const route = useRoute()
 

 var preServicio =0
 









var tiempoTranscurrido = Date.now();
var hoy = new Date(tiempoTranscurrido);

onMounted(()=>  {
   bloqueos.value= {
  1: [''],
  2: [''],
  3: [''],
  4: [''],
  5: [''],
  6: [''],
  7: [''],

}
  

  leerBloqueos()

  preServicio= route.params.idserv

 var duracionPS =0
  for(let i=0;i<servicios.value.length;i++){
    if(servicios.value[i].id==preServicio){
      duracionPS = servicios.value[i].duracion
    }
  }


function agregarBloqueo2(fechaInicio,duracion){
  
  let from = new Date(fechaInicio)
  let dia = from.getDay()
  from = from.getHours()-((duracionPS-30)/60)
  let to = from+((duracionPS-30)/60)
   bloqueos.value[dia].push({
     from: from*60,
     to: to*60,
     class:'bloqueado2',
     label:''
   })
   

}

function leerBloqueos2(){
  for(let i = 0;i<=citas.value.length-1;i++){
  
    agregarBloqueo2(citas.value[i].fechaInicio,citas.value[i].duracionTotal)
  }
  for(let i=1;i<=7;i++){
    bloqueos.value[i].push({
     from: (maximo.value-((duracionPS-30)/60))*60,
     to: maximo.value*60,
     class:'bloqueado2',
     label:''
   })
  }
 
}

if (preServicio>0){

  leerBloqueos2()
  preService.value=preServicio
}


  
  esc()})


var semana = hoy.getWeek()
var segunda = false
var semanaact=ref(hoy)

leerBloqueos()



const minDate = computed (() => {
    return new Date().subtractDays(1)
  });

  const maxDate = computed (() => {
    return new Date().subtractDays(-8)
  });

  function anterior (){
    
   // semanaact.value = semanaact.value.setDate(semanaact.value.getDate() - 7)
 
    document.getElementById("previo").setAttribute('hidden',true)
    document.getElementById("siguiente").removeAttribute('hidden')
    
    esc()
   
  }
  function siguiente (){
    
    //semanaact.value = semanaact.value.setDate(semanaact.value.getDate() + 7)
      
      document.getElementById("siguiente").setAttribute('hidden',true)
      document.getElementById("previo").removeAttribute('hidden')
      esc()
    
  }

  var esconder =''
  var array = ref([])  


 
  function esc() {
    array.value=[]
    
    var fecha = minDate.value.getDay() +2
   
   
  if(segunda==true){

    while(fecha<=7){
      array.value.push(fecha)
      fecha+=1}
      segunda=false

}else{
  if(fecha==8){
    semanaact.value = semanaact.value.setDate(semanaact.value.getDate() + 7)
    
    document.getElementById("siguiente").setAttribute('hidden',true)
    
    
  }
  else{
    while(fecha>=1){
      array.value.push(fecha-1)
      fecha-=1}
      segunda=true
  }
    
      
  


}
}



  


</script>

<style scoped >
.fondo{
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
}


 </style>