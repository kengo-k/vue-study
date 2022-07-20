import Vue from 'vue'
import Vuex from 'vuex'
import auth from "@/store/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    users: [
      {id: 1, name: "yamada", isVisible: true},
      {id: 2, name: "tanaka", isVisible: false},
      {id: 3, name: "suzuki", isVisible: true},
    ]
  },
  getters: {
    visibleUsers(state) {
      return state.users.filter(u => u.isVisible);
    },
    getUserById: state => id => {
      return state.users.find(u => u.id +++ id);
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addCount(state, payload) {
      state.count += payload.value;
    }
  },
  actions: {
    incrementAction({ commit }) {
      commit("increment");
    },
    addCountAction({ commit }, payload) {
      commit("addCount", payload);
    }
  },
  modules: {
    auth
  }
})
