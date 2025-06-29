import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { defRoutes } from "./def-routes";
import { authRoutes } from "./auth";
import { adminAuthRoutes } from "./admin/auth";

const routes = [
  { path: "/", redirect: "/register" },
  ...defRoutes,
  ...authRoutes,
  ...adminAuthRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
