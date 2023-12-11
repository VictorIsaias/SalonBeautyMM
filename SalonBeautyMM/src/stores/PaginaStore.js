import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const PaginaStore = defineStore('pagina', () => {

  var estadonav = ref(1) //0 es sin sesion, 1 es cliente y 2 es admin
  var id = ref('')
  var user = ref('')

  // informacion de catalogos que se va a leer desde backend READ
  // Consulta para ver todos los usuarios: id, nombre, apellidoP, apellidoM, telefono, correo, contrasena (que esten activos)

  var usuarios = ref([])
  const respuesta = async () => {
    try {
      const reponse = await fetch('http://localhost/usuarios');
      const data = await reponse.json();
      usuarios.value = data.data;
    } catch {

    }
  }

  onMounted(respuesta);


  return { id, usuarios, estadonav, user }

})

export const useUsuarioStore = defineStore('UsuarioStore', () => {
  const usuario = ref({ usuario: {email_usuario: null,},  _token: null });
  const actividadUsuario = ref([]);
  const historialCompras = ref([]);
  const sessions = {};

  function startSession(userId) {
    const sessionId = generateUniqueId();
  
    sessions[sessionId] = {
      userId,
    };
  
    return sessionId;
  }

  function getSessionsInfo(sessionId) {
    return sessions[sessionId] || null;
  }

  const storedCompras = localStorage.getItem('historialCompras');
  if (storedCompras) {
    historialCompras.value = JSON.parse(storedCompras);
  }

  const usuarioActualId = ref(null);

  function setUsuarioActualId(id) {
    usuarioActualId.value = id;
  }
  function obtenerIdUsuario() {
    return usuarioActualId.value;
  }

  function closeSession() {
    window.localStorage.clear();
    usuario.value = { usuario: {email_usuario: null,},  _token: null };
    usuarioActualId.value = null;
  }

  function setUser(user) {
    window.localStorage.clear();
    let u = { ...usuario.value, ...user };
    usuario.value = u;
    actividadUsuario.value.push({ timestamp: Date.now(), accion: 'Inicio de sesion' });
  }

  function eliminarCompra(index) {
    historialCompras.value.splice(index, 1);
    localStorage.setItem('historialCompras', JSON.stringify(historialCompras.value));
  }

  function agregarCompra(compra) {
    historialCompras.value.push({ timestamp: Date.now(), compra });
    localStorage.setItem('historialCompras', JSON.stringify(historialCompras.value));
  }

  return {
    usuario,
    actividadUsuario,
    historialCompras,
    closeSession,
    setUser,
    agregarCompra,
    eliminarCompra,
    setUsuarioActualId,
    obtenerIdUsuario,
    startSession,
    getSessionsInfo,
    agregarProductoEnCompra,
    obtenerProductosEnCompra,
  };
}, { persist: true });