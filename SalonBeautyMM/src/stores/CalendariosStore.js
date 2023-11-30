import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index'

export const CalendarioStore = defineStore('cal', () => {

  var modocita=ref('')
  var preService=ref('')
  var minimo=ref(8)
  var maximo=ref(20)
  var activo=ref([''])
  var bloque = ref('a')
  var modo = ref(1)
  var flotante = ref(false)
  var servs=ref([''])
  var contador=ref(0)

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
    id:9,
    fechaInicio: '2023-11-30 9:00',
    duracionTotal: 30,
    clienteId:9
  },
  {
    id:10,
    fechaInicio: '2023-11-30 10:30',
    duracionTotal: 90,
    clienteId:10
  },
  {
    id:11,
    fechaInicio: '2023-11-30 16:30',
    duracionTotal: 120,
    clienteId:11
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
  idserv=eventos.value[eventos.value.length-1].id+1
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
//Registros de Servicio-cita que se van a enviar
var SCita = ref([

])

function leerCitas(){
  eventos.value=[]

  let dutotal=0

 
  for(let o = 0;o<=servCita.value.length-1;o++){
    agregarCita(servCita.value[o].fechaServicio,servCita.value[o].duracion,servCita.value[o].tipo,servCita.value[o].idServicio,servCita.value[o].catalogo,servCita.value.length)
 
}

for(let i = 0;i<=citas.value.length-1;i++){
  for(let o = 0;o<=servCita.value.length-1;o++){
    if(citas.value[i].id==servCita.value[o].idCita){
      dutotal+=servCita.value[o].duracion
    }
  } 
  agregarCita(citas.value[i].fechaInicio,dutotal,2,'','t',eventos.value.length)
  dutotal=0

}
  
}



function agregarSCita (){

  let fecha =new Date(cita.value.fechaInicio)
  for(let i=1;i<=servs.value.length-1;i++){
    for(let o=0;o<=servicios.value.length-1;o++){
if(servs.value[i]==servicios.value[o].id){

  fecha=fecha.format('YYYY-MM-DD HH:mm')

  SCita.value.push({
    idCita: 0,
    idServicio: servs.value[i],
    precio: servicios.value[o].precio,
    duracion: servicios.value[o].duracion,
    fechaServicio:fecha,
    tipo: 0
  })
  fecha=new Date(fecha)
  fecha=fecha.addMinutes(servicios.value[o].duracion)


}
}}
}

var cliente=ref({
  id:0,
  nombre:'',
  apellido_paterno:'',
  apellido_materno:'',
  telefono:''
})

var clientes=ref([])

function crearEnviarCita(){
   if(servs.value.length>1){
  
  agregarSCita()

  let catalogo=0
  let id=0
  for(let o = 0;o<=SCita.value.length-1;o++){
    id=servCita.value.length+o
    
    for(let i = 0;i<=servicios.value.length-1;i++){
      if(servicios.value[i].id==SCita.value[o].idServicio){
        catalogo=servicios.value[i].catalogo
      }
    }
    agregarCita(SCita.value[o].fechaServicio,SCita.value[o].duracion,SCita.value[o].tipo,SCita.value[o].idServicio,catalogo,id)
    
  }

  
cliente.value.id=clientes.value.length


  cita.value.idCliente = cliente.value.id
  cita.value.tipo = 'cita'
//insert de servicio cita (no son los datos reales)
let catt=0
for(let o = 0;o<=SCita.value.length-1;o++){
  for(let i=0;i<=servicios.value.length-1;i++){
    if(servicios.value[i].id==SCita.value[o].idServicio){
      catt=servicios.value[i].catalogo
    }
  }
servCita.value.push({
  id:servCita.value.length,
  idCita: SCita.value[o].idCita,
  idServicio: SCita.value[o].idServicio,
  precio: SCita.value[o].precio,
  duracion: SCita.value[o].duracion,
  fechaServicio:SCita.value[o].fechaServicio,
  tipo: 0,
  catalogo: catt
})

}

//insert de cita

citas.value.push(cita.value)
  //insert de cliente nuevo con el objeto cliente
  clientes.value.push(cliente.value)

  leerCitas()
  crearSC(servs.value)
  alert('Su cita ha sido creada')
  cancelar('cerrar')
  
  modocita.value='cita'
  console.log(servCita.value)
  console.log(eventos.value)
}
else{
 alert('Selecciona al menos un servicio')
}
}


function enviarCita(idcliente){
  if(servs.value.length>1){
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
    id:28,
    idCita: 9,
    idServicio: 8,
    precio: 0,
    duracion: 30,
    fechaServicio:'2023-11-30 9:00',
    tipo: 0,
    catalogo: 5
  },
  {
    id:29,
    idCita: 10,
    idServicio: 9,
    precio: 0,
    duracion: 30,
    fechaServicio:'2023-11-30 10:30',
    tipo: 0,
    catalogo: 5
  },
  {
    id:30,
    idCita: 10,
    idServicio: 10,
    precio: 180,
    duracion: 60,
    fechaServicio:'2023-11-30 11:00',
    tipo: 0,
    catalogo: 6
  },
  {
    id:31,
    idCita: 11,
    idServicio: 11,
    precio: 250,
    duracion: 120,
    fechaServicio:'2023-11-30 16:30',
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

 
var largo=0
var espac=0
var duracionAct=ref(0)

  var espacio = ref(computed(()=>{
    
    if(bloque.value!='a'&&largo<servs.value.length){
      for(let o = 0;o<servicios.value.length;o++){
  

          if(servicios.value[o].id==servs.value[(servs.value.length-1)]){
          
            bloque.value = bloque.value.addMinutes(servicios.value[o].duracion)
            largo=servs.value.length
            
       }
      
      }

    let dia = computed(()=>{if(bloque.value.getDay()==0){
      return 7
     }else {return bloque.value.getDay()}})

     
     let actual = (bloque.value.getHours()*60)+bloque.value.getMinutes()
    

    let start=null

    let save=[]
    let menor=0

    for(let i=1;i<=bloqueos.value[dia.value].length-1;i++){
     
  
      if(bloqueos.value[dia.value][i].class=='bloqueado'){
      
      start=bloqueos.value[dia.value][i].from
      if(start>=actual){
        save.push(start-actual)

      }
      }
     menor=Math.min(...save)
    }
    if(menor==0){
      espac=0
      for(let o =actual;o<1200;o+=30)    {
        espac+=30
      }
      return espac
    }
    else{

      menor+=actual
    }
    
    if(menor>1200){
      
      espac=0
      for(let o =actual;o<1200;o+=30)    {
        espac+=30
      }
      return espac
    }
   
    if(menor>=actual){
      
      espac=0
      for(let o =actual;o<menor;o+=30)    {
        espac+=30
      }

      
      return espac
    }
   
    }
    else{
      largo=servs.value.length
      espac=espac+duracionAct.value
        return espac
      
        
      
      
    }
  }))


  var espacio2 = ref(computed(()=>{
    if(bloque.value!='a'&&largo<servs.value.length){
      
        for(let o = 0;o<servicios.value.length;o++){
    
  
            if(servicios.value[o].id==servs.value[(servs.value.length-1)]){
             
              bloque.value = bloque.value.addMinutes(servicios.value[o].duracion)
              largo=servs.value.length
            
         }
        
        }

    let dia = bloque.value.getDate()
    
     let actual = (bloque.value.getHours()*60)+bloque.value.getMinutes()
    
     let locEventos = ['']
     let s=''
     for(let i = 0;i<=eventos.value.length-1;i++){
      s=new Date(eventos.value[i].start)
       if(s.getDate()==dia){
        
         locEventos.push(eventos.value[i])
       }
 
     }


     if(locEventos.length==1){
      espac=0
      for(let i =actual;i<1200;i+=30)    {
        
        espac+=30

      }
    return espac
    }



    let start=null
    let save=[]
    let menor=0

    if(modocita.value=='editar'&&servs.value.length==1){
      locEventos=locEventos.filter(item => item.start !== bloque.value.format('YYYY-MM-DD HH:mm'))
    }
      for(let i=1;i<locEventos.length;i++){
        start=new Date(locEventos[i].start)
        start=(start.getHours()*60)+(start.getMinutes())
        if(start>=actual){
          save.push(start-actual)
  
  
        }
        
       menor=Math.min(...save)
      }
      menor+=actual
    
    
      for(let i=1;i<locEventos.length;i++){
        start=new Date(locEventos[i].start)
        start=(start.getHours()*60)+(start.getMinutes())
        if(start>=actual){
          save.push(start-actual)
  
  
        }
        
       menor=Math.min(...save)
      }
      menor+=actual
    

    
    if(menor>1200){
      espac=0
      for(let o =actual;o<1200;o+=30)    {
        espac+=30
      }
      return espac
    }

    

        
    if(menor>=actual){
      espac=0
      for(let o =actual;o<menor;o+=30)    {
        espac+=30
      }

      
      return espac
    }
   
      
      
    }
    else{
      largo=servs.value.length
      espac=espac+duracionAct.value
        return espac
      
        
      
      
    }
    

  }
  ))


  function editarCita(citaBloq){
    bloque.value=citaBloq
    modocita.value='editar'
    flotante.value = !flotante.value



    let dia = computed(()=>{if(citaBloq.getDay()==0){
      return 7
    }else {return citaBloq.getDay()}})

    let actual = (citaBloq.getHours()*60)+citaBloq.getMinutes()
    let clienteid=0
    

    for(let i=0;i<=citas.value.length-1;i++){
      if(citas.value[i].fechaInicio==citaBloq.format('YYYY-MM-DD HH:mm')){
        cliente=citas.value[i].idCliente
      }
    }
    for(let i=0;i<=clientes.value.length-1;i++){
      if(clientes.value[i].id==clienteid){
        cliente.value={
          id:clientes.value[i].id,
          nombre:clientes.value[i].nombre,
          apellido_paterno:clientes.value[i].apellido_paterno,
          apellido_materno:clientes.value[i].apellido_materno,
          telefono:clientes.value[i].telefono
        }
      }
    }
    bloqueRespaldo = bloque.value
    actualizarCita()

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

        bloque.value = bloq
        let dia = computed(()=>{if(bloq.getDay()==0){
        return 7
      }else {return bloq.getDay()}})

      let actual = (bloq.getHours()*60)+bloq.getMinutes()
        





//If si el modo es de crear cita


   if (modocita.value=='cita'){
    cliente.value={
      id:0,
      nombre:'',
      apPa:'',
      apMa:'',
      telefono:''
    }
    


    while(bloque.value.getMinutes()%30!=0){
    bloque.value = bloque.value.subtractMinutes(1)
  }


  servs.value =['']

     
  flotante.value = !flotante.value
  cita.value={
    costo: 0,
    fechaInicio:bloque.value.format('YYYY-MM-DD HH:mm'),
    fechaFin: '',
    idCliente:0,
    duracionTotal:0,
    tipo:'',
  }

  
  bloqueRespaldo = bloque.value
  
  actualizarCita()
   }

//else if si el modo es de bloqueos

   else if (modocita.value=='bloq'){

    while(bloque.value.getMinutes()%30!=0){
      bloque.value = bloque.value.subtractMinutes(1)
    }
    agregarCita(bloque.value.format('YYYY-MM-DD HH:mm'),30,1,0,0,0)
    
    //insert en servicio-cita (no son los datos verdaderos)
    servCita.value.push({
      id:servCita.value[servCita.value.length-1].id+1,
      idCita: 0,
      idServicio: 0,
      precio: 0,
      duracion: 30,
      fechaServicio:bloque.value.format('YYYY-MM-DD HH:mm'),
      tipo: 1,
      catalogo: 0
    })

    //insert en citas (sin id)
    citas.value.push(
      {
        id:citas.value[citas.value.length-1].id+1,
        fechaInicio: bloque.value.format('YYYY-MM-DD HH:mm'),
        duracionTotal: 30,
        clienteId:0
      }
    )




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


    while(bloque.value.getMinutes()%30!=0){
    bloque.value = bloque.value.subtractMinutes(1)
  }


  servs.value =['']

      modocita.value='cliente'
  flotante.value = !flotante.value
  cita.value={
    costo: 0,
    fechaInicio:bloque.value.format('YYYY-MM-DD HH:mm'),
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
  
 
  if (preService.value>0){

    
    servs.value.push(preService.value)
   
  }
  bloqueRespaldo = bloque.value
  actualizarCita()

    
  }  }











  
  function cancelar(cerrar){
    if(cerrar=='cerrar'){
      flotante.value = !flotante.value
      modocita.value='editar'
    }

    activo.value=['']
    
    for (let i =0;i<=servicios.value.length;i++){
      activo.value.push(true)
    }
    
    contador.value=0
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
    bloque.value=bloqueRespaldo
    cita.value.fechaInicio=bloque.value.format('YYYY-MM-DD HH:mm')
  }


  return {cliente,duracionAct,bloque,contador,agregarSCita,crearEnviarCita,espacio2,desactivarBloqueo,editarCita,leerCitas,eventos,modocita,preService,minimo,maximo,citas,activo,cancelar,espacio, leerBloqueos,bloqueos,actualizarCita,servs,crearSC,abrirCrearcita,enviarCita,modo, flotante ,cita,servCita,servicios}
})
