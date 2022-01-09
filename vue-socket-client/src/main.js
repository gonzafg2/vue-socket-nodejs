import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";

const socket = io("localhost:5000");

Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    store.commit("setSocket", this.$socket);
  },
  render: (h) => h(App),
}).$mount("#app");
