import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // importe la config du routeur
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)               // active vue-router dans l'app
app.mount('#app')