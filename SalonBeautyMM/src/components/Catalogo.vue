<template>
    <v-container >
      <v-row style="background-color:#FDCCB5">
        <v-col v-for="(item, index) in services" :key="index" cols="12">
          <v-card color= 'pink-lighten-5' theme='black'>
            <v-row>
              <v-col cols="12" md="4">
                 
                  <v-img class="item.image" width="300" :aspect-ratio="1" :src="item.image" cover></v-img>
               
              </v-col>
              <v-col cols="12" md="6">
                <div class="d-flex flex-direction-column justify-space-between">
                  <div>
                    <v-card-title class="text-h5">{{ item.title }}</v-card-title>
                    <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                    <v-card-actions>
                      <v-btn class="botoncito" elevation="8" size="x-large"  >
                         {{ item.buttonText }}
                      </v-btn>
                    </v-card-actions>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>

import { ref } from 'vue';

const services = ref([
{
title: 'Corte de Cabello',
subtitle: 'Luce espectacular con un nuevo y grandioso corte de cabello...',
buttonText: 'ver servicios',
image:'https://media.istockphoto.com/id/638948482/es/foto/peluquer%C3%ADa-en-acci%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=CJtYfp7nx0yd9w90OHzt8aYHlOTuCPZ_URw2JwS3taM=',
},
{
title: 'Aplicación de uñas',
subtitle: 'Disfruta de una excelente manicura...',
buttonText: 'ver servicios',
image: 'https://www.rbs-nails-academy.com.ar/wp-content/uploads/2020/11/Curso-Unas-Esculpidas-en-Acrilico-2--e1605812147470.jpg',
},
{
title: 'Depilación',
subtitle: 'Luce una piel extra limpia y saludable con nuestros servicios de depilación...',
buttonText: 'ver servicios',
image: 'https://tse2.explicit.bing.net/th?id=OIP.mTHE9F90IPtfFHJ4f59CeAHaEK&pid=Api&P=0&h=180',
},
{
title: 'Trabajos de color',
subtitle: 'Trabajos desde ballagaye hasta mechas...',
buttonText: 'ver servicios',
image: 'https://www.instyle.es/medio/2020/12/11/color-melting_74fe8f06_900x1125.jpg',
},
{
title: 'Aplicación de tinte',
subtitle: 'Atrevete a un cambio de look para sorprender...',
buttonText: 'ver servicios',
image: 'https://tse1.explicit.bing.net/th?id=OIP.F9kP86vPI4gz4grSi2pYaQHaE8&pid=Api&P=0&h=180',
},
{
title: 'Maquillaje y peinado',
subtitle: 'Luce increible para tu evento o tu día especial...',
buttonText: 'ver servicios',
image: 'https://www.hogarmania.com/archivos/201703/belleza-maquillaje-novia-2-XxXx80.jpg',
},
]);

</script>

<style>


.text-h4 {
font-size: 24px;
font-weight:bold;

}

.text-h5 {
font-size: 20px;
font-weight: bold;
}

.text-body-2 {
font-size: 14px;
color: #757575;
}
</style>