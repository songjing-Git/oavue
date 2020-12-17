import Vue from 'vue'
import Router from 'vue-router'
import routers from "./routers";

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                title: '登录',
                hideInMenu: true,
            },
            component:()=>import('../views/Login')
        },
        {
            path: '/home',
            name:'home',
            meta: {
                hideInMenu: true,
                notCache: true,
                title: '首页',
                icon: 'md-home'
            },
            component:()=>import('../views/Home'),
            children:routers
        },
    ]
})
