import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/homepage.vue"),
    children: [],
  },
  {
    path: "/setJson",
    component: () => import("@/pages/setPage/index.vue"),
    children: [],
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
