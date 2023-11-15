<!-- Servicios.vue -->
<template>
    <v-row>
      <v-col>
        <v-checkbox v-model="corteDama" label="Corte de Cabello para Dama" @change="calcularTotal" />
        <v-checkbox v-model="corteHombre" label="Corte de Cabello para Hombre" @change="calcularTotal" />
        <v-checkbox v-model="cambioColor" label="Cambio de Color de Cabello" @change="calcularTotal" />
      </v-col>
    </v-row>
  </template>
  
<script setup>
    import { ref } from 'vue';
</script>