<script setup>
  import Calendario from '../components/Calendario.vue';
  import Servicios from '../components/Servicios.vue';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar>Header</v-app-bar>

    <v-container fluid class="d-flex align-center justify-center ma-10">
      <Calendario/>
    </v-container>
  </v-layout>
</template>

<style>
</style>
