import {defineStore} from "pinia";
import {ref} from "vue";

export const useUsuarioStore = defineStore('UsuarioStore', () => {
    const usuario = ref({ correo: null, contrasena: null, _token: null });

    function closeSession() {
        window.localStorage.clear();
        usuario.value = { correo: null, contrasena: null, _token: null };
    }

    function setUser(user) {
        window.localStorage.clear();
        usuario.value = {
            user: user,
            contrasena: contrasena, 
            _token: token
        };
    }
    return {usuario, closeSession, setUser}
}, 
{persist: true})