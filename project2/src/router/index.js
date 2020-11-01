import VueRouter from 'vue-router'
import Vue from 'vue'
import base11 from '../components/base11.vue'
import base22 from '../components/base22.vue'
import new1 from '../components/new1.vue'
import home from '../components/home.vue'
import task1 from '../components/task1.vue'
import task2 from '../components/task2.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/text1',
        component: base11
    },
    {
        path:'/text2',
        component: base22
    },
    {
        path:'/text3',
        component: new1
    },
    {
        path:'/home',
        component: home
    },
    {
        path:'/task1',
        component: task1
    },
    {
        path:'/task2',
        component: task2
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router