

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueMask from '@devindex/vue-mask';

const vuetify = createVuetify({
  components,
  directives,
})


import App from './App.vue'
import router from './router'

const app = createApp(App).use(vuetify)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(createPinia())
app.use(router)
app.use(VueMask);
app.use(vuetify)

app.mount('#app')
 