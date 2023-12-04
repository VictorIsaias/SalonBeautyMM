<template>
  <div >
    <div >
      
      
          <vue-cal  
          style="height: 100%"
          @event-duration-change='reescalar'
          
          @cell-dblclick='abrirCrearcita'
          
          @event-drop='mover'
          :events="eventos"
          :min-date="minDate"
          :max-date="maxDate"
          hideViewSelector
          :editable-events="{ drag: true,resize: true}"
          small
          min-event-width="100"
          :time-from="minimo * 60"
          :time-to="maximo * 60"
          v-model:selected-date="semanaact"
          :hide-weekdays='array'
          :time-step="30"  locale="es"  
          id="calendario" 
          :time-cell-height="50"
          v-model:active-view='activeView'
          v-model:disable-views="views"
          :week-start='1'
          >
          <template v-slot:no-event>{{}}</template>
          <template v-slot:arrow-prev>   <boton hidden id='previo' tipo='solo' @botonClick='anterior' texto='aNTERIOR'>
            <v-icon icon="mdi-chevron-left"></v-icon></boton>
            </template>
          <template v-slot:arrow-next>   <boton tipo='solo' id='siguiente' @botonClick='siguiente' texto='siguiente'>
            <v-icon icon="mdi-chevron-right"></v-icon></boton>
           </template>
           <template #event="{event}">   
            <v-container class='d-flex flex-column align-start pt-0 pl-3 pr-0' style='font-family: "Oswald", sans-serif;font-size:1rem'>
            <div class=" d-flex justify-space-between text-start align-start w-100">
         
              <v-row  v-if='event.class!="citat"' >
              
                          <v-col  cols='9' >
                
              {{event.title}} 
                               
              
              </v-col>
            

              <v-col cols='2'>
  
                <v-btn @click='desactivarBloqueo(event)' v-if='event.title=="Bloqueado"' class='  ' icon='mdi-trash-can' size='x-small' height='25'  variant='text'></v-btn>

              </v-col>
            </v-row>
          
            <v-row v-else>
              <v-col cols='9'>

              </v-col>
              <v-col  cols='2'>

                              
              <v-btn @click='editarCita(event.start)' v-if='event.class=="citat"' class='align-self-end' icon='mdi-pencil' size='x-small' height='25' variant='text'></v-btn>
          
              </v-col>
           
            </v-row>
       
  
         
         
           
           </div>
           
           <div v-if='event.class!="citat"'>

           
               {{event.start.format('HH:mm')}} - {{event.end.format('HH:mm')}}
          
              </div>
            </v-container>
           </template>
          <template v-slot:title>
      
                
               <v-container style='width:50rem'>
                      <v-row>
                        <v-col class=' text-start text-h5' style='width:20rem'>
                        
                        Calendario 
                        <div class="text-body-2" style='width:7rem'>
                          {{hoy.toLocaleString('es-ES',{ month: 'long' }).charAt(0).toUpperCase() + hoy.toLocaleString('es-ES',{ month: 'long' }).slice(1)}} {{hoy.getFullYear()}}
                        </div>
                    
                      </v-col>
                      <v-divider vertical inset></v-divider>
                      
                      <v-col>
                        <v-radio-group v-model='modocita'  class='d-flex align-center h-100'>
                        <v-row class=' d-flex align-center justify-space-between' style="width:16rem">
                          <v-col>
                          <v-radio color='#169873' label="Bloqueo" value="bloq"></v-radio>
                        </v-col>
                      
                        <v-col>
                          <v-radio color='#169873' label="Cita" value="cita"></v-radio>
                        </v-col>
                           
                        </v-row>
                      
                        </v-radio-group>

                      </v-col>
                      <v-divider vertical inset></v-divider>
                      <v-col >
                        <v-radio-group v-model='activeView' class='h-100 d-flex align-center ' >
                        <v-row class=' d-flex align-center justify-space-between' style="width:16rem">

                       <v-col>
                        <v-radio @click="view1"  color='#169873' label="Día" value="day"></v-radio>
                       </v-col>
                          
                       <v-col>
                        <v-radio @click="view2"  color='#169873' label="Semana" value="week"></v-radio>
                     
                       </v-col>
                      </v-row>   
                        </v-radio-group>
                      </v-col>
                      <v-divider vertical inset></v-divider>
                      
                      
                    </v-row>
                  </v-container>
                  
          </template>
          
          </vue-cal>
       
        

        <ventana :modocita='modocita'></ventana>
      

    </div>
        

  </div>


  
</template>

<script setup>

import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import '@/assets/vuecal.scss'
import {computed, ref,onMounted,onUnmounted} from "vue"
import boton from '@/components/BotonPagina.vue'
import ventana from '@/components/FlotanteCalendario.vue'
import {CalendarioStore} from '@/stores/CalendariosStore'
import { storeToRefs } from 'pinia'

const cal = CalendarioStore()

const {eventos,modocita,preService,minimo,maximo,modo, servs,flotante ,cita,servCita,servicios,citas} = storeToRefs(cal)
const {desactivarBloqueo,editarCita,actualizarCita,leerCitas,abrirCrearcita,enviarCita}= cal

import {useRoute} from 'vue-router'

  const route = useRoute()
 
  var activeView=ref('week')


  var views=ref(['years', 'year', 'month','day'])

  function view1 (){
    views.value=['years', 'year', 'month','week']
  }
   function view2  (){
    views.value=['years', 'year', 'month','day']
  }


 var preServicio =0
 
 modocita.value='bloq'




function menu(){
  alert(1)
}


var tiempoTranscurrido = Date.now();
var hoy = new Date(tiempoTranscurrido);

onMounted(()=>  {
  eventos.value= [ ]
  leerCitas()
  modocita.value='cita'
  
  esc()})



  onUnmounted(() => {
    
    //Enviar todos los datos cambiados de los bloqueos a backend

    
  })

  function reescalar(obj){
    for (let i =0;i<=eventos.value.length-1;i++){
      if(eventos.value[i].id==obj.event.id){
        eventos.value[i].end=obj.event.end
        eventos.value[i].end = new Date(eventos.value[i].end)
        while(eventos.value[i].end.getMinutes()%30!=0){
          eventos.value[i].end = eventos.value[i].end.subtractMinutes(1)
        
        }
      
        let start =''
        let start2=''
        let start3=''
        let start4=''
        let evento=''

        for (let o =0;o<=eventos.value.length-1;o++){
          
        start = new Date(eventos.value[o].start)
        start3 = new Date(eventos.value[i].start)
        start4=start3.getMinutes()
          start4+=start3.getHours()*60
        if(start.getDate()==eventos.value[i].end.getDate()){
      
          start2=start.getMinutes()
          start2+=start.getHours()*60
          evento=eventos.value[i].end.getMinutes()
          evento+=eventos.value[i].end.getHours()*60
        
          if(evento>start2&&start2>start4){
        
            eventos.value[i].end = new Date(eventos.value[o].start)
            
            eventos.value[i].end = eventos.value[i].end.format('YYYY-MM-DD HH:mm')
            return
            

          }
          
      }
    }
    eventos.value[i].end = eventos.value[i].end.format('YYYY-MM-DD HH:mm')
    

      }

    }

    



  }

  function mover(obj){
    for (let i =0;i<=eventos.value.length-1;i++){
      if(eventos.value[i].id==obj.event.id){

        eventos.value[i].start=obj.event.start

        eventos.value[i].start = new Date(eventos.value[i].start)
        while(eventos.value[i].start.getMinutes()%30!=0){
          eventos.value[i].start = eventos.value[i].start.subtractMinutes(1)
        
        }
        eventos.value[i].start = eventos.value[i].start.format('YYYY-MM-DD HH:mm')
        

        
        
      }
    }

    for (let i =0;i<=eventos.value.length-1;i++){
      if(eventos.value[i].id==obj.event.id){
        eventos.value[i].end=obj.event.end

        eventos.value[i].end = new Date(eventos.value[i].end)
        while(eventos.value[i].end.getMinutes()%30!=0){
          eventos.value[i].end = eventos.value[i].end.subtractMinutes(1)
        
        }
      
        
        let start =''
        let start2=''
        let start3=''
        let start4=''
        let evento=''
        let evento2=''
        let duracion=''
        eventos.value[i].start = new Date(eventos.value[i].start)
        
       
        for (let o =0;o<=eventos.value.length-1;o++){
          
        start = new Date(eventos.value[o].start)
        start3 = new Date(eventos.value[i].start)
        start4=start3.getMinutes()
        start4+=start3.getHours()*60
        if(start.getDate()==eventos.value[i].end.getDate()){
      
          start2=start.getMinutes()
          start2+=start.getHours()*60
          evento=eventos.value[i].end.getMinutes()
          evento+=eventos.value[i].end.getHours()*60
          evento2=eventos.value[i].start.getMinutes()
          evento2+=eventos.value[i].start.getHours()*60
          duracion=evento-evento2
          if(evento>start2&&start2>start4||minimo.value*60>evento2||maximo.value*60<evento||evento2==start2&&eventos.value[i]!=eventos.value[o]){
            
            eventos.value[i].end = obj.oldDate.addMinutes(duracion)
            eventos.value[i].start =obj.oldDate
         
            eventos.value[i].start = eventos.value[i].start.format('YYYY-MM-DD HH:mm')
            
            eventos.value[i].end = eventos.value[i].end.format('YYYY-MM-DD HH:mm')
            return
            

          }
          
      }
    } eventos.value[i].end = eventos.value[i].end.format('YYYY-MM-DD HH:mm')
    
        
      }
    }
    
    
  }


var semana = hoy.getWeek()
var week = 1
var semanaact=ref(hoy)




const minDate = computed (() => {
    return new Date().subtractDays(0)
  });

  const maxDate = computed (() => {
    return new Date().subtractDays(-15)
  });

  function anterior (){
    
   if(week==2){
        week = 1
        document.getElementById("previo").setAttribute('hidden',true)
    document.getElementById("siguiente").removeAttribute('hidden')
   
      }
      else if(week==3){
        week = 2
 document.getElementById("siguiente").removeAttribute('hidden')
   
      }
    esc()
   
  }

  function siguiente (){
    
   if(week==1){
        
    document.getElementById("previo").removeAttribute('hidden')
      
      
        week = 2
      }
      else if(week==2){
          
      document.getElementById("siguiente").setAttribute('hidden',true)
      document.getElementById("previo").removeAttribute('hidden')
      
        week = 3
      }
      esc()
    
  }

  var esconder =''
  var array = ref([])  


 
  function esc() {
    array.value=[]
    
    var fecha = minDate.value.getDay() 
    if(fecha==0){
      fecha=7
    }
 
  switch(week)
  {
    case 1:
  
    while(fecha>=1){
      array.value.push(fecha-1)
      fecha-=1}
      
  
    break
    case 2:
      array.value=['']
    break
    case 3:
    while(fecha<=7){
      array.value.push(fecha)
      fecha+=1
    }
      
    break
  }
  

    




}




  


</script>

<style scoped >
.fondo{
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
}


 </style>