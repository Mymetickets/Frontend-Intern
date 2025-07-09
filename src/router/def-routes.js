import MainLayout from "@/views/dashboard/layouts/MainLayout.vue";

export const defRoutes = [
  {
    path:"/app",
    component: MainLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/Index.vue"),
        meta: {hasAuth: true}
      },
      {
        path: "/products",
        name: "products",
        component: ()=> import("@/views/dashboard/products/Index.vue"),
        meta: {hasAuth: true}
      }
    ]
  }
]