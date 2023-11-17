import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const CalendarioStore = defineStore('id', () => {
  
  var flotante = ref(false)



  return { flotante }
})
