<script setup>
    import VueCal from 'vue-cal'
    import 'vue-cal/dist/vuecal.css'
</script>

<template>
    <vue-cal
        locale="es"
        :disable-views="['years', 'year', 'month']"
        :time-from="12 * 60"
        :time-to="18 * 60"
        :time-step="30"
        show-time-in-cells
    />
</template>

<style>

</style>