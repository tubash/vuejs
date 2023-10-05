import { createRouter, createWebHistory } from 'vue-router';

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

export default router;
