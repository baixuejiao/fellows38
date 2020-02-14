import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前被选中的菜单项的信息
    curMenu: {
      name: '电影',
      bgColor: '#ff0000'
    }
  },
  mutations: {
    setCurMenu(state, data) {
      state.curMenu = data
    }
  },
  actions: {
  },
  modules: {
  }
})
