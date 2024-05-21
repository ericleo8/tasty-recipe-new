import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css"
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { createApp } from 'vue'
import {store} from './store/index'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js";