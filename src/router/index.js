import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/list',
        name: 'list',
        component: () => import(/* webpackChunkName: "submit" */ '../views/ListView.vue')
    },
    {
        path: '/submit',
        name: 'submit',
        component: () => import(/* webpackChunkName: "submit" */ '../views/SubmitView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router