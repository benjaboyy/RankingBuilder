import './assets/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/bootstrap.js'

createApp(App)
    .use(router)
    .mount('#app')
