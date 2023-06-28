import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './components/pages/AppHome.vue'
import AppRegistration from './components/pages/AppRegistration.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/registration',
            component: AppRegistration
        }
    ]
});


export { router };