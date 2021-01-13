import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Cart from "./components/shopingCart/Cart";
import Order from "./components/shopingCart/Order";
import Pay from "./components/shopingCart/Pay";
import Shop from "./components/shopingCart/Shop";
import Payment from "./components/pay/Payment";
import Success from "./components/pay/Success";
import Go from "./components/Gocart";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/pay",
    component: Pay,
    children: [
      {
        path: "/",
        component: Payment
      },

      {
        path: "/pay/success",
        component: Success
      }
    ]
  },
  {
    path: "/go",
    component: Go
  }
];
export default new VueRouter({
  mode: "hash",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
