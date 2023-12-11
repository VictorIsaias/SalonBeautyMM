<script setup>
import {ref,onMounted} from 'vue';
import {storeToRefs} from 'pinia'
import {PaginaStore} from '@/stores/PaginaStore.js'


const pagina = PaginaStore()

const {ID} = storeToRefs(pagina)
const servicio_nomb = ref([])
  const servs_nom = async () => {
      try{
          const respuesta = await fetch('http://3.143.143.93/servicios_nombre');
          const data = await respuesta.json();
          servicio_nomb.value=data.data;
      }catch{

      }
  }
 
  var search= ref('')
  var page= ref(1)
onMounted(servs_nom);


import boton from '@/components/BotonPagina.vue'
const estado =[
  {tittle:'completo'},
  {tittle:'pendiente'},
  {tittle:'confirmado'},
  {tittle:'cancelado'}];

  let contador=ref(0)
const citas_admin =ref([]);
const citas_cliente =ref();


const respuesta = async () =>{

  try{
    const response = await fetch('http://3.143.143.93/registro_citas');
    const data = await response.json();
    citas_cliente.value=''
  citas_admin.value=[]
    citas_cliente.value=data.data;
 
  }catch{
  } 
  citas_cliente.value=citas_cliente.value.reverse()
  for(let i=0;i<=citas_cliente.value.length-1;i++){
    if(ID.value==citas_cliente.value[i].id_cliente){
      citas_admin.value.push(citas_cliente.value[i])
    }
  }
}


onMounted(respuesta);



async function cambiarEstado(est,idact){
let inst ={}
    inst = {
      id:idact,
      estado:'cancelado'
    }
    await fetch('http://3.143.143.93/registro_citas/actualizar', {
      method: 'POST',
      body: JSON.stringify(inst),
  }).then(response => response.json())
      .then(responsej => {
          if (responsej.status != 200) {
              return
          }
  
  
      })

  await respuesta()
}


</script>
<template>

  

  <div class="citas" style="height: 100vh;" >
    <v-container class='d-flex flex-column'>
  <v-card 
     class='elevation-3 text-body-1'>
    <v-data-iterator
      :items="citas_admin"
      items-per-page="6"
      :search="search"
    >
     

      <template v-slot:default="{  items }">
     
        <v-table 
     style='background-color:rgb(255, 237, 237);'
     height="100%"
     width='100%'
    >
    <thead>
      <tr>
    
        <th class="text-left">
          Servicios
        </th>
        <th class="text-left">
          Costo
        </th>
        <th class="text-left">
          Fecha
        </th>
        <th class="text-left">
          Creación
        </th>
        <th class="text-left">
          Estado
        </th>
        <th class="text-left ">
        
        </th>
        
        
      </tr>
    </thead>
    <tbody class="text-body-2">


      <tr 
        v-for="(item,index) in items"
        :key="index" 
      >
    
        <td class='pa-0 pl-1 pr-1' >
          <v-tooltip
          location="bottom center" origin="auto"
          no-click-animation
        >
          <template v-slot:activator="{ props }">
            <div v-bind="props" >Servicios</div>
          </template>

          <ul v-for='serv in servicio_nomb' :key='serv.id'>
            <div class='mt-1 ' style='font-size:0.8rem' v-if='serv.id_cita==item.raw.id'>
             
           <ol class='mb-2 '>  {{serv.nombre}}</ol>
           <v-divider ></v-divider>
          </div>
        </ul>
        </v-tooltip>
         
        </td>
        <td class='pa-0 pl-1 pr-1'>${{ item.raw.costo }}</td>
        <td class='pa-0 pl-1 pr-1'>{{ item.raw.fecha }} </td>
        <td class='pa-0 pl-1 pr-1'>{{ item.raw.fecha_de_creacion }}</td>
        <td class='pa-0 pl-1 pr-1'>
          <div style='color:#169873' v-if='item.raw.estado=="confirmado"'>
            Confirmada
          </div>
          <div style='color:#D59B43' v-if='item.raw.estado=="sin_confirmar"'>
            Sin confirmar
          </div>
          <div style='color:#BF1C2D' v-if='item.raw.estado=="cancelado"'>
            Cancelada
          </div>
          <div style='color:#788682' v-if='item.raw.estado=="completado"'>
            Terminada
          </div>
        </td>

        <td class='pa-0 pl-1 pr-1 ' >
          <div >
      
      <boton v-if='item.raw.estado!="cancelado"&&item.raw.estado!="completado"' @click='cambiarEstado("cancelar",item.raw.id)' tipo='solo' ><div  style='font-size:0.7rem; color:#BF1C2D' >CANCELAR</div></boton>
           
      
  </div>
        </td>
        
      
       
      </tr>
      
    </tbody>
     </v-table>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            icon="mdi-arrow-left"
            density="comfortable"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Pagina {{ page }} de {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            icon="mdi-arrow-right"
            density="comfortable"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
    
  </v-card>
</v-container>
  </div>










  
</template>
<style>
.citas{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top:30px;
}

th{
  
  border: 1px rgba(0, 0, 0, 0.085) solid;
  background-color:white;
}
td{
  height: 10px;
  width: 130px;
  border:.2px rgba(0, 0, 0, 0.148) solid;
  text-align: center;
  background-color:rgb(255, 237, 237);
}
.check{
  height: 10px;
  width: 100px;
  font-size: 5px;
}


@media screen and (min-width: 800px){
  .texto {
    display: flex;
    align-items:center;
    justify-content: end;
    width: 2rem;
  font-size:0.8rem;
}
.uno{
  max-width: 300px;
}
.citas{
  height: 100vh;
}
}
@media screen and (max-width: 800px){
  .texto {
    display: flex;
    align-items:center;
    justify-content: end;
    width: 2rem;
  font-size:0.8rem;
}
.uno{
  max-width: 300px;
}
.citas{
  height: 100%;
}
}

@media screen and (max-width: 450px){
  .texto{
  font-size:0.7rem;
  display: flex;
    align-items:end;
    justify-content: end;
}
.uno{
  max-width: 300px;
}
.citas{
  height: 100%;
}
}
@media screen and (max-width: 320px){
  .texto{
  font-size:0.7rem;
  display: flex;
    align-items:end;
    justify-content: end;
    width: 1rem;
    
}
.uno{
  max-width: 170px;
}
.citas{
  height: 100%;
}
}
</style>

