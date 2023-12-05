<script>
import {ref} from 'vue';

export default {
    name: 'Contacto'
}
const correo = ref([
    {id: 1, image: ''}
]);


</script>

<template>
  <v-card class='contenedor' align="center" justify="center">
    <v-card-title>
      <v-card-title class="titulo" style="font-family: Verdana, Geneva, Tahoma, sans-serif">¡Contáctanos!</v-card-title>
    </v-card-title>
    <v-card-text>
      <v-container class="item4" align="center" justify="center">
        <v-row>
          <!-- Gmail -->
          <v-col class='d-flex align-center text md12' md="4">
            <v-icon icon="mdi-gmail" size="samll" class='mr-2 gmail'></v-icon>
            <v-card-text class="text">Mine.ejemplo@gmail.com</v-card-text>
          </v-col>

          <!-- WhatsApp -->
          <v-col class='d-flex align-center text md12 whats' md="4">
            <v-icon icon="mdi-whatsapp" size='small' class='mr-2'></v-icon>
            <v-card-text class="text">871-795-7718</v-card-text>
          </v-col>

          <!-- Facebook -->
          <v-col class='d-flex align-center text md12' md="4">
            <v-icon icon="mdi-facebook" size="samll" class='mr-2'></v-icon>
            <v-card-text class="text">www.facebook/SalonBeautyMM.com</v-card-text>
          </v-col>

          <!-- Divider -->
          <v-divider class="border-opacity-50"></v-divider>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>

</template>

<style scoped>
.titulo{
    padding: 0px;
    margin: 0px;
}
.text{
    margin-top: 0px;
    
    padding: 3px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.item4{
    display: flex;
    justify-content:center;
    align-items: center;
   
}
.item4 div{
    display: flex;
    width: 80%;
    justify-content:space-evenly;
}
.contenedor{
    height:auto;
    width: 100%;
    background-color:#cd67a9;
    opacity: 0.75;
}
@media screen and (max-width: 2000px){
    .item4{
        display: block;
    }
    .titulo{
        font-size: 1em;
    }

    .text{
        font-size: 0.9em;
    }
}

@media screen and (max-width: 1024px){
    .item4{
        display: block;
    }
    .titulo{
        padding: 0px;
        margin: 0px;
    }
    .whats{
  
        padding-left:20px;
        
        padding-right:39px;
    }

}

@media screen and (max-width: 769px){
    .item4{
        display: block;
    }
    .titulo{
        padding: 0px;
        margin: 0px;
    }
    .whats{
        margin-left: 2rem;
        padding-right: 1rem;
    }

}

@media screen and (min-width: 769px){
    .item4{
        display: flex;
    }
    .text{
        font-size: 1.1em;
    }

}

@media screen and (max-width: 480px){
    .contenedor{
        display: block;
    }
    .titulo{
        font-size: .8em;
    }
  
}
@media screen and (max-width: 426px) {
    .contenedor{
        display: block;
    }
    .whats{
        margin-left: 0rem;
        padding-right: 1rem;
    }
}
@media screen and (max-width: 376px) {
    .contenedor{
        display: block;
    }
    .whats{
        margin-left: 0rem;
        margin-right: 1.5rem;
        padding-right:0rem;
        
    }
}
@media screen and (max-width: 320px) {
    .contenedor{
        display: block;
    }
    .whats{
        margin-left: 0;
        padding-right: 0;
    }
}
</style>