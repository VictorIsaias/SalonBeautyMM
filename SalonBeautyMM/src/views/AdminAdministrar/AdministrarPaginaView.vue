<template>
  <div class=' fondo'>
   

   
    <v-row class="d-flex h-100">
        <vue-col class="Bar1" style='width:20rem'>
            <barralateral  :tipo='pestaña' titulo='CATALOGOS' ></barralateral>
        </vue-col>

        <v-col cols="12" class="Bar2" style='width:20rem'>
            <barralateral  :tipo='pestaña' titulo='CATALOGOS' ></barralateral>
        </v-col>
        <v-col class="w-75 pa-6 ">
            <v-expansion-panels v-model='pestaña' variant="popout" multiple>
                <v-expansion-panel value='0' class='barra' >
                    <v-expansion-panel-title>Servicios</v-expansion-panel-title>
                    <v-expansion-panel-text style='height:auto'>
                        
                       
                        <formulario basura='false' @basura='eliminar' @boton='actualizar' @boton2='cancelar' v-if='modo==2'  boton='dual' posicion='end' enviar='Actualizar' class='w-100'  titulo='Editar servicio'>
                            <v-text-field :rules="[rules.requerido]" v-model="servicio.nombre" label="Nombre" variant="underlined"></v-text-field>
                            <v-textarea :rules="[rules.requerido]" variant="underlined" label="Descripcion" auto-grow v-model='servicio.descripcion'></v-textarea>
                            <v-file-input :rules="[rules.requerido]" label="Imagen" variant="underlined" accept="image/*"></v-file-input>
                            <v-row>
                                <v-col>
                                    <v-text-field  prefix="$" :rules="[rules.requerido]" label="Precio" v-model="servicio.precio"  variant="underlined"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-combobox label="Duracion" variant="underlined" :items="['30min', '1hr', '1hr 30min', '2hr', '2hr 30min', '3hr','3hr 30min','4hr','4hr 30min','5hr']"></v-combobox>
                                </v-col>
                            </v-row>
                            <v-checkbox v-model="servicio.activo"  label="Activo en la pagina" color="#169873" hide-details></v-checkbox>            
                        </formulario>
                    

                        <formulario @boton='añadir' @boton2='cancelar' v-if='modo==3'  boton='dual' posicion='end' enviar='Guardar' class='w-100' titulo='Añadir servicio'>
                            <v-text-field :rules="[rules.requerido]" v-model="servicio.nombre" label="Nombre" variant="underlined"></v-text-field>
                            <v-textarea :rules="[rules.requerido]" variant="underlined" label="Descripcion" auto-grow v-model='servicio.descripcion'></v-textarea>
                            <v-file-input :rules="[rules.requerido]" label="Imagen" variant="underlined" accept="image/*"></v-file-input>
                            <v-row>
                               
                                <v-col cols="6" class="columnas1">
                                    <v-text-field  prefix="$" :rules="[rules.requerido]" label="Precio" v-model="servicio.precio"  variant="underlined"></v-text-field>
                                </v-col>
                                <v-col cols="6" class="columnas1">
                                    <v-combobox label="Duracion" variant="underlined" :items="['30min', '1hr', '1hr 30min', '2hr', '2hr 30min', '3hr','3hr 30min','4hr','4hr 30min','5hr']"></v-combobox>
                                </v-col>
                               

                               
                                <v-col cols="12" class="columnas2">
                                    <v-text-field  prefix="$" :rules="[rules.requerido]" label="Precio" v-model="servicio.precio"  variant="underlined"></v-text-field>
                                </v-col>
                                <v-col cols="12" class="columnas2">
                                    <v-combobox label="Duracion" variant="underlined" :items="['30min', '1hr', '1hr 30min', '2hr', '2hr 30min', '3hr','3hr 30min','4hr','4hr 30min','5hr']"></v-combobox>
                                </v-col>
                               
                            </v-row>
                            <v-checkbox v-model="servicio.activo"  label="Activo en la pagina" color="#169873" hide-details></v-checkbox>            
                        </formulario>


                        <formulario @boton='añadir("catalogo")' @boton2='cancelar' v-if='modo==4'  boton='dual' posicion='end' enviar='Guardar' class='w-100' titulo='Añadir catalogo'>
                            <v-text-field :rules="[rules.requerido]" v-model="servicio.nombre" label="Nombre" variant="underlined"></v-text-field>
                            <v-textarea :rules="[rules.requerido]" variant="underlined" label="Descripcion" auto-grow v-model='servicio.descripcion'></v-textarea>
                            <v-file-input :rules="[rules.requerido]" label="Imagen" variant="underlined" accept="image/*"></v-file-input>
                          
                            <v-checkbox v-model="servicio.activo"  label="Activo en la pagina" color="#169873" hide-details></v-checkbox>            
                        </formulario>

                        <formulario basura='false' @basura='eliminar' @boton='actualizar(0,"param")' @boton2='cancelar' v-if='modo==5'  boton='dual' posicion='end' enviar='Actualizar' class='w-100'  titulo='Editar catalogo'>
                            <v-text-field :rules="[rules.requerido]" v-model="servicio.nombre" label="Nombre" variant="underlined"></v-text-field>
                            <v-textarea :rules="[rules.requerido]" variant="underlined" label="Descripcion" auto-grow v-model='servicio.descripcion'></v-textarea>
                            <v-file-input :rules="[rules.requerido]"  label="Imagen" variant="underlined" accept="image/*"></v-file-input>
                           
                            <v-checkbox v-model="servicio.activo"  label="Activo en la pagina" color="#169873" hide-details></v-checkbox>            
                        </formulario>                                                




                        <formulario @boton="actualizar(0, 'param')" @boton2="cancelar" v-if="modo === 2" boton="dual" posicion="end" enviar="Actualizar" class="w-100" titulo="Editar usuario">
                         <v-text-field :rules="[rules.requerido]" v-model="servicio.nombre" label="Nombre" variant="underlined"></v-text-field>
                         <v-textarea :rules="[rules.requerido]" variant="underlined" label="Descripción" auto-grow v-model="servicio.descripcion"></v-textarea>
                          <v-checkbox v-model="servicio.activo" label="Activo en la página" color="#169873" hide-details></v-checkbox>
                        </formulario>

                        


                        <contServicios  v-if='modo==1' :idcatalogo='id' :catalogo='servicios'></contServicios>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel value='1' class='barra'>
                    <v-expansion-panel-title>Horarios</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel value='2' class='barra'>
                    <v-expansion-panel-title>Contacto</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel value='3' class='barra'>
                    <v-expansion-panel-title>Direccion</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel value='4' class='barra'>
                    <v-expansion-panel-title>Otros</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                    </v-expansion-panel-text>
                </v-expansion-panel>
                

            </v-expansion-panels>
        </v-col>
    </v-row>

  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import contServicios from '@/components/ContenedorServicios.vue'
import barralateral from '@/components/BarraLateral.vue'
import formulario from '@/components/FormularioLayout.vue'
import {AdministrarStore} from '@/stores/AdministrarStore.js'
import { storeToRefs } from 'pinia'

const admins = AdministrarStore()

const {servicio,id,modo,cServicios,servicios} = storeToRefs(admins)
const { abrirAñadir,cancelar,actualizar,editar,recibirid,eliminar,añadir} = admins


const rules = {
      requerido: value => !!value || 'Todos los campos son necesarios'
    }

    
    var pestaña = ref(0)




</script>

<style scoped>

.barra{
    background: #ffedf7;
  background-blend-mode: normal;
  backdrop-filter: blur(29px);
}
.fondo{
    height: 100vh;
    width: 100vw;
    background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
    padding: 0;
    margin: 0;
 
}
  
@media screen and (max-width: 770px) {
    .Bar1{
        display: none;
    }
}
@media screen and (min-width: 770px) {
    .Bar2{
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
}
</style>