import Vue from 'vue'

// 1安装Vuex /* npm i vuex */

//2 引入vuex
import Vuex from 'vuex'
import cart from './cart';
//3 引用vuex
Vue.use(Vuex)

// 4.创建实例 store
const store = new Vuex.Store({
    modules: {
        cart
    },
    state: {
        // 相当于实例里面的data属性
        cartList: [],

    },

    getters: {


    },
    mutations: {


    },
    actions: {

    }


})

export default store