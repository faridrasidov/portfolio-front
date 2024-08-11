import { createApp } from 'vue'
import App from './App.vue'
import './global.css';
import './assets/css/tailwind.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')