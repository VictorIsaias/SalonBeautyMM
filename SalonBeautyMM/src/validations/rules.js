
const rules = {
  max: (v,a) =>{if(v){ v.length <= a || `Maximo de ${a} caracteres`}},
  max30: (v) => v.length <= 30 || `Maximo de 30 caracteres`,
    treinta: value => value%30==0 || 'Valor invalido',
    numero: value => value>0 || 'Valor invalido',
    requerido: value => !!value || 'Campo requerido',
    correo: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Correo no valido'},
    min: v => v.length >= 8 || 'Minimo de 8 caracteres',
    mintel: v => v.length >= 17 || 'Minimo de 12 digitos',
    correoval: (v,usuarios) => {
      for(let i = 0;i<usuarios.length;i++){
  
      if (v==usuarios[i].user){
        
        return 'Correo ya registrado'
      }
    }},
    correoval2: (v,usuarios) => {
     /* for(let i = 0;i<usuarios.length;i++){
  
      if (v==usuarios[i].user&&){
        
        return 'Correo ya registrado'
     } }*/
    }
  
}

export default rules