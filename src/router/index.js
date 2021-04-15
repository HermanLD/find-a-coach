import { createRouter, createWebHistory } from "vue-router";
import CoachList from "../views/CoachesList.vue";
import CoachDetails from "../views/CoachDetails.vue";
import ContactCoach from "../views/ContactCoach.vue";
import RequestsView from "../views/RequestsView.vue";
import RegisterView from "../views/Register.vue";
import LoginView from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";

// TODO: Add path to coach Requests '/requests' for now, change to '/coach/:id/requests' when auth setup
//TODO: Add path to coach registration '/signup' or '/signin'

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: CoachList,
    },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
    },
    //? Not rendering when nested in '/coaches/:id' for some reason
    { path: "/coaches/:id/contact", component: ContactCoach },
    { path: "/coaches/:id/requests", component: RequestsView },
    {
      path: "/register",
      component: RegisterView,
    },
    {
      path: "/signin",
      component: LoginView,
    },
    // {
    //   path: "/requests",
    //   component: RequestsView,
    // },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
/* webpackChunkName: "about" */
// component: () => import("../views/About.vue"),
