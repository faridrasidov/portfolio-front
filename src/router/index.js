import Home from '../components/Home.vue';
import ProjectView from "../components/ProjectView.vue";
import NotFound from "../components/NotFound.vue";

export const SITE_URL = 'https://im.xakep.ir';

export const HOME_SEO = {
    title: 'Farid Rashidov | Backend Developer & Security Engineer',
    description: 'Farid Rashidov is a backend developer and security-focused API tester building Python backends, Telegram bots, and resilient API systems.',
    robots: 'index, follow',
    canonical: `${SITE_URL}/`,
};

export const NOT_FOUND_SEO = {
    title: 'Page Not Found | Farid Rashidov',
    description: 'The requested page could not be found.',
    robots: 'noindex, follow',
    canonical: null,
};

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: HOME_SEO,
    },
    {
        path: '/about',
        redirect: {path: '/', hash: '#about'},
    },
    {
        path: '/projects',
        redirect: {path: '/', hash: '#projects'},
    },
    {
        path: '/projects/:id',
        name: 'ProjectView',
        component: ProjectView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: NOT_FOUND_SEO,
    }
];
