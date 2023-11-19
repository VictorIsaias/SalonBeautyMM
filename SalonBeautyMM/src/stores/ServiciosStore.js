import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const ServiciosStore = defineStore('id', () => {
  
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
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 30,
        precio: 70,
        catalogo: 1,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 2,
        nombre: 'Corte de caballero escolar',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 30,
        precio: 70,
        catalogo: 1,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 3,
        nombre: 'Diseño de uñas con acrilico',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 120,
        precio: 200,
        catalogo: 2,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 4,
        nombre: 'Diseño de uñas con gelish',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 180,
        precio: 500,
        catalogo: 2,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 5,
        nombre: 'Depilacion de rostro completo',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 30,
        precio: 200,
        catalogo: 3,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 6,
        nombre: 'Depilacion de ceja con cera',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 30,
        precio: 70,
        catalogo: 3,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 7,
        nombre: 'Maquillaje y peinado',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 0,
        precio: 450,
        catalogo: 4,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 8,
        nombre: 'Mechas',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 0,
        precio: 0,
        catalogo: 5,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 9,
        nombre: 'Luces',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 0,
        precio: 0,
        catalogo: 5,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 10,
        nombre: 'Tinte en cabello corto',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 60,
        precio: 180,
        catalogo: 6,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    },
    {
        id: 11,
        nombre: 'Corte de caballero escolar',
        descripcion: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.',
        duracion: 120,
        precio: 250,
        catalogo: 6,
        activo:true,
        imagen:'https://i.pinimg.com/564x/4c/8c/99/4c8c9925fc0a982c16925294f276f94a.jpg'
    }
  ])
  
  var seleccion = (id)=>{
    return servicios.value[id-1]
   
  }
   
    


  return { seleccion,cServicios,servicios }
})
