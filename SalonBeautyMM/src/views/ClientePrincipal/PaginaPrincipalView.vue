<script setup>
import BotonPagina from "@/components/BotonPagina.vue"
import Footer from '@/components/PiePagina.vue';
import {ref} from 'vue';
const slog =ref([
    {id:1, image: '/img/slogan1.png'},
    {id:2, image: '/img/slogan2.png'},
    {id:3, image: '/img/slogan3.png'},
]);
const servicios=ref([
    {id:1, image: '/img/servicio3.jpg'},
    {id:2, image: '/img/servicio4.jpg'},
    {id:3, image: '/img/servicio5.jpg'},
    {id:4, image: '/img/servicio6.jpg'},
]);
</script><template>
  <div class='fondope'>
      <div class="header">
          <div class='logo'><img src="/img/logo2.png" alt=""></div>
          <h3 class='slogan'>Relajate, renuevate y resplandece</h3><br>
          <div class="item ">
              <botonPagina  link='catalogos' tipo='solo'><h2 class=' morado'>Catalogos disponibles</h2></botonPagina>
          </div><br>
      </div>
      <div class="carrusel ">
        <v-responsive>
          <v-carousel cycle interval="3000" style="height: 100%; width: 100%;" :aspect-ratio="1" hide-delimiter-background show-arrows="hover">
              <v-carousel-item  v-for="item in slog" :key="item.id" >
                  <v-img :src="item.image" style="opacity: 0.7;"></v-img>
              </v-carousel-item>
          </v-carousel><br>
        </v-responsive>
      </div><br>
      <v-card class="blanca ">
      <div class="item2">
          <v-responsive>
          <v-row>
            <v-col class='d-flex flex-column align-center text-center'>
              <v-card-title class="titulo">PIDE UNA CITA</v-card-title>
              <v-card-text class="sub">CON LA MEJOR ESTILISTA</v-card-text>
              <v-card-text class="tex">INICIA SESION Y PIDE UNA CITA. PUEDES SELECCIONAR EL SERVICIO QUE GUSTES A LA HORA QUE DESEES</v-card-text>
            </v-col>
          </v-row>
        </v-responsive>
      </div>
      <div class="carrusel">
          <v-carousel cycle interval="3000" style="height: 100%; width: 100%;" :aspect-ratio="1" hide-delimiter-background show-arrows="hover">
              <v-carousel-item v-for="item in servicios" :key="item.id" >
                  <v-img :src="item.image" style="opacity: 0.7;"></v-img>
              </v-carousel-item>
          </v-carousel><br>
      </div>
    </v-card>
      <br>
      <div class="item3 " >
<v-card-title class="serv">SERVICIOS</v-card-title><br>
<v-card-text  class="textS">REVISA NUESTRO CATÁLOGO DE SERVICIOS</v-card-text><br>
<div class=" servicios ">
  <v-container class="info pt-0 ">
      
      <img src='/img/Grupo9.png' style='width:6.9rem;height:7rem;position: relative; bottom:2.5rem'>
         <div class='pt-1 ' style='position: relative; bottom:2.5rem'> <h2 class="letra">Tinte de cabello</h2>
    <p>Renuva el estilo personal que llevas, con un color diferente</p>
  
      </div>
      <router-link style='color:#169873;position: relative; bottom:1.5rem' :to='{name:"sub-servicios",params:{idcat:4,cat:"Tinte de cabello"}}'>MAS INFORMACIÓN</router-link>
      
      
  </v-container>

  <v-container class="info pt-0">
      <img src='/img/Grupo7.png' style='width:6.9rem;height:6rem;position: relative; bottom:2.5rem'>
          
      <div class='pt-1' style='position: relative; bottom:2.5rem'>
          <h2 class="letra">Maquillaje</h2>
    <p>Prepara tu mejor imagen para cualquier ocasión especial</p>
    
      </div>
  <router-link  style='color:#169873;position: relative; bottom:1.5rem' :to='{name:"sub-servicios",params:{idcat:2,cat:"Maquillaje"}}'>MAS INFORMACIÓN</router-link>
      </v-container> 

  <v-container class="info pt-0">
      <img src='/img/Grupo8.png' style='width:6.3rem;height:7rem;position: relative; bottom:2.5rem'>
            
      <div class='pt-1' style='position: relative; bottom:2.5rem'>
          <h2 class="letra">Corte de cabello</h2>
    <p>Nutre estilo de gran valor aprovechando lo mejor de ti</p>
   
      </div>
      <router-link  style='color:#169873;position: relative; bottom:1.5rem' :to='{name:"sub-servicios",params:{idcat:1,cat:"Corte de cabello"}}'>MAS INFORMACIÓN</router-link>
       </v-container>
</div>
</div>

      <Footer/>
  </div>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Merriweather&family=Oswald:wght@200;300;400;500;600;700&family=Rubik:wght@300&display=swap');
.fondope{
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
background-image: url('/img/salon.jpeg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 100vh;
position: relative;
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.servicios{
  display:flex;
  height: 500px;
  width:100%;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
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
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  height: 100%;
  
}

.info a{
  align-self: center;
}
.letra{
  color: #a8a9c8;
}

.link{
  color: #51ab92;
  align-self: flex-end;
}

.titulo{
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.tex{
margin: 0%;
}

.sub{
margin: 0%;
padding: 0%;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.tex{
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.textS{
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.serv{
border-bottom: 2px solid black;
width: 40rem;
font-family: 'Britannic', Times, serif;
}

.blanca{
box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
background-color:  #ffd2e8 ; 
}

@media screen and (max-width: 960px){
.titulo{
  font-size: 2em;
}

.sub{
  font-size: 1em;
}

.tex{
  font-size: .8em;
}
.serv{
  font-size: 3em;
}
.textS{
  font-size: 1em;
}
.carrusel {

height: 30rem;
}
}
@media screen and (max-width: 1440px){

.carrusel {

height: 31rem;
}
}
@media screen and (max-width: 2000px){

.carrusel {

height: 33rem;
}
}
@media screen and (max-width: 1024px){

.carrusel {

height: 19rem;
}
}
@media screen and (max-width: 768px){

.carrusel {

height: 13rem;
}
}
@media screen and (max-width: 426px){
.logo{
  width: 5rem;
}
.carrusel {

height: 9rem;
}
}
@media screen and (max-width: 321px){

.carrusel {

height: 6.5rem;
}
}
@media screen and (min-width: 961px){
.serv{
  font-size: 3em;
}
.textS{
  font-size: 1em;
}

}

@media screen and (max-width: 450px){
.titulo{
font-size: 1.6em;
}
.sub{
font-size: .9em;
}
.tex{
font-size: .7em;
}
.texto{
font-size: 1em;
}
}
@media screen and (min-width: 790px){
.titulo{
font-size: 2.5em;
}
.sub{
font-size: 1.5em;
}
.tex{
font-size: 1.3em;
}
}

@media screen and (max-width: 650px) {
.item3 {
  display: none;
}
}
</style>
