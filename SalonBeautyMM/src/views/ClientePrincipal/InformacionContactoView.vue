<template>
  <v-container style='height: 100vh;' class="d-flex" align="start" justify="start">
      
<v-card class="titulo" title="Contacto" width="400" height="450" color=#FFE5FD style="font-family:'Britannic'">
  <v-divider class="mx-4 mb-6 border-opacity-25"></v-divider>
  <v-card-item style="font-family:'Oswald'">
      
      <v-card-subtitle class="font-weight-bold">Numero de telefono</v-card-subtitle>
     <v-list-item  density="compact">
      <v-list-item-subtitle v-for="telefono in telefonos" :key="telefono">{{ telefono.numero }}</v-list-item-subtitle></v-list-item>
        
      <v-card-subtitle class="font-weight-bold">Correo electronico</v-card-subtitle>
      <v-list-item  density="compact">
      <v-list-item-subtitle v-for="correo in correos" :key="correo">{{ correo.texto }}</v-list-item-subtitle></v-list-item>
      
      <v-card-subtitle class="font-weight-bold">Pagina de Facebook</v-card-subtitle>
      <v-list-item  density="compact">
      <v-list-item-subtitle v-for="pagina in paginas" :key="pagina">{{ pagina.texto }}</v-list-item-subtitle>

      </v-list-item>
  
      </v-card-item>

</v-card>
</v-container>
</template>


<script setup>
const telefonos =[
  {
      numero:'8713428012'
  },
  {
      numero:'8712210092'
  }
]
const correos =[
  {
      texto:'mine.ejemplo@gmail.com'
  }
]
const paginas =[
  {
      texto:'Beauty Salón Minerva Moreno'
  }
]
</script>