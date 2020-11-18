<template>
  <b-navbar toggleable type="dark" variant="dark" position="fixed">
    <b-navbar-brand href="#"
      >Topnorch
      <b-image src="logo-1.png" />
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse" class="toggle-btn">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" id="page">
          <a @click="gotoHome()">Home</a>
        </b-nav-item>
        <b-nav-item href="#" id="page">
          <a @click="gotoRegister()">Subscribe</a>
        </b-nav-item>
        <b-nav-item href="#" id="page">
          <router-link to="/signin">Log in</router-link></b-nav-item
        >
        <b-nav-item href="#" id="page">
          <router-link to="/signup">Log out</router-link></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
//import Demo from "@/views/Demo.vue";
//import { component } from "vue/types/umd";
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    gotoHome() {
      this.$router.push({ path: "/Feature" });
    },
    gotoRegister() {
      this.$router.push({ path: "/Subscribe" });
    }
  }
  /*components: {
    Demo
  }*/
};
</script>
<style scoped>
.ml-auto {
  text-align: left;
  font-size: 20px;
}
.toggle-btn {
  font: size 40px;
  height: 30px;
}
#page {
  border-bottom: 2px solid white;
  width: 20%;
  margin-top: 30px;
  color: #2fcaba;
  font-size: 20px;
}
</style>
