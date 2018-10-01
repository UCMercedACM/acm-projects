import Vue from "vue";
import Router from "vue-router";
import ProjectList from "./views/ProjectList.vue";
import ProjectShow from "./views/ProjectShow.vue";
import ProjectCreate from "./views/ProjectCreate.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "project-list",
      component: ProjectList
    },
    {
      path: "/project/:id",
      name: "project-show",
      component: ProjectShow,
      props: true
    },
    {
      path: "/project/create",
      name: "project-create",
      component: ProjectCreate
    }
  ]
});
