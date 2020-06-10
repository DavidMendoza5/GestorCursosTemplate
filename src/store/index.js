import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module'
import { authEs } from './auth.student.module'

Vue.use(Vuex)

export default new Vuex.Store({
    /*state: {
    },
    mutations: {
    },
    actions: {
    },*/
    modules: {
        auth,
        authEs
    }
})