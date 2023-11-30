import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const PaginaStore = defineStore('pagina', () => {
  
  var estadonav = ref(1) //0 es sin sesion, 1 es cliente y 2 es admin
  var id = ref('')
  var correo = ref('')


// informacion de catalogos que se va a leer desde backend READ
// Consulta para ver todos los usuarios: id, nombre, apellidoP, apellidoM, telefono, correo, contrasena (que esten activos)


  var usuarios = ref([{
    id: 1,
    nombre: 'Grecia',
    apellidoP: 'Robles',
    apellidoM: 'Picazo',
    telefono: '871921123',
    correo: 'pica@gmail.com',
    contrasena: '12345678'
  },
  {
    id: 2,
    nombre: 'Melany',
    apellidoP: 'Landeros',
    apellidoM: 'Fernandez',
    telefono: '871921123',
    correo: 'mely@gmail.com',
    contrasena: '1234'
  },
  {
    id: 3,
    nombre: 'Victor',
    apellidoP: 'Cabello',
    apellidoM: 'Rodriguez',
    telefono: '871921123',
    correo: 'miller@gmail.com',
    contrasena: '1234'
  }
])


  return {id,usuarios,estadonav,correo}
})

