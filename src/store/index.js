import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 是否显示tabbar
export const SHOW_TAB_BAR = 'SHOW_TAB_BAR'

export default new Vuex.Store({
    state: {
        showTabbar: false
    },
    mutations: {
        [SHOW_TAB_BAR](state, payload) {
            state.showTabbar = payload
        }
    },
    actions: {
    },
    modules: {
    }
})
