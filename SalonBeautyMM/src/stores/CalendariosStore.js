import { ref, computed ,onMounted} from 'vue'
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
  var diaminimo=ref(0)
  var id_cliente=ref(0)
  var citasBloq=ref([])

  async function cancelar_cita(idact){
      let inst = {
      id:idact,
      estado:'cancelado'
    }
    await fetch('http://3.143.143.93/registro_citas/actualizar', {
      method: 'POST',
      body: JSON.stringify(inst),
  }).then(response => response.json())
      .then(responsej => {
          if (responsej.status != 200) {
              return
          }
  
  
      });
      leerCitas()
      flotante.value = !flotante.value
  }

  async function finalizar_cita(idact){

    let inst = {
      id:idact,
      estado:'completado'
    }
    await fetch('http://3.143.143.93/registro_citas/actualizar', {
      method: 'POST',
      body: JSON.stringify(inst),
  }).then(response => response.json())
      .then(responsej => {
          if (responsej.status != 200) {
              return
          }
  
  
      });

      leerCitas()
      flotante.value = !flotante.value
  }

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

])

const rClientes = async () => {
  try{
      const response = await fetch('http://3.143.143.93/usuarios');
      const data = await response.json();
      clientes.value=data.data;
      
  }catch{

  }
}

onMounted(rClientes);

const rCitas = async () => {
  try{
      const response = await fetch('http://3.143.143.93/citas_calendario');
      const data = await response.json();
      citas.value=data.data;
      
  }catch{

  }
}

onMounted(rCitas);

const rCitasBloq = async () => {
  try{
      const response = await fetch('http://3.143.143.93/citas_calendario_cliente');
      const data = await response.json();
      citasBloq.value=data.data;
      
  }catch{

  }
}

onMounted(rCitasBloq);



// informacion de Servicio-Cita que se va a enviar a backend CREATE
// inserciones en tabla de servicio-cita que van a enviar: precio, id servicio, fecha servicio, duracion (si su cita relacionada esta activa)

var servCita = ref([
  
])

const rServicioCita = async () => {
  try{
      const response = await fetch('http://3.143.143.93/servicio_citas_calendario');
      const data = await response.json();
      servCita.value=data.data;
  }catch{

  }
}

onMounted(rServicioCita);

// informacion de servicios que se va a leer desde backend READ
// Consulta para ver todos los servicios: id,nombre,duracion,precio,nombre-catalogo(que esten activos)


var servicios = ref([  ])


const rServicios = async () => {
  try{
      const response = await fetch('http://3.143.143.93/servicios_calendario');
      const data = await response.json();
      servicios.value=data.data;
      
  }catch{

  }
}

var serv_bloqueos = ref([  ])

const bloqueos_admin = async () => {
  try{
      const response = await fetch('http://3.143.143.93/servicio_bloqueos_calendario');
      const data = await response.json();
      serv_bloqueos.value=data.data;
      
  }catch{

  }
}

onMounted(rServicios);

onMounted(bloqueos_admin);

function agregarBloqueo(fechaInicio,duracion){

  let from = new Date(fechaInicio)
  let dia = from.getDay()
  if (dia==0){
    dia=7
  }
  from = from.getHours()
  let to = from+(duracion/60)
   bloqueos.value[dia].push({
     from: from*60,
     to: to*60,
     class:'bloqueado',
     label:'No disponible'
   })


}

async function leerBloqueos(){
  await rCitasBloq()
  await bloqueos_admin()
  let fech=''
  diaminimo.value=diaminimo.value+2
  for(let i = 0;i<=citasBloq.value.length-1;i++){
    fech=new Date(citasBloq.value[i].fechaInicio)
    
    if(fech.getDate()>=diaminimo.value&&fech.getDate()<diaminimo.value+7)
    agregarBloqueo(citasBloq.value[i].fechaInicio,citasBloq.value[i].duracionTotal)
  }
  for(let i = 0;i<=serv_bloqueos.value.length-1;i++){
  
    agregarBloqueo(serv_bloqueos.value[i].fechaServicio,serv_bloqueos.value[i].duracion)
  }
}


function agregarCita(fechaInicio,duracion,tipo,servi,catalogo,idserv){
 

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
      let fechaFin=''

      fechaFin = fechaInicio.addMinutes(duracion)
   
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

async function leerCitas(no){
  await rCitas()
  await rServicioCita()
  await bloqueos_admin()
  eventos.value=[]
  if(!no){
    
  modocita.value='cita'
  }



 
  for(let o = 0;o<=servCita.value.length-1;o++){
    agregarCita(servCita.value[o].fechaServicio,servCita.value[o].duracion,servCita.value[o].tipo,servCita.value[o].idServicio,servCita.value[o].catalogo,servCita.value[o].id)
 
}

for(let o = 0;o<=serv_bloqueos.value.length-1;o++){
  agregarCita(serv_bloqueos.value[o].fechaServicio,serv_bloqueos.value[o].duracion,serv_bloqueos.value[o].tipo,serv_bloqueos.value[o].idServicio,serv_bloqueos.value[o].catalogo,serv_bloqueos.value[o].id)

}

for(let i = 0;i<=citas.value.length-1;i++){
  agregarCita(citas.value[i].fechaInicio,citas.value[i].duracionTotal,2,'','t','100'+citas.value[i].id)
 

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
  telefono:'',
  user:''
})

var clientes=ref([])

async function crearEnviarCita(){
await rClientes()
   if(servs.value.length>1){

    
    SCita.value=[]
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

  
cliente.value.id=clientes.value.length+1


  cita.value.idCliente = cliente.value.id
  cita.value.tipo = 'cita'

if(modocita.value=='editar'){
  //update de servicio cita
 /* let catt=0
for(let o = 0;o<=SCita.value.length-1;o++){
  for(let i=0;i<=servicios.value.length-1;i++){
    if(servicios.value[i].id==SCita.value[o].idServicio){
      catt=servicios.value[i].catalogo
    }
  }

  for(let i = 0;i<=servCita.value.length-1;i++){
   
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
}

  //update de cita
  for(let i = 0;i<=eventos.value.length-1;i++){
  if(eventos.value[i].start==cita.value.fechaInicio&&eventos.value[i].class=='citat'){

      eventos.value[i].end=cita.value.fechaFin
    }
  }
  for(let i = 0;i<=citas.value.length-1;i++){
    if(citas.value[i].fechaInicio==cita.value.fechaInicio){
      citas.value[i]=cita.value
    }}   

  */
}
else{

  //insert de cliente nuevo con el objeto cliente
  let  inst0={
    nombre:cliente.value.nombre,
    apellido_paterno:cliente.value.apellido_paterno,
    apellido_materno:cliente.value.apellido_materno,
    user:cliente.value.user,
    contrasena:'',
    telefono:cliente.value.telefono
 }
 await fetch('http://3.143.143.93/registrar_usuario', {
  method: 'POST',
  body: JSON.stringify(inst0),
}).then(response => response.json())
  .then(responsej => {
      if (responsej.status != 200) {
          return
      }


  });
     
  //insert de cita
  let fActual = new Date()

    let  inst1={
      cliente:cita.value.idCliente,
      costo:cita.value.costo,
      fecha_hora_inicio:cita.value.fechaInicio,
      fecha_hora_fin:cita.value.fechaFin,
      duracion_total:cita.value.duracionTotal,
      estado:'confirmado',
      tipo:0,
      fecha_cita:fActual.format('YYYY-MM-DD HH:mm')
   }
 await fetch('http://3.143.143.93/crear_cita_calendario', {
    method: 'POST',
    body: JSON.stringify(inst1),
}).then(response => response.json())
    .then(responsej => {
        if (responsej.status != 200) {
            return
        }


    });

//insert de servicio cita 

let inst={}
for(let i=0;i<=SCita.value.length-1;i++){
 inst={
  id_servicio:SCita.value[i].idServicio,
  precio:SCita.value[i].precio,
  duracion_min:SCita.value[i].duracion,
  fecha_hora:SCita.value[i].fechaServicio,
  tipo:SCita.value[i].tipo
 }
  fetch('http://3.143.143.93/crear_sc_calendario', {
      method: 'POST',
      body: JSON.stringify(inst),
  }).then(response => response.json())
      .then(responsej => {
          if (responsej.status != 200) {
              return
          }
 

      });
    }



  
}


  leerCitas()
  servs.value=['']
  crearSC(servs.value)
  alert('Su cita ha sido creada')
  cancelar('cerrar')

  modocita.value='cita'
}
else{
 alert('Selecciona al menos un servicio')
}
}


async function enviarCita(idcliente){
  if(servs.value.length>1){
    cita.value.idCliente = idcliente
    cita.value.tipo = 'cita'
    crearSC(servs.value)

    SCita.value=[]
  agregarSCita()



    let fActual = new Date()

    let  inst1={
      cliente:id_cliente.value,
      costo:cita.value.costo,
      fecha_hora_inicio:cita.value.fechaInicio,
      fecha_hora_fin:cita.value.fechaFin,
      duracion_total:cita.value.duracionTotal,
      estado:'sin_confirmar',
      tipo:0,
      fecha_cita:fActual.format('YYYY-MM-DD HH:mm')
   }
   
 await fetch('http://3.143.143.93/crear_cita_calendario', {
    method: 'POST',
    body: JSON.stringify(inst1),
}).then(response => response.json())
    .then(responsej => {
        if (responsej.status != 200) {
            return
        }


    });

//insert de servicio cita 
let inst={}
for(let i=0;i<=SCita.value.length-1;i++){
 inst={
  id_servicio:SCita.value[i].idServicio,
  precio:SCita.value[i].precio,
  duracion_min:SCita.value[i].duracion,
  fecha_hora:SCita.value[i].fechaServicio,
  tipo:0
 }
  fetch('http://3.143.143.93/crear_sc_calendario', {
      method: 'POST',
      body: JSON.stringify(inst),
  }).then(response => response.json())
      .then(responsej => {
          if (responsej.status != 200) {
              return
          }
 

      });
    }




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

//largo es el respaldo de la longitud de servs 
  
var largo=0
var espac=0
var duracionAct=ref(0)



  var espacio = ref(computed(()=>{
    
  
    if(bloque.value!='a'&&largo<servs.value.length){

      //Añade a bloque la duracion de todos los elementos en serv

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

    if(menor==0&&bloqueos.value[dia.value].length==1){
      
    
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

      //Añade a bloque la duracion de todos los elementos en serv

        for(let o = 0;o<servicios.value.length;o++){
    
  
            if(servicios.value[o].id==servs.value[(servs.value.length-1)]){
             
              bloque.value = bloque.value.addMinutes(servicios.value[o].duracion)
              largo=servs.value.length
            
         }
        
        }

        //Dia actual del mes

    let dia = bloque.value.getDate()

    //Posicion actual en minutos
    
     let actual = (bloque.value.getHours()*60)+bloque.value.getMinutes()
    
    //LocEventos son todos los eventos del dia actual

     let locEventos = ['']
     let s=''
     for(let i = 0;i<=eventos.value.length-1;i++){
      s=new Date(eventos.value[i].start)
       if(s.getDate()==dia&&eventos.value[i].class!='citat'){
        
         locEventos.push(eventos.value[i])
       }
 
     }


     //Si no hay eventos en el dia actual el espacio llega hasta 1200
  

     if(locEventos.length==1){
      espac=0
      for(let i =actual;i<1200;i+=30)    {
        
        espac+=30

      }
    return espac
    }


    //Bloque de calculo del evento con menor valor en el dia
    //Menos es el evento con menor valor

    let start=null
    let save=[]
    let menor=0
 /*   if(modocita.value=='editar'&&servs.value.length==1){
      locEventos=locEventos.filter(item => item.start !== bloque.value.format('YYYY-MM-DD HH:mm'))
    }*/
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
      largo=0
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


  async function editarCita(citaBloq){

    await rClientes()
    await rCitas()
    bloque.value=citaBloq
    modocita.value='editar'
    
    flotante.value = !flotante.value

    cliente.value=[]
    servs.value=[]
    cita.value.fechaInicio=citaBloq.format('YYYY-MM-DD HH:mm')
     
    let dia = computed(()=>{if(citaBloq.getDay()==0){
      return 7
    }else {return citaBloq.getDay()}})

    let actual = (citaBloq.getHours()*60)+citaBloq.getMinutes()
    let clienteid=0
    

    for(let i=0;i<=citas.value.length-1;i++){
      
    if(citas.value[i].fechaInicio==(citaBloq.format('YYYY-MM-DD HH:mm')+':00')){
      
        clienteid=citas.value[i].clienteId
        cita.value.id=citas.value[i].id
        cita.value.fechaFin=citaBloq.addMinutes(citas.value[i].duracionTotal)

      for(let o=0;o<=servCita.value.length-1;o++){
          if(citas.value[i].id==servCita.value[o].idCita){
            servs.value.push(servCita.value[o].idServicio)
          }
        }
        
      }
    }
    
    for(let i=0;i<=clientes.value.length-1;i++){
      if(clientes.value[i].id==clienteid){
        cliente.value={
          id:clientes.value[i].id,
          nombre:clientes.value[i].nombre,
          apellido_paterno:clientes.value[i].apellido_paterno,
          apellido_materno:clientes.value[i].apellido_materno,
          telefono:clientes.value[i].telefono,
          user:clientes.value[i].user
        }
      }
    }
    bloqueRespaldo = bloque.value
    actualizarCita()

    //update de cita instantaneamente

   

  }


 async function desactivarBloqueo(citaBloq){
    for(let i=0;i<=eventos.value.length-1;i++){
      if(eventos.value[i].id==citaBloq.id){
     eventos.value.splice(i,1)
        
     let inst = {
      id:citaBloq.id,
      fecha_hora:'00/00/00 00:00'
    }
        await fetch('http://3.143.143.93/servicio_cita/actualizar', {
          method: 'POST',
          body: JSON.stringify(inst),
      }).then(response => response.json())
          .then(responsej => {
              if (responsej.status != 200) {
                  return
              }
      
      
          });


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
        
      if(modocita.value=='cita'||modocita.value=='bloq'){
      let locEventos = ['']
      let s=''
      let diames = bloque.value.getDate()
      for(let i = 0;i<=eventos.value.length-1;i++){
       s=new Date(eventos.value[i].start)
        if(s.getDate()==diames){
         
          locEventos.push(eventos.value[i])
        }
  
      }
    for(let i=0;i<=locEventos.length-1;i++){
      let start = new Date(locEventos[i].start)
      start =  (start.getHours()*60)+start.getMinutes()
      let end = new Date(locEventos[i].end)
      end =  (end.getHours()*60)+end.getMinutes()
      if(start<=actual&&end>actual){
  
        return
      }
    }
  }



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
    
 

    //insert en citas (sin id)

    
    let  inst1={
      id_servicio:null,
      precio:0,
        duracion_min:30,
        fecha_hora:bloque.value.format('YYYY-MM-DD HH:mm'),
        tipo:1
   }

  fetch('http://3.143.143.93/crear_sc_calendario', {
    method: 'POST',
    body: JSON.stringify(inst1),
}).then(response => response.json())
    .then(responsej => {
        if (responsej.status != 200) {
            return
        }


    });



leerCitas('no')
   }

// else si no es ninguna (para cliente)


   else
  {
    
    modocita.value='cliente'
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
      if(
        modocita.value!='cliente'){
      modocita.value='cita'
        }
    }

    activo.value=['']
    
    for (let i =0;i<=servicios.value.length;i++){
      activo.value.push(true)
    }
    
    contador.value=0
    if(cerrar=='editar'){


      largo=0
    servs.value=[""]
    if(bloque.value.format('YYYY-MM-DD HH:mm')==cita.value.fechaInicio){
      let fin =new Date(cita.value.fechaFin)
      fin = (fin.getHours()*60)+fin.getMinutes()
      let punto=new Date(cita.value.fechaInicio)
      punto=(punto.getHours()*60)+punto.getMinutes()
      let inicio=null
      let inicio2=null
      let fin2=null
      for(let i = 0;i<=eventos.value.length-1;i++){
        inicio=new Date(eventos.value[i].start)
        fin2=new Date(eventos.value[i].end)
        fin2=(fin2.getHours()*60)+fin2.getMinutes()

        if(fin2<=fin&&inicio.getDate()==bloque.value.getDate()&&eventos.value[i].class!='citat'){
         
          eventos.value.splice(i,1)
         i=0 
          }
      }
    }
    

    }
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


  return {cancelar_cita,finalizar_cita,id_cliente,diaminimo,cliente,duracionAct,bloque,contador,agregarSCita,crearEnviarCita,espacio2,desactivarBloqueo,editarCita,leerCitas,eventos,modocita,preService,minimo,maximo,citas,activo,cancelar,espacio, leerBloqueos,bloqueos,actualizarCita,servs,crearSC,abrirCrearcita,enviarCita,modo, flotante ,cita,servCita,servicios}
})
