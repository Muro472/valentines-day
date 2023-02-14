import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "/yes",
    component: () => import("../views/YesPage.vue"),
  },
  {
    path: "/no",
    component: () => import("../views/NoPage.vue"),
  },
  {
    path: "/qr",
    component: () => import("../views/QrCode.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
