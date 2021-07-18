import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/services",
      name: "services",
      component: () => import("./components/ServicesList")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddService")
    }
  ]
});
