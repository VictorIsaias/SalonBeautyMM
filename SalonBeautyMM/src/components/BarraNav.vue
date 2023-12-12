<script setup>


import { storeToRefs } from 'pinia'
import {ref,computed} from 'vue'
import {useUsuarioStore} from '@/stores/UsuariosStore.js'
import {ServiciosStore} from '@/stores/ServiciosStore.js'
const servs = ServiciosStore()
const {servicios,cServicios} = storeToRefs(servs)

const pagina = useUsuarioStore()

const {estadonav} = storeToRefs(pagina)

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





     var menu= ref(false)
     var menu2= ref(false)
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
  <div class='w-100 fin'>
    

    <div class="barra pb-1 pl-2 pr-2 elevation-3 text-button" v-show='estadonav==0'>
       <div class="item1"><RouterLink :to="{name:'inicio'}"><img class="iconos logo" src="/img/logo.png" alt=""></RouterLink></div>
        <div></div>
        <div class="item2 ">
        <v-menu 
        v-model="menu"
      :close-on-content-click="false"
      location="center"
    >
      <template v-slot:activator="{ props }">
        <div class="item2">
        <button  v-bind='props' @click="menu=true" class="button rutas">SERVICIOS</button>
      </div>
      </template>

      <v-card class='pa-5 d-flex  servicios text-wrap' style='position: relative; top:2.3rem;'>
        <v-card class='flex-grow-1 subi elevation-0' v-for='(cat,index) in cServicios' :key='index' color='' >
           <v-card-title  style='color:#169873'>
            <router-link class='cat' @click='menu=false' style="text-decoration: none; color: inherit;" :to='{name:"sub-servicios",params:{idcat:cat.id}}'>{{cat.nombre}}</router-link>
            </v-card-title>
           <div class='pl-6 pr-3 pt-1 cacu' >

            
              <div class='ma-0 ' 
              v-for='(serv,index) in servicios' :key='index'>
                  
                  <div class='pb-3' v-if='serv.categoria==cat.id'>
                    <router-link  @click='menu=false' style="text-decoration: none; color: inherit;" :to='{name:"detalles",params:{idserv:serv.id}}'>
                     <div class='serv'>{{serv.nombre}}</div>  
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
          <button variant="text"  class="button mr-1" v-bind="props"><img class="iconos " src="/img/perfil.png" alt=""></button>
         </RouterLink>
      </div>
    </div>
    




    <div class=" barra  pb-1 pl-2 pr-2 elevation-3 text-button" v-show='estadonav==1'>
       <div class="item1"><RouterLink :to="{name:'inicio'}"><img class="iconos logo" src="/img/logo.png" alt=""></RouterLink></div>
       
      <div class="item2 ">
        <v-menu 
      v-model="menu2"
      :close-on-content-click="false"
      location="center"
    >
      <template v-slot:activator="{ props }">
        <div class="item2">
        <button @click="menu2=true" v-bind='props' class="button rutas">SERVICIOS</button>
      </div>
      </template>

      <v-card class='pa-5 d-flex flex-wrap servicios ' style='position: relative; top:3.5rem;'>
        <v-card class='flex-grow-1 subi elevation-0' v-for='(cat,index) in cServicios' :key='index'
           color='' >
           <v-card-title  style='color:#169873'>
            <router-link class='cat' @click='menu2=false' style="text-decoration: none; color: inherit;" :to='{name:"sub-servicios",params:{idcat:cat.id}}'>{{cat.nombre}}</router-link>
            </v-card-title>
           <div class='pl-6 pr-3 pt-1' style='min-height:10rem'>

            
              <div class='ma-0 ' 
              v-for='(serv,index) in servicios' :key='index'>
                  
                  <div class='pb-3' v-if='serv.categoria==cat.id'>
                    <router-link class='serv' @click='menu2=false' style="text-decoration: none; color: inherit;" :to='{name:"detalles",params:{idserv:serv.id}}'>
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
        <RouterLink class="rutas" :to="{name:'crear_cita',params:{idserv:0}}"><button class="button">NUEVA CITA</button></RouterLink>
        </div>
      <div class="item6 d-flex">
        <div @click='cambiar' class="item5 mr-3"><img class="iconos noti" src="/img/noti.png" alt=""></div>
      
      <v-menu>
        <template v-slot:activator="{ props }">
          <button variant="text"  class="button mr-1" v-bind="props"><img class="iconos " src="/img/perfil.png" alt=""></button>
        </template>
          <v-list>
            <v-list-item >
              <v-list-item-title class='mb-2 mt-1' ><router-link style="text-decoration: none; color: inherit;" class='text-body-1 ' :to='{name:"perfil"}'><v-icon icon='mdi-cog' class='mr-3' ></v-icon>Configuracion</router-link></v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-title class='mb-2 mt-1' ><router-link style="text-decoration: none; color: inherit;" class='text-body-1' :to='{name:"contacto"}'><v-icon icon='mdi-contacts' class='mr-3' ></v-icon>Contacto</router-link></v-list-item-title>
              <v-divider></v-divider>
              <router-link :to="{name:'iniciar'}"><v-list-item-title class='text-body-1 mb-1  mt-1'><v-icon icon='mdi-logout-variant' class='mr-3' ></v-icon>Iniciar sesion</v-list-item-title></router-link>
             </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    
    <div class=" barra pb-1 pl-2 pr-2 elevation-3 text-button" v-show='estadonav==2'>
       <div class="item1"><RouterLink :to="{name:'inicio'}"><img class="iconos logo" src="/img/logo.png" alt=""></RouterLink></div>
       
      <div class="item2">
            <RouterLink class="rutas" :to="{name:'Administrar'}">
            <button class="button rutas" >ADMINISTRAR</button></RouterLink>
       
      </div>
      <div class="item3">
        <RouterLink class="rutas" :to="{name:'citas_administrador'}"><button class="button">VER CITAS</button></RouterLink>
      </div>
      <div class="item4"> <RouterLink class="rutas" :to="{name:'Calendario-admin',params:{idserv:0}}"><button class="button">CALENDARIO</button></RouterLink>
       
        </div>
      <div class="item6 d-flex">
        <div @click='cambiar' class="item5 mr-3"><img class="iconos noti" src="/img/noti.png" alt=""></div>
      
      <v-menu>
        <template v-slot:activator="{ props }">
          <button variant="text"  class="button mr-1" v-bind="props"><img class="iconos " src="/img/perfil.png" alt=""></button>
        </template>
        <v-list>
            <v-list-item >
              <v-list-item-title class='mb-2 mt-1' ><router-link style="text-decoration: none; color: inherit;" class='text-body-1 ' :to='{name:"perfil"}'><v-icon icon='mdi-cog' class='mr-3' ></v-icon>Configuracion</router-link></v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-title class='mb-2 mt-1' ><router-link style="text-decoration: none; color: inherit;" class='text-body-1' :to='{name:"contacto"}'><v-icon icon='mdi-contacts' class='mr-3' ></v-icon>Contacto</router-link></v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-title   class='text-body-1 mb-1  mt-1'><v-icon icon='mdi-logout-variant' class='mr-3' ></v-icon>Cerrar sesion</v-list-item-title>
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

.fin{
  width: 100vw;
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
  width: 100vw;
}
.button{
  border:none;
  text-decoration: none;;
}
.button:hover{
  border-bottom:5px solid pink;
  height: 50px;
}
.button{
  margin-right: 1rem;
}
.noti{
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

@media screen and (min-width: 535px){
.servicios{
  flex-wrap: wrap;
}
.subi{
  width: 25%;
}
.cacu{
  min-height:10rem
}
}

@media screen and (max-width: 534px){
  .servicios{
  
  flex-wrap: wrap;
  
  
}
.cat{
  font-size: 1.1rem;
}
.cacu{
  min-height:5.5rem
}

.serv{
  width: 50rem;
  
}
.cat{
  width: 50rem;
}
}
@media screen and (min-width: 961px){
.servicios{
  width:80vw;
  min-height: 20rem;
  
}

.iconos{
  height: 2.2rem;
  
  margin-top:0.9rem;
}

.noti{
  
  margin-right: 1.6rem;
}
.logo{
  
  margin-left: 1.5rem;
  width: 2.5rem;
}

.rutas{
  font-size: .70rem;
}
.barra{
  height: 3rem;  
}
}
@media screen and (max-width: 1024px){
  .servicios{
  width:90vw;
  min-height: 20rem;
}
}

@media screen and (max-width: 961px){
  .servicios{
  width:95vw;
  min-height: 20rem;
}
.cat{
  font-size: 1rem;
}
.serv{
  font-size: 0.9rem;
}

  .iconos{
  height: 2.2rem;
  
  margin-top:0.9rem;
}

.noti{
  
  margin-right: 0.2rem;
}
.logo{
  width: 2.5rem;
  
  margin-left: 1.5rem;
}


.rutas{
  font-size: .8rem;
}
}

@media screen and (max-width: 451px){
  .iconos{
  height: 2rem;
  
  margin-top:0.9rem;
}


.logo{
  width: 2.3rem;
  
  margin-left: 0.6rem;
}
.button{
  margin-right: 0;
}

.rutas{
  font-size: .80rem;
}
}


@media screen and (max-width: 376px){
  .iconos{
  height: 1.7rem;
  
  margin-top:0.9rem;
}

.logo{
  width: 2rem;
  
}


.rutas{
  font-size: .7rem;
}
}

@media screen and (max-width: 321px){
  .iconos{
  height: 1.5rem;
  
  margin-top:0.9rem;
}

.logo{
  width: 1.8rem;
  
}


.rutas{
  font-size: .6rem;
}
}
</style>
