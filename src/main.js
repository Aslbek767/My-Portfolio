import './assets/main.css'
import './assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui/es/preset';
import Aos from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

Aos.init()
app.use(router)
app.use(naive)
app.mount('#app')
