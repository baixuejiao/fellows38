import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储数据
  state: {
    count: 1,
    num: 3
  },
  // 可以理解为计算属性
  getters: {
    result(state) {
      return state.count * state.num
    }
  },
  // 同步修改数据
  mutations: {
    add( state ) {
      state.count++
    },
    addFun( state, num) {
      state.count += num
    },
    reduce(state) {
      state.count--
    }
  },
  // 异步操作
  actions: {
    reduceFun({commit}) {
      setTimeout(() => {
        commit('reduce')
      }, 1000)
    }
  },
  modules: {
  }
})
