import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import NotFound from "../components/NotFound.vue";
import About from "../components/About.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/projects',
        redirect: () => {
            window.location.href = 'https://github.com/faridrasidov?tab=repositories';
        },
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
