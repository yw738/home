import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/homepage.vue"),
    children: [],
  },
  // {
  //   path: "/priceiframe",
  //   component: () => import("@/pages/Desktop/iframe/price.vue"),
  //   children: [],
  // },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
