<template>
  <div class=' fondop' style='height:130vh'>
   

   
    <vue-row class="d-flex h-100">
        <vue-col style='width:22rem'>
            <barralateral  :tipo='pestaña' titulo='CATALOGOS' >

            </barralateral>
        </vue-col>
        <vue-col class="w-75 pa-6 ">
            <v-expansion-panels v-model='pestaña' variant="popout" >
                <v-expansion-panel value='0' class='barra' >
                    <v-expansion-panel-title>Servicios</v-expansion-panel-title>
                    <v-expansion-panel-text style='height:auto'>
                        
                       
                        <formulario basura='false' @basura='eliminar' @boton='guardar1()' @boton2='cancelar' v-if='modo==2'  boton='dual' posicion='end' enviar='Actualizar' class='w-100'  titulo='Editar servicio'>
                            <v-form @submit.prevent ref='form1'>
                            
                            <v-text-field :rules="[rules.requerido]" v-model="servicio.nombre" label="Nombre" variant="underlined"></v-text-field>
                            <v-textarea :rules="[rules.requerido]" variant="underlined" label="Descripcion" auto-grow v-model='servicio.descripcion'></v-textarea>
                            
                            <v-card >
                              <v-img :src="servicio.img" cover class='h-100' width="220" :aspect-ratio="1"></v-img>
                
                            </v-card>
                            
                            <v-file-input v-model='editarimg' :rules="[rules.requerido]" label="Cambiar imagen" variant="underlined" accept="image/*"></v-file-input>
                            <v-row>
                                <v-col>
                                    <v-text-field  prefix="$" :rules="[rules.requerido,rules.numero]" label="Precio" v-model="servicio.precio"  variant="underlined"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-select  :rules="[rules.requerido,rules.treinta]"  v-model="servicio.duracion_min" label="Duracion" variant="underlined" :items="[30,60,90,120,150,180,210,240,270,300,330,360,390,420]"></v-select>
                                </v-col>
                            </v-row>
                            <v-checkbox v-model="servicio.activo"  label="Activo en la pagina" color="#169873" hide-details></v-checkbox>            
                            </v-form>
                        </formulario>
                    

                        <formulario @boton='guardar2()' @boton2='cancelar' v-if='modo==3'  boton='dual' posicion='end' enviar='Guardar' class='w-100' titulo='Añadir servicio'>
                            <v-form  @submit.prevent ref='form2'>
                            
                            <v-text-field :rules="[rules.requerido]" v-model="servicio.nombre" label="Nombre" variant="underlined"></v-text-field>
                            <v-textarea :rules="[rules.requerido]" variant="underlined" label="Descripcion" auto-grow v-model='servicio.descripcion'></v-textarea>
                            <v-file-input name='img' v-model='servicio.img' :rules="[rules.requerido]" label="Imagen" variant="underlined" accept="image/*"></v-file-input>
                            <v-row>
                                <v-col>
                                    <v-text-field  prefix="$" :rules="[rules.requerido,rules.numero]" label="Precio" v-model="servicio.precio"  variant="underlined"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-select :rules="[rules.requerido,rules.treinta,rules.numero]" v-model="servicio.duracion_min" label="Duracion" variant="underlined" :items="[30,60,90,120,150,180,210,240,270,300,330,360,390,420]"></v-select>
                                </v-col>
                            </v-row>
                            <v-checkbox v-model="servicio.activo"  label="Activo en la pagina" color="#169873" hide-details></v-checkbox>            
                            </v-form>
                        </formulario>


                        <formulario @boton='guardar3()' @boton2='cancelar' v-if='modo==4'  boton='dual' posicion='end' enviar='Guardar' class='w-100' titulo='Añadir catalogo'>
                            <v-form @submit.prevent ref='form3'>
                            
                            <v-text-field :rules="[rules.requerido]" v-model="servicio.nombre" label="Nombre" variant="underlined"></v-text-field>
                            <v-textarea :rules="[rules.requerido]" variant="underlined" label="Descripcion" auto-grow v-model='servicio.descripcion'></v-textarea>
                            <v-file-input v-model='servicio.img' :rules="[rules.requerido]" label="Imagen" variant="underlined" accept="image/*"></v-file-input>
                          
                            <v-checkbox v-model="servicio.activo"  label="Activo en la pagina" color="#169873" hide-details></v-checkbox>            
                            </v-form>
                        </formulario>

                        <formulario basura='false' @basura='eliminar' @boton='guardar4()' @boton2='cancelar' v-if='modo==5'  boton='dual' posicion='end' enviar='Actualizar' class='w-100'  titulo='Editar catalogo'>
                            <v-form @submit.prevent ref='form4'>
                            
                            <v-text-field :rules="[rules.requerido]" v-model="servicio.nombre" label="Nombre" variant="underlined"></v-text-field>
                            <v-textarea :rules="[rules.requerido]" variant="underlined" label="Descripcion" auto-grow v-model='servicio.descripcion'></v-textarea>
                            <v-card >
                              <v-img :src="servicio.img" cover class='h-100' width="220" :aspect-ratio="1"></v-img>
                
                            </v-card>
                            
                            <v-file-input v-model='editarimg' :rules="[rules.requerido]" label="Cambiar imagen" variant="underlined" accept="image/*"></v-file-input>
                           
                            <v-checkbox v-model="servicio.activo"  label="Activo en la pagina" color="#169873" hide-details></v-checkbox>            
                            </v-form>
                        </formulario>                                                

                        <contServicios  v-if='modo==1' :idcatalogo='id' :catalogo='servicios'></contServicios>
                    </v-expansion-panel-text>
                </v-expansion-panel>
             <!--   <v-expansion-panel value='1' class='barra'>
                    <v-expansion-panel-title>Horarios</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                    </v-expansion-panel-text>
                </v-expansion-panel> -->
                <v-expansion-panel value='1' class='barra'>
                    <v-expansion-panel-title>Contacto</v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <formulario  @boton='guardar5()' @boton2='cancelar'  boton='dual' posicion='end' enviar='Guardar' class='w-100' titulo='Editar tipos de contacto'>
                            <v-form style='max-height:25rem' @submit.prevent ref='form'>
                           <v-row class='d-flex align-center'>
                            <v-text-field cols='10' :rules="[rules.requerido]" v-model="contactoTemp.valor" :label="'Agregar'+contactoTemp.nombre" variant="underlined"></v-text-field>
                           <boton class='pl-10' cols='2' tipo='solo'>
                            <v-icon color='#169873'  icon='mdi-account-plus'></v-icon>
                           </boton>
                               <v-divider></v-divider>
                           </v-row>
                               
                            <v-row  v-for='(item,index) in contacto' :key='index' class='d-flex align-center'>
                          
                                    <v-text-field cols='4' :rules="[rules.requerido]" v-model="contacto[index]"  variant="underlined"></v-text-field>
                                    <boton clase='cancelar' class='pl-10' cols='2' tamaño='small' texto='Eliminar'></boton>
                                    <v-spacer cols='6'></v-spacer>
                            </v-row>
                            </v-form>
                       </formulario>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel value='2' class='barra'>
                    <v-expansion-panel-title>Direccion</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                        <formulario @boton='guardar()' @boton2='cancelar'  boton='dual' posicion='end' enviar='Guardar' class='w-100' titulo='Editar direccion'>
                            <v-form @submit.prevent ref='form'>
                            <v-text-field :rules="[rules.requerido]" v-model="direccion.localidad" label="Localidad" variant="underlined"></v-text-field>
                            <v-text-field :rules="[rules.requerido]" label="Colonia" v-model="direccion.colonia"  variant="underlined"></v-text-field>
                           
                            <v-row >
                                <v-col>
                                    <v-text-field :rules="[rules.requerido]" label="Calle" v-model="direccion.calle"  variant="underlined"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field  :rules="[rules.requerido]" label="Num. Exterior" v-model="direccion.num_ext"  variant="underlined"></v-text-field>
                                 </v-col>
                            </v-row>
                            </v-form>
                       </formulario>
                    </v-expansion-panel-text>
                </v-expansion-panel>
               

            </v-expansion-panels>
        </vue-col>
    </vue-row>

  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import contServicios from '@/components/ContenedorServicios.vue'
import barralateral from '@/components/BarraLateral.vue'
import formulario from '@/components/FormularioLayout.vue'
import boton from '@/components/BotonPagina.vue'
import {AdministrarStore} from '@/stores/AdministrarStore.js'
import { storeToRefs } from 'pinia'
import rules from '@/validations/rules.js'
const admins = AdministrarStore()

const {editarimg,contactoTemp,contacto,direccion,servicio,id,modo,cServicios,servicios} = storeToRefs(admins)
const { abrirAñadir,cancelar,actualizar,editar,recibirid,eliminar,añadir} = admins



    
    var pestaña = ref([0])


    const form = ref()
    
    const form1 = ref()
    
    const form2 = ref()
    
    const form3 = ref()
    
    const form4= ref()
async function guardar(){
  
  const { valid } = await form.value.validate()
  
  if(!valid){
    return
  }
  else{
  }
}
async function guardar1(){
  
  const { valid } = await form1.value.validate()
  
  if(!valid){
    return
  }
  else{
    actualizar();
  }
}
async function guardar2(){
  
  const { valid } = await form2.value.validate()
  
  if(!valid){
    return
  }
  else{
    añadir()
  }
}
async function guardar3(){
  
  const { valid } = await form3.value.validate()
  
  if(!valid){
    return
  }
  else{
    añadir("catalogo");
  }
}
async function guardar4(){
  
  const { valid } = await form4.value.validate()
  
  if(!valid){
    return
  }
  else{
    actualizar(0,"param");
  }
}

</script>

<style scoped>

.barra{
    background: #ffedf7;
  background-blend-mode: normal;
  backdrop-filter: blur(29px);
}
.fondop{
 
    width: 100vw;
     padding: 0;
    margin: 0;
 
}
  
</style>