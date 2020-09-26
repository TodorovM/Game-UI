import Vue from 'vue'
import Vuex from 'vuex'
import * as data from '../assets/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displayedItems: data.default.player.inventoryitems,
    items: data.default.player.inventoryitems,
    itemPositions: data.default.player.inventoryview.layout,
    size: {
      width: data.default.player.inventoryview.width,
      height: data.default.player.inventoryview.height
    },
    filteredBy: 'all'
  },
  mutations: {
    filterItems(state, payload) {
      state.filteredBy = payload;
      if (payload === 'all') state.displayedItems = state.items;
      else state.displayedItems = state.items.filter(r => r.type === payload)
    },
    // fillData(state, payload) {

    // }
  },
  actions: {
    change({ commit }, payload) {
      commit('filterItems', payload)
    },
    setData({ commit }, payload) {
      commit.fillData(payload);
    }
  }
})
