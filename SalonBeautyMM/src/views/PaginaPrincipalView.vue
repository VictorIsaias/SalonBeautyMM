<script setup>
import BotonPagina from "../components/BotonPagina.vue"
import Footer from '../components/PiePagina.vue';
import {ref} from 'vue';
const items =ref([
    {id:1, image: '../src/assets/img/3_objects.png'},
    {id:2, imgae: '../src/assets/img/logo.png'},
]);
const servicios=ref([
    {id:2,image:'../src/assets/img/logo.png'},
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
            <v-carousel class='h-50'>
                <v-carousel-item v-for="item in items" :key="item.id" >
                    <v-img :src="item.image"></v-img>
                </v-carousel-item>
            </v-carousel><br>
        </div>
        <div class="item2">
            <h1>PIDE UNA CITA</h1>
            <H3>ADQUIERE UN NUEVO ESTILO</H3>
            <h4>INICIA SESION Y PIDE UNA CITA PUEDE SELECCIONAR EL SERVICIO QUE GUSTE A LA HORA QUE TU QUIERAS</h4>
            <v-carousel >
                <v-carousel-item class="carousel" v-for="item in servicios" :key="item.id">
                    <v-img :src="item.image"></v-img>
                </v-carousel-item>
            </v-carousel>
            <v-carousel style="height: 400px;">
                <v-carousel-item class="carousel" v-for="item in service" :key="item.id">
                    <v-img :src="time.image"></v-img>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div class="item3">
            <h1 style="border-bottom:2px solid black;">SERVICIOS</h1><br>
            <h3>REVISA NUESTRO CATALOGO DE SERVICIOS</h3><br>
            <div class="servicios">
                <div>
                    <h2>Tinte de cabello</h2>
                    <p>Renuva el estilo personal que llevas, con un color diferente</p>
                    <a href="">MAS INFORMACION</a>
                </div>
                <div>
                    <h2>Maquillaje</h2>
                    <p>Prepara tu mejor imagen para cualquien ocacion especial</p>
                    <a href="">MAS INFORMACION</a>
                </div>
                <div>
                    <h2>Corte de cabello</h2>
                    <p>Nutre estilo de gran valor aprovechando lo mejor de ti</p>
                    <a href="">MAS INFORMACION</a>
                </div>
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
.item3{
    background-image: url('../assets/img/salon.jpeg');
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 10px;
    border-radius: 10px;
}
.servicios{
    display:flex;
    height: 500px;
    width:100%;
    justify-content: center;
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
</style>
