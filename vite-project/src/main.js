import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

// Views
import Home from './views/Home.vue'
import Details from './views/Details.vue'


// Config

const routes = [
    { path: '/', component: Home },
    { path: '/details/:id', component: Details, props:true}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

createApp(App).use(router).mount('#app')
