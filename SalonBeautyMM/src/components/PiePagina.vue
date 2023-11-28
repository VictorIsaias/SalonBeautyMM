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
    <v-card class="item4">
        <v-card-title>
            <h3>!Contactanos!</h3>
        </v-card-title>
        <v-card-text>
            <div>
                <v-icon icon="mdi-whatsapp"></v-icon>
                <h4>Mine.ejemplo@gmail.com</h4>
                <h4>87-17-95-77-18</h4>
                <h4>www.facebook/SalonBeautyMM.com</h4>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.item4{
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    background-color:rgb(179, 147, 179);
    height:150px;
    width: 100%;
}
.item4 div{
    display: flex;
    width: 80%;
    border-bottom: 1px solid black;
    justify-content:space-evenly;
}
</style>