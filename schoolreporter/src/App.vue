<template>
  <div id="app">
    <div class="custom-wrapper">
      <router-view />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
//import Header from "@/components/Header.vue";
//import Home from "@/views/Home.vue";
//import Form from "@/views/Form.vue";
export default {
  name: "App",
  /*data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "nraboy",
        password: "password"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }

  },*/

  components: {
    // Header
    // Home,
    // Form
  }
  /*created() {
    this.$store.dispatch("Login");
  }*/
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#Footer {
  margin-top: 1500px;
}
</style>
