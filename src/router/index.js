import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { defRoutes } from "./def-routes";
import { authRoutes } from "./auth";
import { adminAuthRoutes } from "./admin/auth";
import product_routes from "./routes";

const routes = [
  { path: "/", redirect: "/register" },
  ...defRoutes,
  ...authRoutes,
  ...adminAuthRoutes,
  ...product_routes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
