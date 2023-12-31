import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const ServiciosStore = defineStore('id', () => {
  
 



    const cServicios = ref([])
    const respuesta = async () => {
        try{
            const respuesta = await fetch('http://18.116.31.102/categorias_activos');
            const data = await respuesta.json();
            cServicios.value=data.data;
        }catch{

        }
    }

  onMounted(respuesta);
  var servicios = ref([])

  const response = async ()=>{
    try{
        const respuesta = await fetch('http://18.116.31.102/servicios_activos');
        const data = await respuesta.json();
        servicios.value=data.data;
    }catch{

    }
  }  


  onMounted(response);
 
   
   


  return { response,cServicios,servicios }
})
