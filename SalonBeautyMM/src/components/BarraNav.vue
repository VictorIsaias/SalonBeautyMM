<script setup>


import { storeToRefs } from 'pinia'
import {ref,computed} from 'vue'
import {PaginaStore} from '@/stores/PaginaStore.js'
import {ServiciosStore} from '@/stores/ServiciosStore.js'


function cambiar(){
switch(estadonav.value){
  case 0:
    estadonav.value=1
    break
    case 1:
    estadonav.value=2
    break
    case 2:
    estadonav.value=0
    break
}

}


const pagina = PaginaStore()
const servs = ServiciosStore()

const {estadonav} = storeToRefs(pagina)
const {servicios,cServicios} = storeToRefs(servs)

     var menu= ref(false)
     var message= ref(false)
     var hints= ref(true)


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
    

    <div class="barra pb-1 pl-2 pr-2 elevation-3 text-button" v-show='estadonav==0'>
       <div class="item1"><RouterLink :to="{name:'inicio'}"><img class="iconos logo" src="/img/logo.png" alt=""></RouterLink></div>
        <div></div>
        <div class="item2 ">
        <v-menu 
      :close-on-content-click="false"
      location="center"
    >
      <template v-slot:activator="{ props }">
        <div class="item2">
        <button  v-bind='props' class="button">SERVICIOS</button>
      </div>
      </template>

      <v-card class='pa-5 d-flex flex-wrap ' style='width:80vw;min-height: 20rem;position: relative; top:3.5rem;'>
        <v-card class='flex-grow-1 w-25 elevation-0' v-for='(cat,index) in cServicios' :key='index'
           color='' >
           <v-card-title  style='color:#169873'>
            <router-link @click='menu=false' style="text-decoration: none; color: inherit;" :to='{name:"sub-servicios",params:{idcat:cat.id,cat:cat.nombre}}'>{{cat.nombre}}</router-link>
            </v-card-title>
           <div class='pl-6 pr-3 pt-1' style='min-height:10rem'>

            
              <div class='ma-0 ' 
              v-for='(serv,index) in servicios' :key='index'>
                  
                  <div class='pb-3' v-if='serv.categoria==cat.id'>
                    <router-link  @click='menu=false' style="text-decoration: none; color: inherit;" :to='{name:"detalles",params:{idserv:serv.id,serv:serv.nombre}}'>
                       {{serv.nombre}}
                    </router-link>
                  </div>
                  
              </div>
            </div>
        </v-card >

      
      </v-card>
    </v-menu>
      </div>
  
      <div class="item4">
        <RouterLink class="rutas" :to="{name:'iniciar'}"><button class="button">INICIAR SESION</button></RouterLink>
        </div>
        <div></div>
      <div  @click='cambiar' class="item6">
        <RouterLink  class="rutas" :to="{name:'iniciar'}">
            <buttom class="button" v-bind="props"><img class="iconos" src="/img/perfil.png" alt=""></buttom>
        </RouterLink>
      </div>
    </div>
    




    <div class=" barra pb-1 pl-2 pr-2 elevation-3 text-button" v-show='estadonav==1'>
       <div class="item1"><RouterLink :to="{name:'inicio'}"><img class="iconos logo" src="/img/logo.png" alt=""></RouterLink></div>
       
      <div class="item2 ">
        <v-menu 
      v-model="menu"
      :close-on-content-click="false"
      location="center"
    >
      <template v-slot:activator="{ props }">
        <div class="item2">
        <button  v-bind='props' class="button">SERVICIOS</button>
      </div>
      </template>

      <v-card class='pa-5 d-flex flex-wrap ' style='width:80vw;min-height: 20rem;position: relative; top:3.5rem;'>
        <v-card class='flex-grow-1 w-25 elevation-0' v-for='(cat,index) in cServicios' :key='index'
           color='' >
           <v-card-title  style='color:#169873'>
            <router-link @click='menu=false' style="text-decoration: none; color: inherit;" :to='{name:"sub-servicios",params:{idcat:cat.id,cat:cat.nombre}}'>{{cat.nombre}}</router-link>
            </v-card-title>
           <div class='pl-6 pr-3 pt-1' style='min-height:10rem'>

            
              <div class='ma-0 ' 
              v-for='(serv,index) in servicios' :key='index'>
                  
                  <div class='pb-3' v-if='serv.categoria==cat.id'>
                    <router-link  @click='menu=false' style="text-decoration: none; color: inherit;" :to='{name:"detalles",params:{idserv:serv.id,serv:serv.nombre}}'>
                       {{serv.nombre}}
                    </router-link>
                  </div>
                  
              </div>
            </div>
        </v-card >

      
      </v-card>
    </v-menu>
      </div>
      <div class="item3">
        <RouterLink class="rutas" :to="{name:'citas_cliente'}"><button class="button">VER CITAS</button></RouterLink>
      </div>
      <div class="item4">
        <RouterLink class="rutas" :to="{name:'crear_cita',params:{idserv:0,serv:'none'}}"><button class="button">NUEVA CITA</button></RouterLink>
        </div>
      <div class="item6 d-flex">
        <div @click='cambiar' class="item5 pr-5"><img class="iconos noti" src="/img/noti.png" alt=""></div>
      
        <v-menu>
          <template v-slot:activator="{ props }">
            <buttom class="button" v-bind="props"><img class="iconos" src="/img/perfil.png" alt=""></buttom>
          </template>
          <v-list>
            <v-list-item >
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);"><router-link :to='{name:"perfil"}'>Configuracion</router-link></v-list-item-title>
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);"><router-link :to='{name:"contacto"}'>Contacto</router-link></v-list-item-title>
             <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);">Cerrar sesion</v-list-item-title>
             </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    





    <div class=" barra pb-1 pl-2 pr-2 elevation-3 text-button" v-show='estadonav==2'>
       <div class="item1"><RouterLink :to="{name:'inicio'}"><img class="iconos logo" src="/img/logo.png" alt=""></RouterLink></div>
       
      <div class="item2">
            <RouterLink class="rutas" :to="{name:'Administrar'}">
            <button class="button" >ADMINISTRAR</button></RouterLink>
       
      </div>
      <div class="item3">
        <RouterLink class="rutas" :to="{name:'citas_cliente'}"><button class="button">VER CITAS</button></RouterLink>
      </div>
      <div class="item4"> <RouterLink class="rutas" :to="{name:'Calendario-admin',params:{idserv:0,serv:'none'}}"><button class="button">CALENDARIO</button></RouterLink>
       
        </div>
      <div class="item6 d-flex">
        <div @click='cambiar' class="item5 pr-5"><img class="iconos noti" src="/img/noti.png" alt=""></div>
      
        <v-menu>
          <template v-slot:activator="{ props }">
            <buttom  class="button" v-bind="props"><img class="iconos" src="/img/perfil.png" alt=""></buttom>
          </template>
          <v-list>
            <v-list-item >
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);"><router-link :to='{name:"perfil"}'>Configuracion</router-link></v-list-item-title>
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);"><router-link :to='{name:"contacto"}'>Contacto</router-link></v-list-item-title>
             <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);">Cerrar sesion</v-list-item-title>
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
  width: 100%;
  height: 8vh;
  background-blend-mode: normal;
  box-shadow: 0px 2px 4px 2px rgba(100,100,100,0.5);
  
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
