<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
    <Ventana/>
  <RouterView />
</template>

<style>

</style>
