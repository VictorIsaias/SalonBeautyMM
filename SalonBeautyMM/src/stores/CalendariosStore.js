import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const CalendarioStore = defineStore('cal', () => {
  
  var flotante = ref(false)

  var citas = ref([
    {
      id:1,

    }
  ])

  var servCita = ref([
    {
      id:1,

    }
  ])

  return { flotante }
})
