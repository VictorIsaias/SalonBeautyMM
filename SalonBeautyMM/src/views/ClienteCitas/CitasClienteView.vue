<script setup>
import {ref,onMounted} from 'vue';
import boton from '@/components/BotonPagina.vue'
const estado =[
  {tittle:'completo'},
  {tittle:'pendiente'},
  {tittle:'confirmado'},
  {tittle:'cancelado'}];

const citas_cliente =ref([]);

const respuesta = async () =>{
  try{
    const response = await fetch('http://localhost/servicio_cita');
    const data = await response.json();
    citas_cliente.value=data.data;
  }catch{

  }
}
onMounted(respuesta);

function estados(){

}

function editarEstado(id){
alert(id)
}

</script>
<template>
  <div class="citas">
    <v-container class='d-flex flex-column'>
      <boton texto='Buscar por estado' @click="estados" class="boton mb-2"></boton>
      
     <v-table 
     style='background-color:rgb(255, 237, 237);'
     height="35rem"
     class='elevation-3'
     item-value="Cliente"
    @update:options="loadItems">
    <thead>
      <tr>
        <th class="text-left">
          ID
        </th>
        <th class="text-left">
          Cliente
        </th>
        <th class="text-left">
          Servicio
        </th>
        <th class="text-left">
          Costo
        </th>
        <th class="text-left">
          Duración
        </th>
        <th class="text-left">
          Fecha
        </th>
        <th class="text-left">
          Estado
        </th>
        <th class="text-left">
        
        </th>
        
        
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in citas_cliente"
        :key="item.name"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.Cliente }}</td>
        <td>{{ item.Servicio }}</td>
        <td>${{ item.precio }}.00</td>
        <td>{{ item.duracion_min }} min.</td>
        <td>{{ item.fecha_hora }}</td>
        <td>{{ item.estado }}</td>

        <td><boton tipo='solo' @Click='editarEstado(item.id)' color='#169873'>Editar</boton></td>
      </tr>
    </tbody>
     </v-table>
    </v-container>
  </div>
</template>
<style>
.citas{
  background-color:rgb(255, 218, 225);
  height: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top:30px;
}
.citas .boton{
  margin-left:570px;
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
</style>
