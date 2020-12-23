import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import SearchPage from "./SearchPage.vue";
import Showpage from "./ShowPage.vue";
import MostPopular from "./MostPopular.vue";
import Newest from "./Newest.vue";
import RecentlyUpdated from "./RecentlyUpdated.vue";
import Vuex from "vuex";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: "/", component: Home },
  { path: "/search", component: SearchPage },
  { path: "/show/:id", component: Showpage },
  { path: "/most-popular", component: MostPopular },
  { path: "/newest", component: Newest },
  { path: "/recently-updated", component: RecentlyUpdated }
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
