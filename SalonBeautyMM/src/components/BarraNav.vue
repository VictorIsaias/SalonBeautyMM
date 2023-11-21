<script setup>


import { storeToRefs } from 'pinia'
import {ref,computed} from 'vue'
import {PaginaStore} from '../stores/PaginaStore.js'

const pagina = PaginaStore()

const {estadonav} = storeToRefs(pagina)



const servicios =[
  {title: 'Corte cabello' },
  {title: 'Pintura de cabello'},
  {title: 'Pintura de uñas'}]

  const Administrar =[
  {title: 'Catalogo' },
  {title: 'Direccion'},
  {title: 'Contacto'}]

  const perfil = [
    {title: 'Configurar perfil'},
    {title: 'Contacto'},
    {title: 'Cerrar sesion'}]

    function handelservicios (){
      alert('funciona')
    }
    function handelperfil() {
      alert('tambien funciona')
    }
</script>

<template>
  <div class='w-100'>
    

    <div class="barra pb-1 pl-2 pr-2 elevation-3" v-show='estadonav==0'>
       <div class="item1"><RouterLink :to="{name:'inicio'}"><img class="iconos logo" src="/src/assets/img/logo.png" alt=""></RouterLink></div>
        <div></div>
       <div class="item2">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button class="button" v-bind="props">SERVICIOS</button>
          </template>
          <v-list>
            <v-list-item @click="handelservicios" v-for="(servicios, index) in servicios" :key="index">
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);">{{ servicios.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
  
      <div class="item4">
        <RouterLink class="rutas" :to="{name:'iniciar'}"><button class="button">INICIAR SESION</button></RouterLink>
        </div>
        <div></div>
      <div class="item6">
        <RouterLink class="rutas" :to="{name:'iniciar'}">
            <buttom class="button" v-bind="props"><img class="iconos" src="/src/assets/img/perfil.png" alt=""></buttom>
        </RouterLink>
      </div>
    </div>
    





    <div class=" barra pb-1 pl-2 pr-2 elevation-3" v-show='estadonav==1'>
       <div class="item1"><RouterLink :to="{name:'inicio'}"><img class="iconos logo" src="/src/assets/img/logo.png" alt=""></RouterLink></div>
       
      <div class="item2">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button class="button" v-bind="props">SERVICIOS</button>
          </template>
          <v-list>
            <v-list-item @click="handelservicios" v-for="(servicios, index) in servicios" :key="index">
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);">{{ servicios.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="item3">
        <RouterLink class="rutas" :to="{name:'citas_cliente'}"><button class="button">VER CITAS</button></RouterLink>
      </div>
      <div class="item4">
        <RouterLink class="rutas" :to="{name:'crear_cita',params:{idserv:0,serv:'none'}}"><button class="button">NUEVA CITA</button></RouterLink>
        </div>
      <div class="item6 d-flex">
        <div class="item5 pr-5"><img class="iconos noti" src="/src/assets/img/noti.png" alt=""></div>
      
        <v-menu>
          <template v-slot:activator="{ props }">
            <buttom class="button" v-bind="props"><img class="iconos" src="/src/assets/img/perfil.png" alt=""></buttom>
          </template>
          <v-list>
            <v-list-item @click="handelperfil" v-for="(perfil, index) in perfil" :key="index">
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);">{{ perfil.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    





    <div class=" barra pb-1 pl-2 pr-2 elevation-3" v-show='estadonav==2'>
       <div class="item1"><RouterLink :to="{name:'inicio'}"><img class="iconos logo" src="/src/assets/img/logo.png" alt=""></RouterLink></div>
       
      <div class="item2">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button class="button" v-bind="props">ADMINISTRAR</button>
          </template>
          <v-list>
            <v-list-item @click="handelservicios" v-for="(admin, index) in Administrar" :key="index">
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);">{{ admin.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="item3">
        <RouterLink class="rutas" :to="{name:'citas_cliente'}"><button class="button">VER CITAS</button></RouterLink>
      </div>
      <div class="item4">
        <RouterLink class="rutas" :to="{name:'crear_cita',params:{idserv:0,serv:'none'}}"><button class="button">CALENDARIO</button></RouterLink>
        </div>
      <div class="item6 d-flex">
        <div class="item5 pr-5"><img class="iconos noti" src="/src/assets/img/noti.png" alt=""></div>
      
        <v-menu>
          <template v-slot:activator="{ props }">
            <buttom class="button" v-bind="props"><img class="iconos" src="/src/assets/img/perfil.png" alt=""></buttom>
          </template>
          <v-list>
            <v-list-item @click="handelperfil" v-for="(perfil, index) in perfil" :key="index">
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);">{{ perfil.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>


  </div>
</template>

<style scoped>
.rutas{
  color:black;
  text-decoration:none;
}

.flex-barra{

  height: 60px;
  width: 100%;
  background-color: 0,0,0,0;
  line-height: 60px;
  
  
}

.barra{
  display:flex;
  align-items:center;
  justify-content:space-between;
   
}
.button{
  border:none;

  text-decoration: none;;
}
.button:hover{
  border-bottom:5px solid pink;
  height: 50px;
}
.iconos{
  height: 31px;
  height: 31px;
  margin-top: 15px;
}
.noti{
  margin-top:10px;
  height: 39px;
  width: 39px;
}
.logo{
  margin-left: 25px;
  height: 40px;
  width: 50px;
  margin-top:10px;
}
.item1{
  flex-grow: 2;
}

.item4{
  flex-grow: 2;
}
.item2{
  flex-grow: 1;
}
.item3{
  flex-grow: 1;
}


</style>
