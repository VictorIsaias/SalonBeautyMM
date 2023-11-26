<template>
  <div>
    
    <v-overlay 
    v-if='modocita=="cliente"'
    v-model="flotante"
          class="align-center justify-center "
        >
        <formulario  tipo='info' class='w-100 h-100' v-if='modo==1'>
         <v-container class='pa-0 ' style="height:34rem; width:33rem">
          <v-row>
            <v-col>
              <formulario class='h-100 w-100 flotante' titulo='Crear cita' tipo='sinboton'>
                <v-dialog width="550" persistent>
                  <template v-slot:activator="{ props }">
                    
                    <v-text-field @click='cancelar' v-bind="props" class='text-body-2 '  variant="underlined">
                    <div class='d-flex justify-space-between w-100 h-0'>
                      Añadir servicios ({{(servs.length-1)}}) <v-icon icon="mdi-plus" color='#169873'></v-icon>
                    </div>
                   </v-text-field>

                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card title="Servicios" >
                      <v-card-text  v-for='serv in servicios' :key='serv.id'>
                        <div v-if='espacio>=serv.duracion'>
                        <div  class='d-flex justify-space-between align-center'>
                          {{serv.nombre}}
                          <div class='text-medium-emphasis d-flex align-center '>
                            ${{serv.precio}}.00
                             - {{serv.duracion}}min.
                             <v-checkbox  @click='activo[serv.id]=!activo[serv.id]' :disabled="!activo[serv.id]" v-model='servs' :value='serv.id' color='#169873' class='d-flex'></v-checkbox>
                          </div>
                        </div>
                        <v-divider class='mt-2'></v-divider>
                        </div>

                        <div v-else-if='espacio<=serv.duracion'>
                        <div  class='text-disabled d-flex justify-space-between align-center'>
                          {{serv.nombre}}
                          <div class='text-disabled d-flex align-center '>
                            ${{serv.precio}}.00
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
           
         
          <v-row style="height: 56%;">
            <v-col class='d-flex flex-wrap justify-end'>
              
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
                <boton @click="cancelar('cerrar')" texto='Cancelar' class='w-75'></boton>
            </v-col>
            <v-col>
               
                <formulario tipo='info' class='mb-7 w-100 h-100' titulo='Detalle:'>
                  <template v-slot:info>
                   <strong> Duracion total: </strong>{{cita.duracionTotal}} min.<br>
                   <strong> Precio total:</strong> ${{cita.costo}}.00<br>
                   <strong> Fecha:</strong> {{cita.fechaInicio}} - {{cita.fechaFin}}
                  </template>
          
                </formulario>
                
                
                  <boton @click="enviarCita" texto='Listo' class='w-75'></boton>
                
                
            </v-col>
          </v-row>
         
        </v-container>
        </formulario>  
        </v-overlay>


        <v-overlay 
    v-if='modocita=="cita"'
    v-model="flotante"
          class="align-center justify-center "
        >
        <formulario  tipo='info' class='w-100 h-100' v-if='modo==1'>
         <v-container class='pa-0 ' style="height:34rem; width:33rem">
          <v-row>
            <v-col>
              <formulario class='h-100 w-100 flotante' titulo='Crear citaa' tipo='sinboton'>
                <v-dialog width="550" persistent>
                  <template v-slot:activator="{ props }">
                    
                    <v-text-field @click='cancelar' v-bind="props" class='text-body-2 '  variant="underlined">
                    <div class='d-flex justify-space-between w-100 h-0'>
                      Añadir servicios ({{(servs.length-1)}}) <v-icon icon="mdi-plus" color='#169873'></v-icon>
                    </div>
                   </v-text-field>

                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card title="Servicios" >
                      <v-card-text  v-for='serv in servicios' :key='serv.id'>
                        <div v-if='espacio2>=serv.duracion'>
                        <div  class='d-flex justify-space-between align-center'>
                          {{serv.nombre}}
                          <div class='text-medium-emphasis d-flex align-center '>
                            ${{serv.precio}}.00
                             - {{serv.duracion}}min.
                             <v-checkbox  @click='activo[serv.id]=!activo[serv.id]' :disabled="!activo[serv.id]" v-model='servs' :value='serv.id' color='#169873' class='d-flex'></v-checkbox>
                          </div>
                        </div>
                        <v-divider class='mt-2'></v-divider>
                        </div>

                        <div v-else-if='espacio2<=serv.duracion'>
                        <div  class='text-disabled d-flex justify-space-between align-center'>
                          {{serv.nombre}}
                          <div class='text-disabled d-flex align-center '>
                              ${{serv.precio}}.00
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
                          @click="isActive.value= false" @botonClick='actualizarCita'
                        ></boton>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>



            </formulario>
            </v-col>
          
          </v-row>
           
         
          <v-row style="height: 56%;">
            <v-col class='d-flex flex-wrap justify-end'>
              
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
                <boton @click="cancelar('cerrar')" texto='Cancelar' class='w-75'></boton>
            </v-col>
            <v-col>
               
                <formulario tipo='info' class='mb-7 w-100 h-100' titulo='Detalle:'>
                  <template v-slot:info>
                   <strong> Duracion total: </strong>{{cita.duracionTotal}} min.<br>
                   <strong> Precio total:</strong> ${{cita.costo}}.00<br>
                   <strong> Fecha:</strong> {{cita.fechaInicio}} - {{cita.fechaFin}}
                  </template>
          
                </formulario>
                
                
                  <boton @click="enviarCita" texto='Listo' class='w-75'></boton>
                
                
            </v-col>
          </v-row>
         
        </v-container>
        </formulario>  
        </v-overlay>
        <v-overlay 
    v-else-if='modocita=="editar"'
    v-model="flotante"
          class="align-center justify-center "
        >
        <formulario  tipo='info' class='w-100 h-100' v-if='modo==1'>
         <v-container class='pa-0 ' style="height:34rem; width:33rem">
          <v-row>
            <v-col>
              <formulario class='h-100 w-100 flotante' titulo='Crear cita' tipo='sinboton'>
                <v-dialog width="550" persistent>
                  <template v-slot:activator="{ props }">
                    
                    <v-text-field @click='cancelar' v-bind="props" class='text-body-2 '  variant="underlined">
                    <div class='d-flex justify-space-between w-100 h-0'>
                      Añadir servicios ({{(servs.length-1)}}) <v-icon icon="mdi-plus" color='#169873'></v-icon>
                    </div>
                   </v-text-field>

                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card title="Servicios" >
                      <v-card-text  v-for='serv in servicios' :key='serv.id'>
                        <div v-if='espacio>=serv.duracion'>
                        <div  class='d-flex justify-space-between align-center'>
                          {{serv.nombre}}
                          <div class='text-medium-emphasis d-flex align-center '>
                            ${{serv.precio}}.00
                             - {{serv.duracion}}min.
                             <v-checkbox  @click='activo[serv.id]=!activo[serv.id]' :disabled="!activo[serv.id]" v-model='servs' :value='serv.id' color='#169873' class='d-flex'></v-checkbox>
                          </div>
                        </div>
                        <v-divider class='mt-2'></v-divider>
                        </div>

                        <div v-else-if='espacio<=serv.duracion'>
                        <div  class='text-disabled d-flex justify-space-between align-center'>
                          {{serv.nombre}}
                          <div class='text-disabled d-flex align-center '>
                            ${{serv.precio}}.00
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
           
         
          <v-row style="height: 56%;">
            <v-col class='d-flex flex-wrap justify-end'>
              
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
                <boton @click="cancelar('cerrar')" texto='Cancelar' class='w-75'></boton>
            </v-col>
            <v-col>
               
                <formulario tipo='info' class='mb-7 w-100 h-100' titulo='Detalle:'>
                  <template v-slot:info>
                   <strong> Duracion total: </strong>{{cita.duracionTotal}} min.<br>
                   <strong> Precio total:</strong> ${{cita.costo}}.00<br>
                   <strong> Fecha:</strong> {{cita.fechaInicio}} - {{cita.fechaFin}}
                  </template>
          
                </formulario>
                
                
                  <boton @click="enviarCita" texto='Listo' class='w-75'></boton>
                
                
            </v-col>
          </v-row>
         
        </v-container>
        </formulario>  
        </v-overlay>
        
  </div>
</template>

<script setup>

import {ref,computed} from 'vue'
import {CalendarioStore} from '../stores/CalendariosStore.js'
import { storeToRefs } from 'pinia'
import boton from './BotonPagina.vue'
import formulario from './FormularioLayout.vue'

const cal = CalendarioStore()

const {espacio2,activo,espacio,servs, flotante,modo,servicios,cita,servCita} = storeToRefs(cal)
const {cancelar,actualizarCita,crearSC,enviarCita} = cal

const props=defineProps({
  modocita:String
}
)
</script>

<style scoped>

</style>