import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index'

export const CalendarioStore = defineStore('cal', () => {

  var preService=ref('')
  var minimo=ref(8)
  var maximo=ref(20)
  var activo=ref([''])
  var bloque = 'a'
  var modo = ref(1)
  var flotante = ref(false)
  var servs=ref([''])

// informacion de Citas que se va a leer desde backend READ
// Consulta para saber todos los bloqueos que tienen que mostrarse. id, fecha de inicio, duracion total (citas en una semana)

var bloqueos= ref({
  1: [''],
  2: [''],
  3: [''],
  4: [''],
  5: [''],
  6: [''],
  7: [''],

}
  )


var citas = ref([
  {
    id:1,
    fechaInicio: '2023-11-21 12:00',
    duracionTotal: 60
  },
  {
    id:2,
    fechaInicio: '2023-11-25 12:00',
    duracionTotal: 120
  },
  {
    id:3,
    fechaInicio: '2023-11-23 13:00',
    duracionTotal: 30
  },
  {
    id:4,
    fechaInicio: '2023-11-25 16:00',
    duracionTotal: 60
  },
  {
    id:5,
    fechaInicio: '2023-11-24 11:00',
    duracionTotal: 240
  },
  {
    id:6,
    fechaInicio: '2023-11-25 8:00',
    duracionTotal: 90
  },
  {
    id:7,
    fechaInicio: '2023-11-22 12:00',
    duracionTotal: 150
  },
  {
    id:8,
    fechaInicio: '2023-11-21 9:00',
    duracionTotal: 30
  }
])



function agregarBloqueo(fechaInicio,duracion){

  let from = new Date(fechaInicio)
  let dia = from.getDay()
  from = from.getHours()
  let to = from+(duracion/60)
   bloqueos.value[dia].push({
     from: from*60,
     to: to*60,
     class:'bloqueado',
     label:'No disponible'
   })


}

function leerBloqueos(){

  for(let i = 0;i<=citas.value.length-1;i++){
  
    agregarBloqueo(citas.value[i].fechaInicio,citas.value[i].duracionTotal)
  }
 
}




// informacion de Cita que se va a enviar a backend CREATE
// insercion en tabla de citas que va a enviar: costo, fecha inicio, fecha fin, id cliente, duracion

var cita = ref(
  {
    id:0,
    costo: 0,
    fechaInicio:'',
    fechaFin: '',
    idCliente:0,
    duracionTotal:0,
    tipo:'',
  }
)
function enviarCita(id,idcliente){
  if(servs.value.length>1){
    cita.value.id = id
    cita.value.idCliente = idcliente
    cita.value.tipo = 'cita'
  
    crearSC(servs.value)
    alert('Su cita ha sido creada')
    cancelar('cerrar')
    router.replace({ name: 'citas_cliente' })
  }
 else{
  alert('Selecciona al menos un servicio')
 }
}

function crearSC (ids){

}


// informacion de Servicio-Cita que se va a enviar a backend CREATE
// inserciones en tabla de servicio-cita que van a enviar: precio, id servicio, fecha servicio, duracion

var servCita = ref([
  {
    id:0,
    idCita: 0,
    idServicio: 0,
    precio: 0,
    duracion: 0,
    fechaServicio:''

  }
])

// informacion de servicios que se va a leer desde backend READ
// Consulta para ver todos los servicios: id,nombre,duracion,precio,nombre-catalogo(que esten activos)


var servicios = ref([
{
    id: 1,
    nombre: 'Cortes de caballero natural',
    duracion: 30,
    precio: 70,
    catalogo: 1,

  },
{
    id: 2,
    nombre: 'Corte de caballero escolar',
    duracion: 30,
    precio: 70,
    catalogo: 1,

  },
{
    id: 3,
    nombre: 'Diseño de uñas con acrilico',
    duracion: 120,
    precio: 200,
    catalogo: 2,

  },
{
    id: 4,
    nombre: 'Diseño de uñas con gelish',
    duracion: 180,
    precio: 500,
    catalogo: 2,

  },
{
    id: 5,
    nombre: 'Depilacion de rostro completo',
    duracion: 30,
    precio: 200,
    catalogo: 3,

  },
{
    id: 6,
    nombre: 'Depilacion de ceja con cera',
    duracion: 30,
    precio: 70,
    catalogo: 3,

  },
{
    id: 7,
    nombre: 'Maquillaje y peinado',
    duracion: 0,
    precio: 450,
    catalogo: 4,

  },
{
    id: 8,
    nombre: 'Mechas',
    duracion: 0,
    precio: 0,
    catalogo: 5,

  },
{
    id: 9,
    nombre: 'Luces',
    duracion: 0,
    precio: 0,
    catalogo: 5,

  },
{
    id: 10,
    nombre: 'Tinte en cabello corto',
    duracion: 60,
    precio: 180,
    catalogo: 6,

  },
{
    id: 11,
    nombre: 'Corte de caballero escolar',
     duracion: 120,
    precio: 250,
    catalogo: 6,


}
])

function leerServicios(){

}






  function actualizarCita(){
    for(let o = 0;o<servicios.value.length;o++){
      for(let i = 0;i<=servs.value.length;i++){
        if(servicios.value[o].id==servs.value[i]){
          cita.value.costo+=servicios.value[o].precio
          cita.value.duracionTotal+=servicios.value[o].duracion
        }
      }
    }
    cita.value.fechaFin=bloqueRespaldo.addMinutes(cita.value.duracionTotal).format('YYYY-MM-DD HH:mm')
  }



  var espacio = ref(computed(()=>{
    if(bloque!='a'){
      let subBloque=bloque
      for(let o = 0;o<servicios.value.length;o++){
      for(let i=0;i<=servs.value.length;i++)
      {

          if(servicios.value[o].id==servs.value[i]){
            subBloque = bloque.addMinutes(servicios.value[o].duracion)
        }
      }
      }
      bloque=subBloque




    let dia = computed(()=>{if(subBloque.getDay()==0){
      return 7
     }else {return subBloque.getDay()}})

     let espac=0
     let actual = (subBloque.getHours()*60)+subBloque.getMinutes()
    

    if(bloqueos.value[dia.value].from>=actual){
      for(let i =actual;i<bloqueos.value[dia.value].from;i+=30)    {
        espac+=30
      }

      
      return espac
    }
    else if(bloqueos.value[dia.value].to<=actual){
     for(let i =actual;i<1200;i+=30)    {
        espac+=30
      }
      
      return espac
    }


    for(let i=0;i<=bloqueos.value[dia.value].length-1;i++){
      
     if((bloqueos.value[dia.value][i].from>=actual&&bloqueos.value[dia.value][i].class=='bloqueado')||(bloqueos.value[dia.value][i].to<=actual&&bloqueos.value[dia.value][i].class=='bloqueado')){


      

        if(bloqueos.value[dia.value][i].from>=actual){
          for(let o =actual;o<bloqueos.value[dia.value][i].from;o+=30)    {
            espac+=30
          }
    
          
          return espac
        }
        else if(bloqueos.value[dia.value][i].to<=actual&&i==bloqueos.value[dia.value].length-1){
         for(let o =actual;o<1200;o+=30)    {
            espac+=30
          }
          
          return espac
        }
        
      }
    }

    

    }
  }))



  var bloqueRespaldo = ''
  function abrirCrearcita(bloq){
   


    bloque = bloq
    let dia = computed(()=>{if(bloq.getDay()==0){
    return 7
   }else {return bloq.getDay()}})

   let actual = (bloq.getHours()*60)+bloq.getMinutes()
    

   

      if(bloqueos.value[dia.value].from<=actual&&bloqueos.value[dia.value].to>actual){

        return

    }

    for(let i=0;i<=bloqueos.value[dia.value].length-1;i++){

      if(bloqueos.value[dia.value][i].from<=actual&&bloqueos.value[dia.value][i].to>actual){

        return
      }
    }

    
     




      while(bloque.getMinutes()%30!=0){
      bloque = bloque.subtractMinutes(1)
    }


    servs.value =['']
    flotante.value = !flotante.value
    cita.value={
      costo: 0,
      fechaInicio:bloque.format('YYYY-MM-DD HH:mm'),
      fechaFin: '',
      idCliente:0,
      duracionTotal:0,
      tipo:'',
    }
    servCita.value=[
      {
        idCita: 0,
        idServicio: 0,
        precio: 0,
        duracion: 0,
        fechaServicio:''

      }
    ]
    bloqueRespaldo = bloque
    if (preService.value>0){

      
      servs.value.push(preService.value)
    }
    actualizarCita()
  }


  function cancelar(cerrar){
    if(cerrar=='cerrar'){
      flotante.value = !flotante.value
    }

    activo.value=['']
    
    for (let i =0;i<=servicios.value.length;i++){
      activo.value.push(true)
    }
  

    servs.value=[""]
    cita.value={
      id:0,
      costo: 0,
      fechaInicio:'',
      fechaFin: '',
      idCliente:0,
      duracionTotal:0,
      tipo:'',
    }
    bloque=bloqueRespaldo
    cita.value.fechaInicio=bloque.format('YYYY-MM-DD HH:mm')
  }


  return {preService,minimo,maximo,citas,activo,cancelar,espacio, leerBloqueos,bloqueos,actualizarCita,servs,crearSC,abrirCrearcita,enviarCita,modo, flotante ,cita,servCita,servicios}
})
