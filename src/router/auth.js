export const authRoutes  = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Auth/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Auth/register.vue"),
  },
];
