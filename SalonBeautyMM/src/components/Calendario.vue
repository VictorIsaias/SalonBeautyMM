<script setup>
    import VueCal from 'vue-cal'
    import 'vue-cal/dist/vuecal.css'
    
</script>

<template>
<vue-cal
  selected-date="2018-11-19"
  :time-from="9 * 60"
  :time-to="19 * 60"
  :disable-views="['years', 'year']"
  hide-weekends
  :events="events"
  :on-event-click="onEventClick">
</vue-cal>

</template>

<style>

</style>