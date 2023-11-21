<script setup>
const servicios =[
  {title: 'Corte cabello' },
  {title: 'Pintura de cabello'},
  {title: 'Pintura de uñas'}]

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
  <div>
    <div class="flex-barra elevation-3">
       <div class="item1"><RouterLink to="inicio"><img class="iconos logo" src="src/assets/img/logo.png" alt=""></RouterLink></div>
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
        <RouterLink class="rutas" to="citas_cliente"><button class="button">VER CITAS</button></RouterLink>
      </div>
      <div class="item4"><button class="button">INICIAR SESION</button></div>
      <div class="item5"><img class="iconos noti" src="src/assets/img/noti.png" alt=""></div>
      <div class="item6">
        <v-menu>
          <template v-slot:activator="{ props }">
            <buttom class="button" v-bind="props"><img class="iconos" src="src/assets/img/perfil.png" alt=""></buttom>
          </template>
          <v-list>
            <v-list-item @click="handelperfil" v-for="(perfil, index) in perfil" :key="index">
              <v-list-item-title style="border-bottom: 1px solid rgb(112, 112, 112);">{{ perfil.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="container">
      <RouterView></RouterView>
      hola
    </div>
  </div>
</template>

<style scoped>
.rutas{
  color:black;
  text-decoration:none;
}

.flex-barra{
  display:flex;
  height: 60px;
  width: 100%;
  background-color: 0,0,0,0;
  line-height: 60px;
  justify-content: space-evenly;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
.button{
  border:none;
  background-color:white;
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
  flex-grow:8;
}
.item2{
  flex-grow:3;
}
.item3{
flex-grow: 3;
}
.item4{
flex-grow: 5;
}
.item5{
flex-grow: 1;
}
.item6{
  flex-grow:1;
}
</style>
