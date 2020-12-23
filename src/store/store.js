import Vue from "vue";
import Vuex from "vuex";

import home from "./modules/home.js";
import categories from "./modules/categories.js";
import search from "./modules/search.js";
import show from "./modules/show.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: home,
    categories: categories,
    search: search,
    show: show
  }
});

export default store;
