import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { createPinia } from 'pinia'


const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(bootstrap)
  .mount('#app')
