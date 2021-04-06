import { createRouter, createWebHistory } from "vue-router";
import CoachList from "../views/CoachesList.vue";
import RequestsView from "../views/RequestsView.vue";

// TODO: Add path to coach details
// TODO: Add path to coach contact
// TODO: Add path to coach Requests '/requests' for now, change to '/coach/:id/requests' when auth setup
//TODO: Add path to coach registration '/signup' or '/signin'

const routes = [
  {
    path: "/",
    redirect: { name: "coaches" },
  },
  {
    path: "/coaches",
    name: "coaches",
    component: CoachList,
  },
  {
    path: "/requests",
    name: "requests",
    component: RequestsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
/* webpackChunkName: "about" */
// component: () => import("../views/About.vue"),
