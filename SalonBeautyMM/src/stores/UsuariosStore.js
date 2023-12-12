import {defineStore} from "pinia";
import {ref} from "vue";

export const useUsuarioStore = defineStore('UsuarioStore', () => {
    const usuario = ref({usuario: {correo: null}, _token: null})

    var estadonav = ref(0)
    var ID =ref(0)

    if(usuario.value._token){
        estadonav.value=1
    }

    function closeSession() {
        window.localStorage.clear();
        usuario.value = {usuario: {correo: null}, _token: null}
    }

    function setUser(user) {
        window.localStorage.clear();
        let u = {...usuario.value, ...user}
        usuario.value = u;
        ID.value=usuario.value.usuario.id
        
        estadonav.value=1
    }
    return {ID,usuario, closeSession, setUser,estadonav}
}, 
{persist: true})