<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
import router from './router'
import { mapGetters } from 'vuex';
  export default {
    name: 'App',
    data() {
      return {
          authenticated: false
      }
    },
    mounted() {
      if(!this.authenticated) {
          this.$router.replace({ name: "login" })
      }
    },
    methods: {
      setAuthenticated(status) {
          this.authenticated = status;
      },
      logout() {
          this.authenticated = false;
          localStorage.removeItem('tokenID')
          this.$router.replace({ name: "login" })
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
