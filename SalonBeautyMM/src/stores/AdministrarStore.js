import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const AdministrarStore = defineStore('admin', () => {
  
    
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


const cServicios = ref([
    {
    id: 1,
    nombre: 'Corte de Cabello',
    descripcion: 'Luce espectacular con un nuevo y grandioso corte de cabello...',
    imagen:'https://media.istockphoto.com/id/638948482/es/foto/peluquer%C3%ADa-en-acci%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=CJtYfp7nx0yd9w90OHzt8aYHlOTuCPZ_URw2JwS3taM=',
    },
    {
    id: 2,
    nombre: 'Aplicación de uñas',
    descripcion: 'Disfruta de una excelente manicura...',
    imagen: 'https://www.rbs-nails-academy.com.ar/wp-content/uploads/2020/11/Curso-Unas-Esculpidas-en-Acrilico-2--e1605812147470.jpg',
    },
    {
    id: 3,
    nombre: 'Depilación',
    descripcion: 'Luce una piel extra limpia y saludable con nuestros servicios de depilación...',
    imagen: 'https://tse2.explicit.bing.net/th?id=OIP.mTHE9F90IPtfFHJ4f59CeAHaEK&pid=Api&P=0&h=180',
    },
    {
    id: 4,
    nombre: 'Maquillaje y peinado',
    descripcion: 'Luce increible para tu evento o tu día especial...',
    imagen: 'https://www.hogarmania.com/archivos/201703/belleza-maquillaje-novia-2-XxXx80.jpg',
    },
    {
    id: 5,
    nombre: 'Trabajos de color',
    descripcion: 'Trabajos desde ballagaye hasta mechas...',
    imagen: 'https://www.instyle.es/medio/2020/12/11/color-melting_74fe8f06_900x1125.jpg',
    },
    { 
    id: 6,
    nombre: 'Aplicación de tinte',
    descripcion: 'Atrevete a un cambio de look para sorprender...',
    imagen: 'https://tse1.explicit.bing.net/th?id=OIP.F9kP86vPI4gz4grSi2pYaQHaE8&pid=Api&P=0&h=180',
    },
    
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








const añadir = async (param) => {
    try {
        if (param) {
            servicio.value.catalogo = id.value;
            servicio.value.id = cServicios.value.length + 1;
            await servicios.crear_servicio(servicio.value);
        } else {
            servicio.value.catalogo = id.value;
            servicio.value.id = servicios.value.length + 1;
            await servicios.crear_servicio(servicio.value);
        }

        servicios();
        modo.value = 1;
    } catch (error) {
        console.error("Error al agregar el servicio:", error);
    }
};

const editarU = (idd, param) => {
    if (param === 'usuario') {
        idd -= 1
        modo.value = 2
        servicio.value = { ...servicios.value[idd] }
    } else {
        idcat.value = idd - 1
        modo.value = 5
        servicio.value = { ...cServicios.value[idcat.value] }
    }
}

const recibirid = (idc) => {id.value=idc}



  return {servicio,cServicios,servicios,id,modo,abrirAñadir,cancelar,actualizar,editar,recibirid,eliminar,añadir,editarU}
})
