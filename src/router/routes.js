const product_routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("../views/Product/SingleProductView.vue"),
  },
  {
    path: "/add-product",
    name: "add product",
    component: () => import("../views/Product/AddProduct.vue"),
  },
];

export default product_routes;
