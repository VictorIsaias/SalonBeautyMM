<script setup>
import {ref,onMounted} from 'vue';
const estado =[
  {tittle:'completo'},
  {tittle:'pendiente'},
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
</script>
<template>
  <div class="citas">
    <div>
      <v-btn @click="estados" class="boton">Buscar por estado</v-btn>
      <thead>
        <br>
        <tr>
          <th>Servicio</th>
          <th>Cliente</th>
          <th>Costo</th>
          <th>Duracion_min</th>
          <th>Fecha de creacion</th>
          <th>Estado</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cita in citas_cliente" :key="cita.id">
          <td>{{ cita.Servicio }}</td>
          <td>{{ cita.Cliente }}</td>
          <td>{{ cita.precio }}</td>
          <td>{{ cita.duracion_min }}</td>
          <td>{{ cita.fecha_hora }}</td>
          <td>{{ cita.estado }}</td>
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
