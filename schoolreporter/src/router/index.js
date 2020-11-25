import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";
import Home from "../views/Home.vue";
import Demo from "../views/Demo.vue";
import Detail from "../views/Detail.vue";
import Feature from "../components/Feature.vue";
import About from "../views/About.vue";
import Security from "../views/Security.vue";
import Dashboard from "../views/Dashboard.vue";
import Subscribe from "../components/Subscribe.vue";

Vue.use(VueRouter);

//const newLocal = "/";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo
  },
  {
    path: "/Detail",
    name: "Detail",
    component: Detail
  },

  {
    path: "/Feature",
    name: "Feature",
    component: Feature
  },
  {
    path: "/Subsribe",
    name: "Subscribe",
    component: Subscribe
  },
  {
    path: "/Security",
    name: "Security",
    component: Security
  },

  /*{
    path: newLocal,
    redirect: {
      name: "Login"
    }
  },*/
  /*{
    path: "/Login",s
    name: "Login",
    component: Login
  },*/
  /* {
    path: "/secure",
    name: "secure",
    component: Secure
  },*/
  {
    path: "/dashboard",
    component: Dashboard,
    beforeEnter(to, from, next) {
      if (store.state.idToken) {
        next();
      } else {
        next("/loginin");
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
