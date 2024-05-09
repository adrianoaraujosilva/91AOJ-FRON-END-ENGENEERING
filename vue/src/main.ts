import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/styles/main.css'

const app = createApp(App)

app.use(router).use(createPinia()).mount('#app')
