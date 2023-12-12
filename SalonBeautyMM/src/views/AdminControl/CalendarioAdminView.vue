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
          :editable-events="{resize: true}"
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
          <template v-slot:arrow-prev>  
            {{}}
            
            <div v-if='flechas'>
              
            <boton hidden id='previo' tipo='solo' @botonClick='anterior' texto='Anterior'>
          
            <v-icon icon="mdi-chevron-left"></v-icon></boton>
           
           </div>
           
          </template>
          <template v-slot:arrow-next> 
            {{}}
            <div v-if='flechas'>
            <boton tipo='solo' id='siguiente' @botonClick='siguiente' texto='siguiente'>
            
            <v-icon icon="mdi-chevron-right"></v-icon></boton>
            </div>
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
      
                
               <v-container  class='titulo' >
               
                      <v-row>
                        
                        <v-col class=' text-start text-h5' style='width:20rem'>
                        
                        Calendario 
                        <div class="text-body-2" style='width:7rem'>
                          {{hoy.toLocaleString('es-ES',{ month: 'long' }).charAt(0).toUpperCase() + hoy.toLocaleString('es-ES',{ month: 'long' }).slice(1)}} {{hoy.getFullYear()}}
                        </div>
                      
                        <v-divider hidden class='divider3' ></v-divider>
                      </v-col>
                      
                      <v-divider class='divider' vertical inset></v-divider>
                      <v-divider hidden class='divider2' vertical inset></v-divider>
                      
                      <v-col class='control'>
                      
                      <v-col>
                        <v-radio-group v-model='modocita'  class='d-flex align-center h-100'>
                        <v-row class=' d-flex align-center justify-space-between' style="width:16rem">
                          <v-col>
                          <v-radio class='radio' color='#169873'   value="bloq">
                            <template v-slot:label>
                              <div class='radio'>
                              Bloqueo
                          </div>
                          </template>
                          </v-radio>
                        </v-col>
                      
                        <v-col>
                          <v-radio class='radio' color='#169873'  value="cita">
                            <template v-slot:label>
                              <div class='radio'>
                            Cita
                          </div>
                          </template>
                          </v-radio>
                        </v-col>
                           
                        </v-row>
                      
                        </v-radio-group>

                      </v-col>
                      
                      <v-divider class='divider' vertical inset></v-divider>
                      <v-col class='diaSemana'>
                        <v-radio-group v-model='activeView' class='h-100 d-flex align-center ' >
                        <v-row class=' d-flex align-center justify-space-between' style="width:16rem">

                       <v-col>
                        <v-radio class='radio' @click="view1"  color='#169873' label="Día" value="day"> <template v-slot:label>
                          <div class='radio'>
                            Día
                          </div>
                         
                          </template></v-radio>
                        </v-col>
                          
                       <v-col>
                        <v-radio class='radio' @click="view2" color='#169873' value="week">
                          <template v-slot:label>
                            <div class='radio'>
                            Semana
                          </div>
                          </template>
                        </v-radio>
                       </v-col>
                      </v-row>   
                        </v-radio-group>
                      </v-col>
                    </v-col>
                   
                    
                    
                    
                      
                      <v-col class='control2'>
                        <v-radio-group v-model='modocita'  class='d-flex align-center h-100'>
                        <v-row class=' d-flex align-center justify-space-between' style="width:16rem">
                          <v-col>
                          <v-radio class='radio' color='#169873'   value="bloq">
                            <template v-slot:label>
                              <div class='radio'>
                            Bloqueo
                          </div>
                          </template>
                          </v-radio>
                        </v-col>
                      
                        <v-col>
                          <v-radio class='radio' color='#169873'  value="cita">
                            <template v-slot:label>
                              <div class='radio'>
                            Cita
                          </div>
                          </template>
                          </v-radio>
                        </v-col>
                           
                        </v-row>
                      
                        </v-radio-group>

                      </v-col>
                      
                      <v-divider class='divider' vertical inset></v-divider>
                      <v-col class='control2 diaSemana'>
                        <v-radio-group v-model='activeView' class='h-100 d-flex align-center ' >
                        <v-row class=' d-flex align-center justify-space-between' style="width:16rem">

                       <v-col>
                        <v-radio class='radio' @click="view1" color='#169873' value="day">
                          <template v-slot:label>
                            <div class='radio'>
                            Día
                          </div>
                          </template></v-radio>
                       </v-col>
                          
                       <v-col>
                        <v-radio class='radio' @click="view2" color='#169873' value="week">
                          <template v-slot:label>
                            <div class='radio'>
                            Semana
                          </div>
                          </template>
                        </v-radio>
                       </v-col>
                      </v-row>   
                        </v-radio-group>
                      </v-col>
                    

                    <v-divider hidden class='divider2' vertical inset></v-divider>
                      <v-divider class='divider' vertical inset></v-divider>
                      
                      
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


  var flechas = ref(true)

  var views=ref(['years', 'year', 'month','day'])

  function view1 (){
    views.value=['years', 'year', 'month','week']
    flechas.value=false
    
  }
   function view2  (){
    views.value=['years', 'year', 'month','day']
    flechas.value=true
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

  async function reescalar(obj){
    for (let i =0;i<=eventos.value.length-1;i++){
      if(eventos.value[i].id==obj.event.id){
        eventos.value[i].end=obj.event.end
        eventos.value[i].end = new Date(eventos.value[i].end)
        while(eventos.value[i].end.getMinutes()%30!=0){
          eventos.value[i].end = eventos.value[i].end.subtractMinutes(1)
        
        }
        let idservicio=eventos.value[i].id
        let fechilla=eventos.value[i].start
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
            let starti = eventos.value[i].end.getMinutes()
            starti += eventos.value[i].end.getHours()*60
            starti=starti-start4

            let inst = {
          id:idservicio,
          duracion_min:starti,
          fecha_hora:fechilla
        }
        await fetch('http://3.143.143.93/servicio_cita/actualizar', {
          method: 'POST',
          body: JSON.stringify(inst),
      }).then(response => response.json())
          .then(responsej => {
              if (responsej.status != 200) {
                  return
              }
      
      
          });
            eventos.value[i].end = eventos.value[i].end.format('YYYY-MM-DD HH:mm')
           
            return
            

          }
          
      }
    }

     
    let starti = eventos.value[i].end.getMinutes()
            starti += eventos.value[i].end.getHours()*60
            starti=starti-start4
            let inst = {
          id:idservicio,
          duracion_min:starti,
          fecha_hora:fechilla
        }
        await fetch('http://3.143.143.93/servicio_cita/actualizar', {
          method: 'POST',
          body: JSON.stringify(inst),
      }).then(response => response.json())
          .then(responsej => {
              if (responsej.status != 200) {
                  return
              }
      
      
          });
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
.titulo{
  width: 50rem;
}


@media screen and (min-width: 962px){
  .control{
    display: none;
}
.divider3{
  visibility:hidden;
}


}

@media screen and (max-width: 961px){
  .titulo{
  width: 30rem;

}
.titulo *{
  padding-bottom: 2px;
  padding-top: 1.5px;
  
}
.control{
  visibility:visible;
  display: flex;
  flex-direction: column;
}
.control2{
  display: none;
}
.divider{
  visibility: hidden;
}
.divider2{
  visibility:visible;
}
.divider3{
  visibility:hidden;
}

.radio{
  
  font-size: 0.8rem;
}

}

@media screen and (max-width: 720px){
  .titulo{
  width: 16rem;
}
.diaSemana{
  margin-left: 0;
}
.divider2{
  visibility: hidden;
}
.divider3{
  visibility:visible;
}
.titulo *{
  padding-bottom: 1.5px;
  padding-top: 1px;
  
}

}

@media screen and (max-width: 451px){
  .titulo{
  width: 15rem;
}
}


@media screen and (max-width: 376px){
  .titulo{
  width: 14rem;
}
.titulo *{
  padding-bottom: 1px;
  padding-top: 0.5px;
  padding-left: 0;
  padding-right: 0;
}
.radio{
  
  font-size: 0.8rem;
}
}

@media screen and (max-width: 321px){
  .titulo{
  width: 10rem;
}
.radio{
  
  font-size: 0.7rem;
}
.titulo *{
  padding: 0;
  padding-bottom: 0.5px;
  
}
}
 </style>