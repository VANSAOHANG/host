import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//export store module
export default () =>
  new Vuex.Store({
    state: {},
    mutations: {},
  });
