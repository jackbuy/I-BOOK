import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/layout/index.vue'

Vue.use(VueRouter)

const routes = [
    // 首页
    {
        path: '',
        component: Layout,
        children: [
            // 首页
            {
                path: '/',
                name: 'home',
                component: () => import('../views/home/index.vue'),
                meta: {}
            },
            // 搜索
            {
                path: '/search',
                name: 'search',
                component: () => import('../views/search/index.vue'),
                meta: {}
            },
            // 书架
            {
                path: '/book',
                name: 'book',
                component: () => import('../views/book/index.vue'),
                meta: {}
            },
            // 我的
            {
                path: '/my',
                name: 'my',
                component: () => import('../views/my/index.vue'),
                meta: {}
            },
            // 设置
            {
                path: '/setting',
                name: 'setting',
                component: () => import('../views/setting/index.vue'),
                meta: {}
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
