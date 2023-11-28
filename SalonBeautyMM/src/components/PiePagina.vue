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
    <v-card class='contenedor d-flex flex-column align-center'>
        <v-card-title>
            <h4>¡Contáctanos!</h4>
        </v-card-title>
        <v-card-text>
            <v-container  class="item4">
                <v-row>
                    <v-col class='d-flex align-center'>
                        <v-icon icon="mdi-whatsapp" size='small' class='mr-2'></v-icon>
                       <h5>Mine.ejemplo@gmail.com</h5>
                    </v-col>
                    <v-col class='d-flex align-center'>
                        <h5>871-795-7718</h5>
               
                    </v-col>
                    <v-col class='d-flex align-center'>
                        <h5>www.facebook/SalonBeautyMM.com</h5>
           
                    </v-col>
                    <v-divider class="border-opacity-50" ></v-divider>
   
                </v-row>
           
            </v-container>
        </v-card-text>
        
    </v-card>
</template>

<style scoped>
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
    height:7.5rem;
    width: 100%;
    background-color:rgb(179, 147, 179);
}
</style>