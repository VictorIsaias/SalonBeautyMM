import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const ServiciosStore = defineStore('id', () => {
  
  // Consulta de las categorias para la vista de categorias //
    const cServicios = ref([])
    const respuesta = async () => {
        try{
            const respuesta = await fetch('http://localhost/categorias');
            const data = await respuesta.json();
            cServicios.value=data.data;
        }catch{

        }
    }

  onMounted(respuesta);
  var servicios = ref([])
// consulta de los servicios para la vista de servicios
  const response = async ()=>{
    try{
        const respuesta = await fetch('http://localhost/servicios');
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
});

export const borrarServicioCita = defineStore('admin', () => {
  const state = {
    variable: '',
  };

  const setVariable = (newValue) => {
    state.variable = newValue;
  };

  return {
    state,
    setVariable,
  };
});
