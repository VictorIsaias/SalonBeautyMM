<script setup>
import Footer from '../components/Footer.vue';
import {ref} from 'vue';
const items =ref([
    {id:1, image: '../src/assets/img/logo.png'},
    {id:2, imgae: '../src/assets/img/logo.png'},
]);
const servicios=ref([
    {id:2,image:'../src/assets/img/logo.png'},
]);
</script>
<template>
    <div class="inicio">
        <div class="header">
            <img src="../assets/img/logo2.png" alt="">
            <h3>Relajate, renuevate y resplandece</h3><br>
            <div class="item">
                <button><h2>Catalogos disponibles</h2></button>
            </div><br>
        </div>
        <div class="carrusel">
            <v-carousel>
                <v-carousel-item v-for="item in items" :key="item.id" >
                    <v-img :src="item.image"></v-img>
                </v-carousel-item>
            </v-carousel><br>
        </div>
        <div class="item2">
            <h1>PIDE UNA CITA</h1>
            <H3>ADQUIERE UN NUEVO ESTILO</H3>
            <h4>INICIA SESION Y PIDE UNA CITA PUEDE SELECCIONAR EL SERVICIO QUE GUSTE A LA HORA QUE TU QUIERAS</h4>
            <v-carousel style="height: 400px;">
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
.inicio{
    background: linear-gradient(213deg, #ffffff 0%, #ffd2e8 38.3%, #cd67a9 100%);
    width: 100%;
    height: 100%;
}
.header{
    display:flex;
    background-color:rgb(252, 220, 226);
    justify-content:center;
    align-items: center;
    flex-direction: column;
}
.header img{
  height: 17%;
  width: 17%;
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
