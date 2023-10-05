import { createApp } from "vue";
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            name: 'HomeView',
            component: () => import("@/views/HomeView.vue"),
        },
        { 
            path: '/movie/:id', 
            name: 'MovieView',
            component: () => import("@/views/MovieView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import("@/views/NotFound.vue"),
        },
    ],
})

app.use(pinia)
app.use(router)
app.mount("#app");
