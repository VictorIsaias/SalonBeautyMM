import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index'

export const CalendarioStore = defineStore('cal', () => {

  var modocita=ref('')
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

  var eventos= ref([ ])


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


function agregarCita(fechaInicio,duracion,tipo,servi,catalogo,idserv){
  if(idserv==0){
 
    idserv=servCita.value[servCita.value.length-1].id+1
  }
  let titulo
  let size = false
  let dra = false
  
  if(tipo==1){
    tipo = 'bloqueado'
    titulo = 'Bloqueado'
    size = true
    dra = true
  }else{

      for(let i = 0;i<=servicios.value.length-1;i++){
      if(servicios.value[i].id==servi)
        titulo = servicios.value[i].nombre
      
       
      }
    tipo='cita'+catalogo
    }
  
    
   
       
      
      fechaInicio = new Date(fechaInicio)
      let fechaFin = fechaInicio.addMinutes(duracion)
      fechaInicio=fechaInicio.format('YYYY-MM-DD HH:mm')
      fechaFin=fechaFin.format('YYYY-MM-DD HH:mm')


   eventos.value.push({
      start: fechaInicio,
      end: fechaFin,
      title: titulo,
      content: '',
      class: tipo,
      resizable: size,
      draggable: dra,
      id: idserv
    })
    
    }
  
  
  




function leerCitas(){

 
    for(let o = 0;o<=servCita.value.length-1;o++){
      agregarCita(servCita.value[o].fechaServicio,servCita.value[o].duracion,servCita.value[o].tipo,servCita.value[o].idServicio,servCita.value[o].catalogo,servCita.value[o].id)

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
// inserciones en tabla de servicio-cita que van a enviar: precio, id servicio, fecha servicio, duracion (si su cita relacionada esta activa)

var servCita = ref([
  {
    id:1,
    idCita: 1,
    idServicio: 1,
    precio: 70,
    duracion: 30,
    fechaServicio:'2023-11-23 12:00',
    tipo: 0,
    catalogo: 1
  },
  {
    id:2,
    idCita: 1,
    idServicio: 4,
    precio: 500,
    duracion: 180,
    fechaServicio:'2023-11-23 12:30',
    tipo: 0,
    catalogo: 2
  },
  {
    id:3,
    idCita: 2,
    idServicio: 3,
    precio: 200,
    duracion: 120,
    fechaServicio:'2023-11-24 14:30',
    tipo: 0,
    catalogo: 2
  },
  {
    id:4,
    idCita: 2,
    idServicio: 5,
    precio: 200,
    duracion: 30,
    fechaServicio:'2023-11-24 16:30',
    tipo: 0,
    catalogo: 3
  },
  {
    id:5,
    idCita: 3,
    idServicio: 2,
    precio: 70,
    duracion: 30,
    fechaServicio:'2023-11-25 10:00',
    tipo: 0,
    catalogo: 1
  },
  {
    id:6,
    idCita: 4,
    idServicio: 6,
    precio: 70,
    duracion: 30,
    fechaServicio:'2023-11-23 9:30',
    tipo: 0,
    catalogo: 3
  },



  {
    id:7,
    idCita: 5,
    idServicio: 7,
    precio: 450,
    duracion: 30,
    fechaServicio:'2023-11-26 13:00',
    tipo: 0,
    catalogo: 4
  },
  {
    id:8,
    idCita: 6,
    idServicio: 8,
    precio: 0,
    duracion: 30,
    fechaServicio:'2023-11-25 15:30',
    tipo: 0,
    catalogo: 5
  },
  {
    id:9,
    idCita: 7,
    idServicio: 9,
    precio: 0,
    duracion: 30,
    fechaServicio:'2023-11-23 17:30',
    tipo: 0,
    catalogo: 5
  },
  {
    id:10,
    idCita: 8,
    idServicio: 10,
    precio: 180,
    duracion: 60,
    fechaServicio:'2023-11-24 8:30',
    tipo: 0,
    catalogo: 6
  },
  {
    id:11,
    idCita: 8,
    idServicio: 11,
    precio: 250,
    duracion: 120,
    fechaServicio:'2023-11-26 9:30',
    tipo: 0,
    catalogo: 6
  },

  {
    id:21,
    idCita:9,
    idServicio: 4,
    precio: 500,
    duracion: 180,
    fechaServicio:'2023-11-27 8:00',
    tipo: 0,
    catalogo: 1
  },
  {
    id:22,
    idCita: 9,
    idServicio: 7,
    precio: 450,
    duracion: 30,
    fechaServicio:'2023-11-29 9:00',
    tipo: 0,
    catalogo: 3
  },
  {
    id:23,
    idCita: 10,
    idServicio: 11,
    precio: 250,
    duracion: 120,
    fechaServicio:'2023-11-27 13:30',
    tipo: 0,
    catalogo: 2
  },
  {
    id:24,
    idCita: 11,
    idServicio: 4,
    precio: 500,
    duracion: 180,
    fechaServicio:'2023-11-28 16:30',
    tipo: 0,
    catalogo: 2
  },
  {
    id:25,
    idCita: 12,
    idServicio: 2,
    precio: 70,
    duracion: 30,
    fechaServicio:'2023-11-28 15:00',
    tipo: 0,
    catalogo: 1
  },
  {
    id:26,
    idCita: 12,
    idServicio: 6,
    precio: 70,
    duracion: 30,
    fechaServicio:'2023-11-27 15:30',
    tipo: 0,
    catalogo: 3
  },



  {
    id:27,
    idCita: 13,
    idServicio: 7,
    precio: 450,
    duracion: 30,
    fechaServicio:'2023-11-28 9:00',
    tipo: 0,
    catalogo: 4
  },
  {
    id:28,
    idCita: 13,
    idServicio: 8,
    precio: 0,
    duracion: 30,
    fechaServicio:'2023-11-28 9:30',
    tipo: 0,
    catalogo: 5
  },
  {
    id:29,
    idCita: 14,
    idServicio: 9,
    precio: 0,
    duracion: 30,
    fechaServicio:'2023-11-29 10:30',
    tipo: 0,
    catalogo: 5
  },
  {
    id:30,
    idCita: 14,
    idServicio: 10,
    precio: 180,
    duracion: 60,
    fechaServicio:'2023-11-29 11:00',
    tipo: 0,
    catalogo: 6
  },
  {
    id:31,
    idCita: 15,
    idServicio: 11,
    precio: 250,
    duracion: 120,
    fechaServicio:'2023-11-29 16:30',
    tipo: 0,
    catalogo: 6
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
    duracion: 30,
    precio: 450,
    catalogo: 4,

  },
{
    id: 8,
    nombre: 'Mechas',
    duracion: 30,
    precio: 0,
    catalogo: 5,

  },
{
    id: 9,
    nombre: 'Luces',
    duracion: 30,
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




var bloqueRespaldo = ''



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



  function editarCita(citaBloq){
    modocita.value='editar'

    flotante.value = !flotante.value
    cita.value={

    }

    //update de cita instantaneamente



  }


  function desactivarBloqueo(citaBloq){
    for(let i=0;i<=eventos.value.length-1;i++){
      if(eventos.value[i].id==citaBloq.id){
      
        eventos.value.splice(i,1)


      }


    }
        

    //update estado de cita 'bloqueo' al cerrar sesion


  }


  
  function abrirCrearcita(bloq){
   
    //Asignacion de valores globales de la funcion (dia, actual, bloque)

        bloque = bloq
        let dia = computed(()=>{if(bloq.getDay()==0){
        return 7
      }else {return bloq.getDay()}})

      let actual = (bloq.getHours()*60)+bloq.getMinutes()
        





//If si el modo es de crear cita

   if (modocita.value=='cita'){

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

//else if si el modo es de bloqueos

   else if (modocita.value=='bloq'){

    while(bloque.getMinutes()%30!=0){
      bloque = bloque.subtractMinutes(1)
    }
    agregarCita(bloque.format('YYYY-MM-DD HH:mm'),30,1,0,0,0)
    




   }

// else si no es ninguna (para cliente)


   else
  {

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

      modocita.value='cliente'
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

    
  }  }











  
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


  return {desactivarBloqueo,editarCita,leerCitas,eventos,modocita,preService,minimo,maximo,citas,activo,cancelar,espacio, leerBloqueos,bloqueos,actualizarCita,servs,crearSC,abrirCrearcita,enviarCita,modo, flotante ,cita,servCita,servicios}
})
