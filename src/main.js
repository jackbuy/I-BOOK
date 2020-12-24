import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import storage from '@/utils/storage'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    // 是否需要tabbar
    if (to.meta.requireTabBar) {
        store.commit('SHOW_TAB_BAR', true)
    } else {
        store.commit('SHOW_TAB_BAR', false)
    }
    // 判断该路由是否需要登录权限
    if (to.meta.requireAuth) {
        if (storage.get('accessToken')) {
            next()
        } else {
            storage.set('loginAfterUrl', to.fullPath)
            // 跳转到登录页面
            next({ path: '/login', replace: true })
        }
    } else {
        next()
    }
})

router.afterEach((to, from) => {
    window.scrollTo(0, 0)
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
