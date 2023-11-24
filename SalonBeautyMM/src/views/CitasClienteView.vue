<script setup>
import {ref,onMounted} from 'vue';
import axios from 'axios';
const estado =[
  {tittle:'completo'},
  {tittle:'pendiente'},
  {tittle:'cancelado'}];

const citas_cliente =ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost/citas');
    citas_cliente.value = response.data.data;
    
  } catch (error) {
    console.log(error);
  }
};

function estados(){
  alert('funciono NYEEHEHEHJHEJ')
}

onMounted(fetchData);
</script>
<template>
  <div class="citas">
    <div>
      <v-btn @click="estados" class="boton">Buscar por estado</v-btn>
      <thead>
        <br>
        <tr>
          <th>Id</th>
          <th>Servicios</th>
          <th>Costo</th>
          <th>Fecha</th>
          <th>Fecha de creacion</th>
          <th>Estado</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="citas_cliente in citas_cliente" :key="citas_cliente.id">
          <td>{{ citas_cliente.id }}</td>
          <td>{{ citas_cliente.servicios }}</td>
          <td>{{ citas_cliente.costo }}</td>
          <td>{{ citas_cliente.fecha }}</td>
          <td>{{ citas_cliente.fecha_de_creacion }}</td>
          <td>{{ citas_cliente.estado }}</td>
          <td> 
            <button style="border:1px solid black; width: 110px; height: 30px; border-radius:5px; background-color:white;">Modificar cita</button>
          </td>
        </tr>
      </tbody>
    </div>
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
  border: 1px black solid;
  background-color:white;
}
td{
  height: 10px;
  width: 130px;
  border:.5px black solid;
  text-align: center;
  background-color:rgb(255, 237, 237);
}
.check{
  height: 10px;
  width: 100px;
  font-size: 5px;
}
</style>
