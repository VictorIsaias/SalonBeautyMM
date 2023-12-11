import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  PiniaPluginPersistedState from 'pinia-plugin-persistedstate'
const pinia=createPinia();
pinia.use(PiniaPluginPersistedState)
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
})


import App from './App.vue'
import router from './router'

const app = createApp(App).use(vuetify)


app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')
 