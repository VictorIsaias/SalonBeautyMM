import {defineStore} from "pinia";
import {ref} from "vue";

export const useUsuarioStore = defineStore('UsuarioStore', () => {
        const usuario = ref({usuario: {user: null,id:null,id_rol: null}, _token: null})

    var estadonav = ref(0)
    var ID =ref(usuario.value.usuario.id)

    usuario.value._token = localStorage.getItem('_token');
    usuario.value.usuario.nombre = localStorage.getItem('nombre');
    usuario.value.usuario.apellido_paterno = localStorage.getItem('apellido_paterno');
    usuario.value.usuario.apellido_materno = localStorage.getItem('apellido_materno');
    usuario.value.usuario.telefono = localStorage.getItem('telefono');
    usuario.value.usuario.user = localStorage.getItem('user');
    usuario.value.usuario.contrasena = localStorage.getItem('contrasena');
    usuario.value.usuario.id_rol = localStorage.getItem('id_rol');
    usuario.value.usuario.id = localStorage.getItem('id');

    if(usuario.value._token){
        estadonav.value=1
        if(usuario.value.usuario.id_rol==2){
            estadonav.value=2
        }
    }

    function closeSession() {
        window.localStorage.clear();
        usuario.value = {usuario: {user: null,id_rol: null}, _token: null}
        estadonav.value=0
    }

    function setUser(user) {
        window.localStorage.clear();
        localStorage.setItem('_token',user._token);
        localStorage.setItem('nombre',user.usuario.nombre);
        localStorage.setItem('apellido_paterno',user.usuario.apellido_paterno);
        localStorage.setItem('apellido_materno',user.usuario.apellido_materno);
        localStorage.setItem('telefono',user.usuario.telefono);
        localStorage.setItem('user',user.usuario.user);
        localStorage.setItem('contrasena',user.usuario.contrasena);
        localStorage.setItem('id_rol',user.usuario.id_rol);
        localStorage.setItem('id',user.usuario.id);        
        let u = {...usuario.value, ...user}
        usuario.value = u;
        ID.value=usuario.value.usuario.id
        estadonav.value=1
        if(usuario.value.usuario.id_rol==2){
            estadonav.value=2
        }
    }
    return {ID,usuario, closeSession, setUser,estadonav}
}, 
{persist: true})
