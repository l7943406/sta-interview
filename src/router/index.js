import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('./../view/login/index.vue')
const schedule = () => import('./../view/schedule/index.vue')

const router =  new Router({
    routes: [
        {
            //默认页面
            path: '',
            redirect: '/login'
        },
        {
            path: '/login',
            component: login,
        },
        {
            path: '/schedule',
            component: schedule,
        },{
            path: '*',
            redirect: '/login'
        }
    ]
})


export default router;