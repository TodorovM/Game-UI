import Vue from 'vue'
import Vuex from 'vuex'
import * as data from '../assets/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displayedItems: data.default.player,
    items: []
  },
  mutations: {
    // changeDisplayedItem(state, payload) {

    // },
    // fillData(state, payload) {

    // }
  },
  actions: {
    change({ commit }, payload) {
      commit.changeDisplayedItem(payload);
    },
    setData({ commit }, payload) {
      commit.fillData(payload);
    }
  }
})
