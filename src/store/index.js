import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portfoilos: []
  },
  mutations: {},
  actions: {
    fetchWorks({ commit }) {
      firebase
        .firestore()
        .collection(`users/`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => commit("", doc.data()));
        });
    }
  }
});
