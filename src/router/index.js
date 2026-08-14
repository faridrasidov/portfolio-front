import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import NotFound from "../components/NotFound.vue";

const HOME_SEO = {
    title: 'Farid Rashidov | Backend Developer & Security Engineer',
    description: 'Farid Rashidov is a backend developer and security-focused API tester building Python backends, Telegram bots, and resilient API systems.',
    robots: 'index, follow',
    canonical: 'https://im.xakep.ir/',
};

const NOT_FOUND_SEO = {
    title: 'Page Not Found | Farid Rashidov',
    description: 'The requested page could not be found.',
    robots: 'noindex, follow',
    canonical: null,
};

const routes = [
    {
        path: '/',
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
        path: '/:pathMatch(.*)*',
        component: NotFound,
        meta: NOT_FOUND_SEO,
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

const setMetaContent = (name, content) => {
    const element = document.head.querySelector(`meta[name="${name}"]`);
    if (element) {
        element.setAttribute('content', content);
    }
};

const setCanonical = (url) => {
    const existingCanonical = document.head.querySelector('link[rel="canonical"]');

    if (!url) {
        existingCanonical?.remove();
        return;
    }

    const canonical = existingCanonical ?? document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);

    if (!existingCanonical) {
        document.head.appendChild(canonical);
    }
};

router.afterEach((to) => {
    const seo = to.meta;

    document.title = seo.title ?? HOME_SEO.title;
    setMetaContent('description', seo.description ?? HOME_SEO.description);
    setMetaContent('robots', seo.robots ?? HOME_SEO.robots);
    setCanonical(seo.canonical ?? null);
});

export default router;
