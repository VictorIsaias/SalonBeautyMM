import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const AdministrarStore = defineStore('id', () => {
  
    
    var modo = ref(1)
    var id = ref(1)
    var idcat = ref(0)
var servicio = ref({
  id:'',
  nombre: '',
  descripcion: '',
  duracion: '',
  precio: '',
  catalogo: '',
  activo:true,
  imagen:''
})


var cServicios = ref([
  {
      id:1,
      nombre: 'Cortes de cabello',
      Descripcion: 'descripcion'
  },
  {
      id:2,
      nombre: 'Aplicacion de uñas',
      Descripcion: 'descripcion'
  },
  {
      id:3,
      nombre: 'Depilacion',
      Descripcion: 'descripcion'
  },
  {
      id:4,
      nombre: 'Maquillaje y peinado',
      Descripcion: 'descripcion'
  },
  {
      id:5,
      nombre: 'Trabajos de color',
      Descripcion: 'descripcion'
  },
  {
      id:6,
      nombre: 'Tintes de cabello',
      Descripcion: 'descripcion'
  }
])

var servicios = ref([
  {
      id: 1,
      nombre: 'Cortes de caballero natural',
      descripcion: 'descripcion',
      duracion: 30,
      precio: 70,
      catalogo: 1,
      activo:true,
      imagen:''
  },
  {
      id: 2,
      nombre: 'Corte de caballero escolar',
      descripcion: 'descripcion',
      duracion: 30,
      precio: 70,
      catalogo: 1,
      activo:true,
      imagen:''
  },
  {
      id: 3,
      nombre: 'Diseño de uñas con acrilico',
      descripcion: 'descripcion',
      duracion: 120,
      precio: 200,
      catalogo: 2,
      activo:true,
      imagen:''
  },
  {
      id: 4,
      nombre: 'Diseño de uñas con gelish',
      descripcion: 'descripcion',
      duracion: 180,
      precio: 500,
      catalogo: 2,
      activo:true,
      imagen:''
  },
  {
      id: 5,
      nombre: 'Depilacion de rostro completo',
      descripcion: 'descripcion',
      duracion: 30,
      precio: 200,
      catalogo: 3,
      activo:true,
      imagen:''
  },
  {
      id: 6,
      nombre: 'Depilacion de ceja con cera',
      descripcion: 'descripcion',
      duracion: 30,
      precio: 70,
      catalogo: 3,
      activo:true,
      imagen:''
  },
  {
      id: 7,
      nombre: 'Maquillaje y peinado',
      descripcion: 'descripcion',
      duracion: 0,
      precio: 450,
      catalogo: 4,
      activo:true,
      imagen:''
  },
  {
      id: 8,
      nombre: 'Mechas',
      descripcion: 'descripcion',
      duracion: 0,
      precio: 0,
      catalogo: 5,
      activo:true,
      imagen:''
  },
  {
      id: 9,
      nombre: 'Luces',
      descripcion: 'descripcion',
      duracion: 0,
      precio: 0,
      catalogo: 5,
      activo:true,
      imagen:''
  },
  {
      id: 10,
      nombre: 'Tinte en cabello corto',
      descripcion: 'descripcion',
      duracion: 60,
      precio: 180,
      catalogo: 6,
      activo:true,
      imagen:''
  },
  {
      id: 11,
      nombre: 'Corte de caballero escolar',
      descripcion: 'descripcion',
      duracion: 120,
      precio: 250,
      catalogo: 6,
      activo:true,
      imagen:''
  }
])

const abrirAñadir = (param)=>{
    if(param='servicio'){
        servicio.value = {
            id:'',
            nombre: '',
            descripcion: '',
            duracion: '',
            precio: '',
            catalogo: '',
            activo:true,
            imagen:''
            }  
            modo.value=3
    }
    else{
   

            servicio.value = {
                id:'',
                nombre: '',
                descripcion: '',
                activo:true,
                imagen:''
                }  
                modo.value=4
    }
     
    
    
}



const eliminar = ()=>{
    alert(id.value)
    servicios.value.splice(id.value)
    modo.value=1
}

const añadir = (param) =>{
    if (param){
        servicio.value.catalogo = id.value
        servicio.value.id = cServicios.value.length+1
        
        cServicios.value.push(servicio.value)
    }
    else{
        servicio.value.catalogo = id.value
        servicio.value.id = servicios.value.length+1
        
        servicios.value.push(servicio.value)
        
    }
    
    modo.value=1
   
}


const cancelar = ()=> modo.value=1
const actualizar = (idd,param)=>{
    if(param=='param'){
       
        cServicios.value[idcat.value]=servicio.value
        modo.value=1
    }
    else{
        idd -= 1
        servicios.value[idd]=servicio.value
        modo.value=1
    }
    
}

const editar = (idd,param) => {
    if(param=='servicio'){
        
        idd -= 1
        modo.value = 2
        servicio.value = servicios.value[idd]
    }
    else{
        
        idcat.value = idd-1
        modo.value = 5
        servicio.value = cServicios.value[idcat.value]
        
        
    }
}

const recibirid = (idc) => {id.value=idc}



  return {servicio,cServicios,servicios,id,modo,abrirAñadir,cancelar,actualizar,editar,recibirid,eliminar,añadir}
})
