import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    io: {},
    count: 0,
  },
  mutations: {
    setSocket(state, socket) {
      state.io = socket;
      console.log("Socket Conectado: ", socket);
    },
    SOCKET_MSG(state, payload) {
      console.log("SOCKET_MSG desde Vuex", payload);
      state.count = payload;
    },
  },
  actions: {
    socket_message: ({ state }) => {
      // commit("SOCKET_MSG");
      state.io.emit("message", state.count);
      console.log("Action desde Vuex: ", state.count);
    },
  },
  modules: {},
});
