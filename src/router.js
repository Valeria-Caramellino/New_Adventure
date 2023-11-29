import { createRouter, createWebHistory } from "vue-router";


//importiamo elementi
import AppHome from './pages/AppHome.vue';
import AppLoading from './pages/AppLoading.vue';
import AppDied from './pages/AppDied.vue';
import AppPlay from './pages/AppPlay.vue';

//costruisco la costante router
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component: AppHome
        },
        {
            path:'/loading',
            name:'loading',
            component: AppLoading
        },
        {
            path:'/died',
            name:'died',
            component: AppDied
        },
        {
            path:'/play',
            name:'play',
            component: AppPlay
        }
    ]
});
export { router };