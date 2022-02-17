import { createStore } from 'vuex'

export default createStore({
  state: {
    sailors: [],
  },
  getters: {
    sailors: state => state.sailors 
  },
  mutations: {
    setSailors : (state, sailors) => {
      state.sailors = sailors
    },
  },
  actions: {
  }
})
