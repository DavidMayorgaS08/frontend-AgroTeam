import { createApp } from 'vue'
import './style.css'
import { router } from './routes/routes.js'
import { createPinia } from 'pinia'
import  piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Quasar)


app.mount('#app')

