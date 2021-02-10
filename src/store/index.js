import Vue from 'vue'
import Vuex from 'vuex'

import { searchForArticlesByName } from '@/services/search'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async searchForArticlesByName ({ commit }, name) {
      try {
        const { data } = await searchForArticlesByName(name)
        commit('SET_CONTENT', data)
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {
    content (state) {
      return state.content
    }
  },

  mutations: {
    SET_CONTENT (state, data) {
      state.content = data
    }
  },

  state: {
    content: null
  }
})
