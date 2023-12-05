import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const ServiciosStore = defineStore('id', () => {
  
    const cServicios = ref([])
    const respuesta = async () => {
        try{
            const respuesta = await fetch('http://18.218.1.15:81/categorias');
            const data = await respuesta.json();
            cServicios.value=data.data;
        }catch{

        }
    }

  onMounted(respuesta);
  var servicios = ref([])

  const response = async ()=>{
    try{
        const respuesta = await fetch('http://18.218.1.15:81/servicios');
        const data = await respuesta.json();
        servicios.value=data.data;
    }catch{

    }
  }  


  onMounted(response);
  var seleccion = (id)=>{
    return servicios.value[id-1]
   
  }
   
   


  return { seleccion,cServicios,servicios }
})
