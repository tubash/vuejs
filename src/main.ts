import { createApp } from "vue";
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import HomeView from "@/views/HomeView.vue";
import MovieView from "@/views/MovieView.vue";

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: HomeView,
            name: 'HomeView'
        },
        { 
            path: '/movie/:id', 
            component: MovieView,
            name: 'MovieView'
        }
    ],
})

app.use(pinia)
app.use(router)
app.mount("#app");
