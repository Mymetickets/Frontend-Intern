import { createRouter, createWebHistory } from "vue-router";
import product_routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...product_routes],
});

export default router;
