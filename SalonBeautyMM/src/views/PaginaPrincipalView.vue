<script setup>
import BotonPagina from "../components/BotonPagina.vue"
import Footer from '../components/PiePagina.vue';
import {ref} from 'vue';
const slog =ref([
    {id:1, image: '../src/assets/img/slogan1.png'},
    {id:2, image: '../src/assets/img/slogan2.png'},
    {id:3, image: '../src/assets/img/slogan3.png'},
]);
const servicios=ref([
    {id:1, image: '../src/assets/img/servicio3.jpg'},
    {id:2, image: '../src/assets/img/servicio4.jpg'},
    {id:3, image: '../src/assets/img/servicio5.jpg'},
    {id:4, image: '../src/assets/img/servicio6.jpg'},
]);
</script>
<template>
    <div class='fondop'>
        <div class="header">
            <div class='logo'><img src="../assets/img/logo2.png" alt=""></div>
            <h3 class='slogan'>Relajate, renuevate y resplandece</h3><br>
            <div class="item">
                <botonPagina link='catalogos' tipo='solo'><h2 class='texto morado'>Catalogos disponibles</h2></botonPagina>
            </div><br>
        </div>
        <div class="carrusel">
            <v-carousel cycle interval="3000" class='h-50'>
                <v-carousel-item v-for="item in slog" :key="item.id" >
                    <v-img :src="item.image" style="opacity: 0.7;"></v-img>
                </v-carousel-item>
            </v-carousel><br>
        </div>
        <div class="item2">
            <v-responsive>
            <v-row>
              <v-col>
                <h1 class="headline">PIDE UNA CITA</h1>
                <h3 class="subtitle-1">ADQUIERE UN NUEVO ESTILO</h3>
                <h4 class="body-1">INICIA SESION Y PIDE UNA CITA. PUEDES SELECCIONAR EL SERVICIO QUE GUSTES A LA HORA QUE DESEES</h4>
              </v-col>
            </v-row>
          </v-responsive>
        </div>
        <div class="carrusel">
            <v-carousel cycle interval="3000" class='h-50'>
                <v-carousel-item v-for="item in servicios" :key="item.id" >
                    <v-img :src="item.image" style="opacity: 0.7;"></v-img>
                </v-carousel-item>
            </v-carousel><br>
        </div>
        <br>
        <div class="item3">
  <h1 style="border-bottom: 2px solid black; font-family: 'Times New Roman', Times, serif;">SERVICIOS</h1><br>
  <h3 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">REVISA NUESTRO CATÁLOGO DE SERVICIOS</h3><br>
  <div class=" servicios">
    <v-container class="info">
      <h2 class="letra">Tinte de cabello</h2>
      <p>Renuva el estilo personal que llevas, con un color diferente</p>
      <a class="link" href="" style="margin-top: 20px;">MAS INFORMACIÓN</a>
    </v-container>

    <v-container class="info">
      <h2 class="letra">Maquillaje</h2>
      <p>Prepara tu mejor imagen para cualquier ocasión especial</p>
      <a class="link" href="" style="margin-top: 20px;">MAS INFORMACIÓN</a>
    </v-container>

    <v-container class="info">
      <h2 class="letra">Corte de cabello</h2>
      <p>Nutre estilo de gran valor aprovechando lo mejor de ti</p>
      <a class="link" href="" style="margin-top: 20px;">MAS INFORMACIÓN</a>
    </v-container>
  </div>
</div>

        <Footer/>
    </div>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Merriweather&family=Oswald:wght@200;300;400;500;600;700&family=Rubik:wght@300&display=swap');
.fondop{
    background: linear-gradient(213deg, #ffffff 0%, #ffd2e8 38.3%, #cd67a9 100%);
    
  }
.texto{
    font-family: 'Merriweather', sans-serif;
}
.slogan{
    font-family: 'Lobster', sans-serif;
    color: #FD7E94
}

.morado{
    color:#9F3E6D
}

.header{
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
}
.logo{

    width: 13%;
    background: radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0) 80%);
    position:relative;
}
.logo img{
    width: 100%;
}
.item{
    display: flex;
    border-top:3px solid black;
    border-bottom:3px solid black;
    width: 80%;
    justify-content: center;
}
.item2{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
}

.item3 {
  background-image: url('../assets/img/salon.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.servicios{
    display:flex;
    height: 500px;
    width:100%;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.servicios div{
    background-color:#e9bdd2;
    border-radius: 10px;
    text-align:center;
    height: 250px;
    width: 200px;
    margin: 10px;
    padding: 9px;
}

.info{
    background-color: #f7e7ef;
    display: flexbox;
}

.info a{
    justify-content: end;
    align-items: end;
}
.letra{
    color: #a8a9c8;
}

.link{
    color: #51ab92;
    align-self: flex-end;
}

@media screen and (max-width: 960px) {
  .headline {
    font-size: 1rem;
  }
  .subtitle-1 {
    font-size: 1rem;
  }
  .body-1 {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1280px) {
  .headline {
    font-size: 2rem;
  }
  .subtitle-1 {
    font-size: 2rem;
  }
  .body-1 {
    font-size: 1rem;
  }
}
</style>
