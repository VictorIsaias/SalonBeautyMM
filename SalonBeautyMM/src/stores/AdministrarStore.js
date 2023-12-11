import { ref, computed,onMounted } from 'vue'
import { defineStore } from 'pinia'

export const AdministrarStore = defineStore('admin', () => {
  
    
    var modo = ref(1)
    var id = ref(1)
    var idcat = ref(0)



    var idContacto=ref()
    var contactoTemp=ref({
        nombre:'',
        valor:''
    })

 //Array de contactos especificos consultado

    var contacto = ref([
        871133113,871133113,871133113
    ])

    


   

var servicio = ref({
  id:'',
  nombre: '',
  descripcion: '',
  duracion_min: '',
  precio: '',
  categoria: '',
  activo:true,
  img:''
})

var direccion = ref({
    localidad:'',
    colonia:'',
    calle:'',
    num_ext:''
  })



  const cServicios = ref([])
  const respuesta = async () => {
      try{
          const respuesta = await fetch('http://3.143.143.93/categorias');
          const data = await respuesta.json();
          cServicios.value=data.data;
      }catch{

      }
      for(let i=0;i<=cServicios.value.length-1;i++){
        if(cServicios.value[i].activo==1){
            cServicios.value[i].activo=true
        }
        else if(cServicios.value[i].activo==0){
            cServicios.value[i].activo=false
        }
      }
  }

onMounted(respuesta);
var servicios = ref([])

const response = async ()=>{
  try{
      const respuesta = await fetch('http://3.143.143.93/servicios');
      const data = await respuesta.json();
      servicios.value=data.data;
    
  }catch{

  }
  for(let i=0;i<=servicios.value.length-1;i++){
    if(servicios.value[i].activo==1){
        servicios.value[i].activo=true
    }
    else if(servicios.value[i].activo==0){
        servicios.value[i].activo=false
    }
  }
}  


onMounted(response);

const abrirAñadir = (param)=>{
    if(param=='servicio'){
        servicio.value = {
            id:'',
            nombre: '',
            descripcion: '',
            duracion_min: '',
            precio: '',
            categoria: '',
            activo:true,
            img:''
            }  
            modo.value=3
    }
    else{
   

            servicio.value = {
                id:'',
                nombre: '',
                descripcion: '',
                activo:true,
                img:''
                }  
                modo.value=4
    }
     
    
    
}

var inst = {}

const eliminar = ()=>{
    alert(id.value)
    servicios.value.splice(id.value)
    modo.value=1
}

const añadir = async (param) =>{
    let inst = {}
    let activ
    if(servicio.value.activo==true){
        activ=1
    }
    else if (servicio.value.activo==false){
        activ=0
    }
    let url = ''
    const formData = new FormData();
    let imagen=servicio.value.img[0]
   
        formData.append('img', imagen);
   
   
    await fetch('http://localhost:3000/servicios', {
        method: 'POST',
        body: formData,
      }).then(response => response.text())
      .then(data => {
   
        url='http://localhost:3000/public/'+data
      })

    if (param){

 //enviar a servidor multer


        
        inst = {
            nombre:servicio.value.nombre,
            descripcion:servicio.value.descripcion,
                 img:url,
            activo:activ
        }
        await fetch('http://3.143.143.93/crear_categoria', {
  method: 'POST',
  body: JSON.stringify(inst),
}).then(response => response.json())
  .then(responsej => {
      if (responsej.status != 200) {
          return
      }


  });

    }
    else{
       
       
        
        servicio.value.categoria = id.value
        inst = {
            nombre:servicio.value.nombre,
            descripcion:servicio.value.descripcion,
            precio:servicio.value.precio,
            duracion_min:servicio.value.duracion_min,
            categoria:servicio.value.categoria,
            img:url,
            activo:activ
        }
        await fetch('http://3.143.143.93/crear_servicio', {
  method: 'POST',
  body: JSON.stringify(inst),
}).then(response => response.json())
  .then(responsej => {
      if (responsej.status != 200) {
          return
      }
    });
    }
    respuesta()
    response()
    modo.value=1
   
}
var editarimg=ref()

const cancelar = ()=> modo.value=1
const actualizar = async (idd,param)=>{
    let activ
    if(servicio.value.activo==true){
        activ=1
    }
    else if (servicio.value.activo==false){
        activ=0
    }

    if(editarimg.value!=''){
        const formData = new FormData();
        let imagen=editarimg.value[0]
    
            formData.append('img', imagen);
    
    
        await fetch('http://localhost:3000/servicios', {
            method: 'POST',
            body: formData,
        }).then(response => response.text())
        .then(data => {
    
            servicio.value.img='http://localhost:3000/public/'+data
        })
    }

    if(param=='param'){
        let inst = {
            id:servicio.value.id,
            descripcion:servicio.value.descripcion,
            nombre:servicio.value.nombre,
            img:servicio.value.img,
            activo:activ
          }
          await fetch('http://3.143.143.93/categoria/actualizar', {
            method: 'POST',
            body: JSON.stringify(inst),
        }).then(response => response.json())
            .then(responsej => {
                if (responsej.status != 200) {
                    return
                }
        
        
            });
       
       
       
    }
    else{
        

        let inst = {
            id:servicio.value.id,
            descripcion:servicio.value.descripcion,
            nombre:servicio.value.nombre,
            activo:activ,
            precio:servicio.value.precio,
             img:servicio.value.img,
            duracion_min:servicio.value.duracion_min
          }
          await fetch('http://3.143.143.93/servicio/actualizar', {
            method: 'POST',
            body: JSON.stringify(inst),
        }).then(response => response.json())
            .then(responsej => {
                if (responsej.status != 200) {
                    return
                }
        
        
            });
       
       
    }
    modo.value=1
    respuesta()
    response()
}

const editar = (idd,param) => {
    editarimg.value=''
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



  return {editarimg,contactoTemp,idContacto,contacto,direccion,servicio,cServicios,servicios,id,modo,abrirAñadir,cancelar,actualizar,editar,recibirid,eliminar,añadir}
})
