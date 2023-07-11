import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './components/pages/AppHome.vue'
import AppRegistration from './components/pages/AppRegistration.vue';
import AppDetailsProduct from './components/pages/AppDetailsProduct.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/MyTestFrontEnd/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/MyTestFrontEnd/registration',
            component: AppRegistration
        },
        {
            path: '/MyTestFrontEnd/product',
            component: AppDetailsProduct
        }
    ]
});


export { router };