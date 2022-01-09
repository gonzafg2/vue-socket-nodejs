<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>Hola Mundo - {{ count }}</h1>
    <button @click="socket_message">COUNT</button>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapActions(["socket_message"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
