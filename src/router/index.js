import { createRouter, createWebHashHistory } from "vue-router";
import { defRoutes } from "./def-routes";
import { authRoutes } from "./auth";

const routes = [
  { path: "/", redirect: "/register" },
  ...defRoutes,
  ...authRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
