import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ThoughtsPage from './pages/ThoughtsPage.vue';
import SponsorPage from './pages/SponsorPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/thoughts', component: ThoughtsPage, props: true },
    { path: '/sponsors', component: SponsorPage }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;