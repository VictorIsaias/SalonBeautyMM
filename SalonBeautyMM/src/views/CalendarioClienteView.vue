<template>
  <div >
        <div>
          
          
          <vue-cal  
          @cell-click='mostrar'
          :min-date="minDate"
           :max-date="maxDate"
           hideViewSelector
           small
          :hide-weekdays='array'
           twelveHour
           watchRealTime
          :time-step="30"  locale="es"  
          id="calendario" 
          :time-cell-height="50"
          active-view='week'
          :disable-views="['years', 'year', 'month','day']"
          :week-start='1'
          >
          <template v-slot:no-event>-</template>
          <template v-slot:arrow-prev>   <boton hidden id='previo' tipo='solo' @botonClick='anterior' texto='aNTERIOR'>
            <v-icon icon="mdi-chevron-left"></v-icon></boton>
            </template>
          <template v-slot:arrow-next>   <boton tipo='solo' id='siguiente' @botonClick='siguiente' texto='siguiente'>
            <v-icon icon="mdi-chevron-right"></v-icon></boton>
           </template>
          <template v-slot:title></template>
          
          </vue-cal>
        </div>

        <ventana ></ventana>


  </div>


  
</template>

<script setup>

import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import {computed, ref} from "vue"
import boton from '../components/BotonPagina.vue'
import ventana from '../components/FlotanteCalendario.vue'
import {CalendarioStore} from '../stores/CalendariosStore.js'
import { storeToRefs } from 'pinia'

const cal = CalendarioStore()

const {flotante} = storeToRefs(cal)



var tiempoTranscurrido = Date.now();
var hoy = new Date(tiempoTranscurrido);




var semana = hoy.getWeek()
var segunda = false







const minDate = computed (() => {
    return new Date().subtractDays(0)
  });

  const maxDate = computed (() => {
    return new Date().subtractDays(-7)
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
  esc()


  function esc() {
    array.value=[]
    var fecha = minDate.value.getDay()
    
  if(segunda==true){

  
  

  
   
    while(fecha<=7){
      array.value.push(fecha+1)
      fecha+=1}
      segunda=false
      
 
  
    
}else{
    
    while(fecha>=1){
      array.value.push(fecha-1)
      fecha-=1
      segunda=true
  }


}
}



// Flotante


var hora_inicio = ''
var hora_fin = ''
var duracion = ''
var servicios = []

function mostrar(celda){
  flotante.value = !flotante.value


}
  


</script>

<style scoped>


  .container{
    display: flex;
    align-items: end;
    width: 100vw;
    height: 100vh;
    
  }

  .container div{
   
    
   
    width: 100vw;
    height: 80vh;
  }


 </style>