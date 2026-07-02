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
        redirect: '/#projects',
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }

        return {top: 0};
    },
});

export default router;
