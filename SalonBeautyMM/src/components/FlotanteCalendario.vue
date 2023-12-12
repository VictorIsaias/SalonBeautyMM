<template>
  <div >
    
    <v-overlay 
    v-if='modocita=="cliente"'
    v-model="flotante"
    scroll-strategy="none"
    persistent
          class="align-center justify-center h-100 "
        >
        <formulario style='overflow-y: auto; max-height: 90vh;' tipo='info' class='w-100 h-100' v-if='modo==1'>
         
          <v-container class='pa-0 flotante1'>
          <v-row>
            <v-col>
              <formulario class='h-100 w-100 flotante' titulo='Crear cita' tipo='sinboton'>
                <v-dialog width="550" persistent>
                  <template v-slot:activator="{ props }">
                    
                    <v-text-field readonly @click='cancelar' v-bind="props" class='text-body-2 '  variant="underlined">
                    <div class='d-flex justify-space-between w-100 h-0'>
                      Añadir servicios ({{(servs.length-1)}}) <v-icon icon="mdi-plus" color='#169873'></v-icon>
                    </div>
                   </v-text-field>

                  </template>

                  <template v-slot:default="{ isActive }">
                    
                    <v-card title="Servicios" >
                    
                      <v-card-text  v-for='serv in servicios' :key='serv.id'>
                        <div v-if='espacio>=serv.duracion&&contador<=3&&activo[serv.id]&&serv.id!=preService'>
                        <div  class='d-flex justify-space-between align-center'>
                          {{serv.nombre}}
                          <div class='text-medium-emphasis d-flex align-center '>
                            ${{serv.precio}}
                             - {{serv.duracion}}min.
                             <v-checkbox @click='activo[serv.id]=!activo[serv.id]; contador+=1;servs.push(serv.id)'  v-model='servs' :value='serv.id' color='#169873' class='d-flex'></v-checkbox>
                          </div>
                        </div>
                        <v-divider class='mt-2'></v-divider>
                        </div>
                           <div v-else-if='!activo[serv.id]'>
                        <div  class=' d-flex justify-space-between align-center'>
                          {{serv.nombre}}
                          <div class=' d-flex align-center '>
                            ${{serv.precio}}
                             - {{serv.duracion}}min.
                             <v-checkbox  @click='activo[serv.id]=!activo[serv.id]; contador-=1;servs=servs.filter(item => item !== serv.id);bloque = bloque.subtractMinutes(serv.duracion);duracionAct=serv.duracion'  v-model='servs' :value='serv.id' color='#169873' class='d-flex'></v-checkbox>
                          </div>
                        </div>
                        <v-divider class='mt-2'></v-divider>
                        </div>
                        

                        <div v-else-if='espacio<=serv.duracion||contador>3||serv.id==preService'>
                        <div  class='text-disabled d-flex justify-space-between align-center'>
                          {{serv.nombre}}
                          <div class='text-disabled d-flex align-center '>
                            ${{serv.precio}}
                             - {{serv.duracion}}min.
                             <v-checkbox  disabled v-model='servs' :value='serv.id' color='#169873' class='d-flex'></v-checkbox>
                          </div>
                        </div>
                        <v-divider class='mt-2'></v-divider>
                        </div>
                        
                        
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <boton
                          texto="Cancelar"  tamaño='small' class='w-25 mr-4'
                          @click="isActive.value = false" @botonClick='cancelar'
                        ></boton>
                        <boton
                          texto="Listo" tamaño='small' class='w-25 mr-2'
                          @click="isActive.value = false" @botonClick='actualizarCita'
                        ></boton>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>



            </formulario>
            </v-col>
          
          </v-row>
           
         
          <v-row class='cuads' >
            <v-col class='d-flex flex-wrap justify-end subcuads' >
              
                <formulario  tipo='info'  class='mb-7 w-100 h-100' titulo='Servicios:'>
                  <template v-slot:info >
                  <ul v-for='serv in servicios' :key='serv.id'>
                    <div v-for='(s,index) in servs' :key='index'>
                      <p v-if='serv.id == servs[index]' class='text-body-2 mb-1'>
                        {{serv.nombre}} (${{serv.precio}}.00)
                      </p>
                    </div>
                  
                  </ul>
                  </template>
                </formulario>
                <boton @click="cancelar('cerrar')" texto='Cancelar' class='w-75 btn1'></boton>
            </v-col>
            <v-col  class="subcuads">
               
                <formulario tipo='info' class='mb-7 w-100 h-100 ' titulo='Detalle:'>
                  <template v-slot:info>
                   <strong> Duracion aprox.: </strong>{{cita.duracionTotal}} min.<br>
                   <strong> Costo aprox.:</strong> ${{cita.costo}}<br>
                   <strong> Fecha:</strong> {{cita.fechaInicio}} - {{cita.fechaFin}}
                  </template>
          
                </formulario>
                
                
                  <boton @click="enviarCita" texto='Listo' class='w-75 btn1'></boton>
                
                
            </v-col>
            
          </v-row>
          <v-row>
            
            <boton @click="cancelar('cerrar')" texto='Cancelar' class=' btn'></boton>
              
            <boton @click="enviarCita" texto='Listo' class='btn'></boton>
                
          </v-row>
         
        </v-container>
        </formulario>  
        </v-overlay>


        <v-overlay 
    v-if='modocita=="cita"'
    v-model="flotante" 
    scroll-strategy="none"
    persistent
          class="align-center justify-center h-100"
        >
        <formulario style='overflow-y: auto; max-height: 90vh;'  tipo='info' class='w-100 h-100' v-if='modo==1'>
  
          <v-container class='pa-0 flotante2'>
          <v-row>
            <v-col>
              <formulario class='h-100 w-100 flotante' titulo='Crear cita' tipo='sinboton'>
                <v-dialog width="550" persistent>
                  <template v-slot:activator="{ props }">
                    
 <v-form ref="form">
      <v-text-field  :rules="[rules.requerido]" v-model="cliente.nombre" label="Nombre del cliente*" variant="underlined"></v-text-field>

   
  <v-row>
    <v-col>
      <v-text-field :rules="[rules.requerido]" v-model="cliente.apellido_paterno" label="Apellido Paterno*" variant="underlined"></v-text-field>
     
    </v-col>
    <v-col>
      <v-text-field :rules="[rules.requerido]" v-model="cliente.apellido_materno" label="Apellido Materno*" variant="underlined"></v-text-field>
     
    </v-col>
  </v-row>
 
  <v-text-field v-model="cliente.telefono" label="Numero de telefono" variant="underlined"></v-text-field>
  <v-text-field v-model="cliente.user" label="Correo electronico" variant="underlined"></v-text-field>
     

  </v-form>
                    <v-text-field readonly @click='cancelar' v-bind="props" class='text-body-2 '  variant="underlined">
                    <div class='d-flex justify-space-between w-100 h-0'>
                      Añadir servicios ({{(servs.length-1)}})* <v-icon icon="mdi-plus" color='#169873'></v-icon>
                    </div>
                   </v-text-field>

                  </template>

                  <template v-slot:default="{ isActive }">
                  
                  <v-card title="Servicios" >
                    <v-card-text  v-for='serv in servicios' :key='serv.id'>
                      <div v-if='espacio2>=serv.duracion&&contador<=3&&activo[serv.id]'>
                      <div  class='d-flex justify-space-between align-center'>
                        {{serv.nombre}}
                        <div class='text-medium-emphasis d-flex align-center '>
                          ${{serv.precio}}
                           - {{serv.duracion}}min.
                           <v-checkbox @click='activo[serv.id]=!activo[serv.id]; contador+=1;servs.push(serv.id)'  v-model='servs' :value='serv.id' color='#169873' class='d-flex'></v-checkbox>
                        </div>
                      </div>
                      <v-divider class='mt-2'></v-divider>
                      </div>
                         <div v-else-if='!activo[serv.id]'>
                      <div  class=' d-flex justify-space-between align-center'>
                        {{serv.nombre}}
                        <div class=' d-flex align-center '>
                          ${{serv.precio}}
                           - {{serv.duracion}}min.
                           <v-checkbox  @click='activo[serv.id]=!activo[serv.id]; contador-=1;servs=servs.filter(item => item !== serv.id);bloque = bloque.subtractMinutes(serv.duracion);duracionAct=serv.duracion'  v-model='servs' :value='serv.id' color='#169873' class='d-flex'></v-checkbox>
                        </div>
                      </div>
                      <v-divider class='mt-2'></v-divider>
                      </div>
                      

                      <div v-else-if='espacio2<=serv.duracion||contador>3'>
                      <div  class='text-disabled d-flex justify-space-between align-center'>
                        {{serv.nombre}}
                        <div class='text-disabled d-flex align-center '>
                          ${{serv.precio}}
                           - {{serv.duracion}}min.
                           <v-checkbox  disabled v-model='servs' :value='serv.id' color='#169873' class='d-flex'></v-checkbox>
                        </div>
                      </div>
                      <v-divider class='mt-2'></v-divider>
                      </div>
                      
                      
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <boton
                        texto="Cancelar"  tamaño='small' class='w-25 mr-4'
                        @click="isActive.value = false" @botonClick='cancelar'
                      ></boton>
                      <boton
                        texto="Listo" tamaño='small' class='w-25 mr-2'
                        @click="isActive.value = false" @botonClick='actualizarCita'
                      ></boton>
                    </v-card-actions>
                  </v-card>
                </template>
                </v-dialog>



            </formulario>
            </v-col>
          
          </v-row>
           
         
          <v-row class="cuads">
            <v-col class='d-flex flex-wrap justify-end subcuads4' >
              
                <formulario  tipo='info'  class=' mb-7 w-100' titulo='Servicios:'>
                  <template v-slot:info >
                  <ul v-for='serv in servicios' :key='serv.id'>
                    <div v-for='(s,index) in servs' :key='index'>
                      <p v-if='serv.id == servs[index]' class='text-body-2 mb-1'>
                        {{serv.nombre}} (${{serv.precio}})
                      </p>
                    </div>
                  
                  </ul>
                  </template>
                </formulario>
                <boton @click="cancelar('cerrar')" texto='Cancelar' class='w-75 btn1'></boton>
            </v-col>
            <v-col class="subcuads2">
               
                <formulario  tipo='info' class='mb-7 w-100 '  titulo='Detalle:'>
                  <template v-slot:info>
                   <strong> Duracion aprox. </strong>{{cita.duracionTotal}} min.<br>
                   <strong> Costo aprox.</strong> ${{cita.costo}}<br>
                   <strong> Fecha:</strong> {{cita.fechaInicio}} - {{cita.fechaFin}}
                  </template>
          
                </formulario>
                
                <boton @click="verificar" texto='Listo' class='w-75 btn1'></boton>
              
              
                
            </v-col>
          </v-row>
          <v-row>
            <boton @click="cancelar('cerrar')" texto='Cancelar' class='btn'></boton>
            
            <boton @click="verificar" texto='Listo' class='btn'></boton>
              
               
          </v-row>

         
        </v-container>
        
        </formulario>  
        









        
        </v-overlay>




        <v-overlay 
    v-else-if='modocita=="editar"' scroll-strategy="none"
    persistent

    v-model="flotante"
          class="align-center justify-center "
        >
        <formulario style='overflow-y: auto; max-height: 90vh;'  tipo='info' class='w-100 h-100' v-if='modo==1'>
  
  <v-container class='pa-0 flotante3'>
  <v-row>
           <v-col>
             <formulario class='h-100 w-100 flotante' titulo='Detalle de la cita' tipo='sinboton'>
               <v-dialog width="550" persistent>
                
                 <template v-slot:activator="{  }">
                 
                  <v-form ref="form">
      <v-text-field readonly  v-model="cliente.nombre" label="Nombre del cliente" variant="underlined"></v-text-field>

   
  <v-row>
    <v-col>
      <v-text-field readonly v-model="cliente.apellido_paterno" label="Apellido Paterno" variant="underlined"></v-text-field>
     
    </v-col>
    <v-col>
      <v-text-field  readonly v-model="cliente.apellido_materno" label="Apellido Materno" variant="underlined"></v-text-field>
     
    </v-col>
  </v-row>
 
  <v-text-field readonly v-model="cliente.telefono" label="Numero de telefono" variant="underlined"></v-text-field>
  <v-text-field readonly v-model="cliente.user" label="Correo electronico" variant="underlined"></v-text-field>
    

  </v-form>              <!--@click='cancelar("editar")'-->
                  
                  <v-row class='mt-1 '>
                    <v-col cols='6'>
                      <boton @click='cancelar_cita(cita.id)' icon='mdi-table-cancel' clase='cancelar' texto='cancelar cita' tamaño='large'></boton>
                    </v-col>
                    <v-col cols='6'>
                      <boton @click='finalizar_cita(cita.id)'  icon='mdi-calendar-check' clase='finalizar' texto='finalizar cita' tamaño='large'></boton>
                    </v-col>
                  </v-row>
                 </template>

                 
               </v-dialog>



           </formulario>
           </v-col>
         
         </v-row>
          
        
         <v-row class="cuads">
           <v-col class='d-flex flex-wrap justify-end subcuads1' >
            
               <formulario  tipo='info'  class='mb-7 w-100 ' titulo='Servicios:'>
                 <template v-slot:info >
                 <ul v-for='serv in servicios' :key='serv.id'>
                   <div v-for='(s,index) in servs' :key='index'>
                     <p v-if='serv.id == servs[index]' class='text-body-2 mb-1'>
                       {{serv.nombre}} (${{serv.precio}})
                     </p>
                   </div>
                 
                 </ul>
                 </template>
               </formulario>
               <boton @click="cancelar('cerrar')" texto='Cancelar' class='w-75 btn1'></boton>
           </v-col>
           <v-col class="subcuads2">
              
            <formulario  tipo='info' class='mb-7 w-100 '  titulo='Detalle:'>
                  <template v-slot:info>
                   <strong> Duracion aprox. </strong>{{cita.duracionTotal}} min.<br>
                   <strong> Costo aprox.</strong> ${{cita.costo}}.00<br>
                   <strong> Fecha:</strong> {{cita.fechaInicio}} - {{cita.fechaFin}}
                  </template>
          
                </formulario>
                
               
               
                 <boton @click="crearEnviarCita" texto='Listo' class='w-75 btn1'></boton>
               
               
           </v-col>
         </v-row>
         <v-row>
          <boton @click="cancelar('cerrar')" texto='Cancelar' class='btn'></boton>
          
               
          <boton @click="crearEnviarCita" texto='Listo' class='btn'></boton>
               
               


         </v-row>
        
       </v-container>
       </formulario>  
        </v-overlay>
        
  </div>
</template>

<script setup>
import {PaginaStore} from '@/stores/PaginaStore.js'

const pagina = PaginaStore()

const {correo,usuarios,estadonav} = storeToRefs(pagina)

import rules from '@/validations/rules.js'
import {ref,computed} from 'vue'
import {CalendarioStore} from '@/stores/CalendariosStore.js'
import { storeToRefs } from 'pinia'
import boton from './BotonPagina.vue'
import formulario from './FormularioLayout.vue'

const cal = CalendarioStore()

const {preService,cliente,duracionAct,bloque,contador,espacio2,activo,espacio,servs, flotante,modo,servicios,cita,servCita} = storeToRefs(cal)
const {cancelar_cita,finalizar_cita,crearEnviarCita,cancelar,actualizarCita,crearSC,enviarCita} = cal

const props=defineProps({
  modocita:String
}
)

var error=ref(false)



const form = ref()
async function verificar(){
  const { valid } = await form.value.validate()
  
  if (valid){
    
    


crearEnviarCita()
  }
  
}


     var input1 = ref('')
var input2 = ref('')
var show1 = ref('')
var show2 = ref('')


</script>

<style scoped>
@media screen and (min-width: 427px){
.flotante1{
  height:95vh; width:33rem
}
.flotante2{
  height:113vh; width:33rem
}
.flotante3{
  height:109vh; width:33rem
}
.subcuads2{
 
 height: 100%;
}
.subcuads1{
 
 height: 20.2rem;
}
.subcuads4{
 
 height: 24.4rem;
}
.cuads{
  height: 100%;
}
}
@media screen and (max-width: 426px){
  .flotante1{
  height:93vh; width:90vw
}
.flotante2{
  height:122vh; width:90vw
}
.subcuads4{
 
 height: 30.4rem;
}
.flotante3{
  height:123vh; width:90vw
}
.subcuads2{
 
 height: 15.6rem;
}
}
@media screen and (min-width: 377px){
.subcuads{
  max-height: 100%;
  
}

.cuads{
  height: 56%;
}
.btn{
  display: none;
}

}
@media screen and (max-width: 376px){
  .flotante1{
  height:110vh; width:99vw
}
.flotante2{
  height:155vh; width:100vw
}
.subcuads1{
 max-height: 10rem;
}
.flotante3{
  height:136vh; width:100vw;
}
.btn{
  display: visible;
  width: 43%;
  margin-left: 1.2rem;
}
.btn1{
  display: none;
}
 .cuads{
  display: flex;
  flex-direction: column;
  height:25rem;
 }
 .subcuads{
  height: 11rem;
 }
}
@media screen and (max-width: 321px){
  .subcuads1{
 max-height: 11rem;
}
.flotante2{
  height:160vh; width:100vw
}
.flotante3{
  height:140vh; width:115vw;
}
.cuads{
  display: flex;
  flex-direction: column;
  height:27rem;
 }
}
</style>