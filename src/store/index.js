import Vue from 'vue'
import Vuex from 'vuex'
import * as data from '../assets/data.json'
// import * as data from '../assets/bigData.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displayedItems: [],
    items: [],
    itemPositions: [],
    size: {
      width: data.default.player.inventoryview.width,
      height: data.default.player.inventoryview.height
    },
    categories: [],
    filteredBy: 'all',
    count: 0,
    fetchedAll: false
  },
  mutations: {
    filterItems(state, payload) {
      state.filteredBy = payload;
      if (payload === 'all') state.displayedItems = state.items;
      else state.displayedItems = state.items.filter(r => r.type === payload)
    },
    fillData(state) {
      if (state.count < data.default.player.inventoryitems.length) {
        state.items.push(data.default.player.inventoryitems[state.count]);
        state.itemPositions.push(data.default.player.inventoryview.layout[state.count]);

        state.count++;
      } else {
        state.fetchedAll = true
      }
    },
    changeFilter(state, payload) {
      state.filteredBy = payload;
    },
    createCategories(state) {
      state.categories = data.default.player.inventoryitems
                      .map(el => el.type)
                      .filter((el, index, self) => self.indexOf(el) === index)
    }
  },
  actions: {
    change({ commit }, payload) {
      commit('filterItems', payload)
      commit('changeFilter', payload)
    },
    getData({ commit, state, dispatch }) {
      commit('fillData');
      dispatch('change', state.filteredBy);
    
    },
    fillCategories({ commit }) {
      commit('createCategories')
    }
  }
})
