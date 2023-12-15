<template>
  <div >
    <div class=' fondop' >


   
    <v-row class="d-flex h-100" >
      <v-col cols='12' class="Bar1" style='width:20rem'>
            <barralateral  :tipo='pestaña' titulo='CATALOGOS' ></barralateral>
        </v-col>

        <v-col cols='4'  class="Bar2 w-25">
            <barralateral  :tipo='pestaña' titulo='CATALOGOS' ></barralateral>
        </v-col>
        <v-col md-cols='8' xs-cols='12' style='width: 100vw;height: 100vh;' class="w-75 pa-6 ">
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
                            
                            <v-file-input v-model='editarimg'  label="Cambiar imagen" variant="underlined" accept="image/*"></v-file-input>
                            <v-row>
                                <v-col cols="6" class="columnas1">
                                    <v-text-field  prefix="$" :rules="[rules.requerido,rules.numero]" label="Precio" v-model="servicio.precio"  variant="underlined"></v-text-field>
                                </v-col>
                                <v-col cols="6" class="columnas1">
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
                                <v-col  cols="12" class="columnas2">
                                    <v-text-field  prefix="$" :rules="[rules.requerido,rules.numero]" label="Precio" v-model="servicio.precio"  variant="underlined"></v-text-field>
                                </v-col>
                                <v-col  cols="12" class="columnas2">
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
                            
                            <v-file-input v-model='editarimg'  label="Cambiar imagen" variant="underlined" accept="image/*"></v-file-input>
                           
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
                </v-expansion-panel> 
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
                        
                        <formulario @boton='actualizar_direccion()' @boton2='cancelar'  boton='dual' posicion='end' enviar='Guardar' class='w-100' titulo='Editar direccion'>
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
                </v-expansion-panel>-->
                <v-expansion-panel  value='3' class='barra '>
                    <v-expansion-panel-title>Añadir administrador</v-expansion-panel-title>
                    <v-expansion-panel-text class="pa-0">

                      <contServicios  v-if='modoadmin==1'  tipo='admins'></contServicios>
                    
                      <div v-if='modoadmin==2' >
                        <div style='overflow-y:scroll;height: 22rem;'>
                      <formulario tipo='sinboton' titulo='Registrar administrador' :param='correo'  >

                        <v-form ref="form7">
                            <v-text-field :rules="[rules.requerido,rules.max(usuario.nombre,30)]" v-model="usuario.nombre" label="Nombre/s*" variant="underlined"></v-text-field>

                          
                            <v-row >
                          <v-col>
                           <v-text-field  v-model="usuario.apellido_paterno" :rules='[rules.max(usuario.apellido_paterno,15)]' label="Apellido Paterno" variant="underlined" class="text2"></v-text-field>
                            
                          </v-col>
                          <v-col>
                            <v-text-field v-model="usuario.apellido_materno" :rules='[rules.max(usuario.apellido_materno,15)]' label="Apellido Materno" variant="underlined" class="text2"></v-text-field>
                            
                          </v-col>
                        </v-row>
                        <v-row class='mt-0'>
                          <v-col>
                            <v-text-field v-mask="'(00) 0000-000-000'" v-model="usuario.telefono" label="Numero de telefono" variant="underlined"></v-text-field>
                            
                          </v-col>
                          <v-col>
                            <v-text-field :rules="[rules.correo,rules.correoval(usuario.user,usuarios),rules.max(usuario.user,25)]" v-model="usuario.user" label="Correo electronico*" variant="underlined"></v-text-field>
                           
                          </v-col>
                        </v-row>

                      
                        
                          <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" hint="Ingresa al menos 8 caracteres" counter  @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" :rules="[rules.requerido,rules.min,rules.max(usuario.contrasena,25)]"   v-model="usuario.contrasena" label="Contraseña*" variant="underlined"></v-text-field>
                          <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" hint="Ingresa al menos 8 caracteres" counter  @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" :rules="[rules.requerido,rules.min,rules.max(confirmar,25)]"   v-model="confirmar" label="Confirmar contraseña*" variant="underlined"></v-text-field>

                        </v-form>
                        <v-alert
                          type="error"
                          variant='tonal'
                          text="Las contraseñas no coinciden"
                          v-model='error'
                        ></v-alert>
                        </formulario>
                      </div>
                      <v-row class='ma-0 mt-3 d-flex justify-center'>
                        <boton @click="cancelar" texto='Cancelar' class='btn'></boton>
                        
                        <boton @click="guardar7()" texto='registrar' class='btn ml-5'></boton>
                          
                          
                      </v-row>
                    </div>

                    <div v-if='modoadmin==3' >
                        
                      <formulario tipo='sinboton' titulo='Editar administrador' :param='correo'  >
                        <div style='height: 22rem;'>
                        <v-form ref="form6">
                            <v-text-field :rules='[rules.requerido,rules.max(usuario.nombre,30)]' v-model="usuario.nombre" label="Nombre/s*" variant="underlined"></v-text-field>

                          
                            <v-row >
                          <v-col>
                           <v-text-field  v-model="usuario.apellido_paterno" :rules='[rules.max(usuario.apellido_paterno,15)]' label="Apellido Paterno" variant="underlined" class="text2"></v-text-field>
                            
                          </v-col>
                          <v-col>
                            <v-text-field v-model="usuario.apellido_materno" :rules='[rules.max(usuario.apellido_materno,15)]' label="Apellido Materno" variant="underlined" class="text2"></v-text-field>
                            
                          </v-col>
                        </v-row>
                        <v-row class='mt-0'>
                          <v-col>
                            <v-text-field v-mask="'(00) 0000-000-000'" v-model="usuario.telefono" label="Numero de telefono" variant="underlined"></v-text-field>
                            
                          </v-col>
                          <v-col>
                            <v-text-field :rules="[rules.correo,rules.correoval2(usuario.user,usuarios),rules.max(usuario.user,25)]" v-model="usuario.user" label="Correo electronico*" variant="underlined"></v-text-field>
                           
                          </v-col>
                        </v-row>

                      
                        
                          <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" hint="Ingresa al menos 8 caracteres" counter  @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" :rules="[rules.requerido,rules.min,rules.max(usuario.contrasena,25)]"   v-model="usuario.contrasena" label="Contraseña*" variant="underlined"></v-text-field>
                          <v-row class='ma-0 mt-7 d-flex justify-center'>
                        <boton @click="cancelar" texto='Cancelar' class='btn'></boton>
                        
                        <boton @click="guardar6()" texto='Actualizar' class='btn ml-5'></boton>
                          
                          
                      </v-row>
                        </v-form>
                      </div>
                      
                        </formulario>
                      </div>
                   
                    
                    </v-expansion-panel-text>
                </v-expansion-panel>
               

            </v-expansion-panels>
        </v-col>
    </v-row>
  
</div>
<div style="height: 1rem;">

</div>
  </div>
</template>

<script setup>
import {ref,computed,onMounted} from 'vue'
import contServicios from '@/components/ContenedorServicios.vue'
import barralateral from '@/components/BarraLateral.vue'
import formulario from '@/components/FormularioLayout.vue'
import boton from '@/components/BotonPagina.vue'
import {AdministrarStore} from '@/stores/AdministrarStore.js'
import { storeToRefs } from 'pinia'
import rules from '@/validations/rules.js'
const admins = AdministrarStore()
let showalert = ref (false);
let alertmsg=ref('');
let alertcolor=ref('');

const showalertMessage = (message, color) => {
  alertmsg.value = message;
  alertcolor.value = color;
  showalert.value = true;
}


const {usuarios,usuario,modoadmin,editarimg,contactoTemp,contacto,servicio,id,modo,cServicios,servicios} = storeToRefs(admins)
const {submit, abrirAñadir,cancelar,actualizar,editar,recibirid,eliminar,añadir} = admins


var respaldo_dire = ''
var direccion=ref()
const rDireccion = async ()=>{
        try{
            const respuesta = await fetch('http://18.116.31.102/direccion');
            const data = await respuesta.json();
            direccion.value=data.data[0];
            respaldo_dire = direccion.value
            console.log(direccion.value)
        }catch{
    
        }
      }  
      rDireccion()
async function actualizar_direccion(){
        await fetch('http://18.116.31.102/direccion/actualizar', {
          method: 'POST',
          body: JSON.stringify(direccion.value),
      }).then(response => response.json())
          .then(responsej => {
              if (responsej.status != 200) {
                  return
              }
      
      
          });
          
}

async function cancelar_direccion(){
  
direccion.value=respaldo_dire
    
}



var error=ref(false)
var confirmar=ref('')

var show1 = ref('')
var show2 = ref('')
// consulta GET para mostrar usuarios

    
    var pestaña = ref([0])


    const form = ref()
    
    const form1 = ref()
    
    const form2 = ref()
    
    const form3 = ref()
    
    const form4= ref()

    const form5 = ref()

    const form6 = ref()

    const form7 =ref()
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
async function guardar6(){
  
  const { valid } = await form6.value.validate()
  
  if(!valid){
    return
  }
  else{
    actualizar(0,"admin");
  }
}

async function guardar7(){
  if (usuario.value.contrasena!=confirmar.value){
    error.value=true
      return
    }
  const { valid } = await form7.value.validate()
  
  if(!valid){
    return
  }
  else{
    submit()
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
    
    min-height: 100vh;
    width: 100vw;

    display: flex;
      align-items: stretch;
}

  
@media screen and (max-width: 670px) {

    .Bar2{
        display: none;
    }
}
@media screen and (min-width: 671px) {
    .Bar1{
        display: none;
    }
}

@media screen and (max-width: 430px){
    .columnas1{
        display: none;
    }
}
@media screen and (min-width: 430px) {
    .columnas2{
        display: none;
    }
    *{
  margin-right: 0;
}
}
  
</style>
