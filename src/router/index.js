import Vue from "vue";
import VueRouter from "vue-router";
import list from "../views/list";
import Goodslist from "../components/List/goodslist";
import home from "../views/home/index";
import login from "../views/login/index";
import mine from "../views/mine/index";
import detail from "../components/List/detail";


Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    name: 'home',
    path: '/',
    component: home
  },
  {
    name: 'list',
    path: '/list',
    component: list
  },
  {
    path: '/Goodslist',
    component: Goodslist,
  },
  { name:"mine",
    path: '/mine',
    component: mine,
  },
  { name:"login",
    path: '/login',
    component: login,
  },
  {
    path: '/detail/:id',
    component: detail
  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;