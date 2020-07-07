import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login";
import Layout from "../components/Layout";
import Home from '../views/home/index';
import Member from '../views/member';
import Supplier from '../views/supplier';
import Goods from '../views/goods';


Vue.use(VueRouter);
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


const routes = [
  {
    // 登录页
    path: '/login',
    name: 'login', //路由名称
    component: Login
  },
  {
    // 基础布局
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',// 重定向到子路由
    children: [
      {
        path: '/home',
        component: Home,
        meta: { title: '首页' }
      }
    ]
  },
  {
    // 会员管理
    path: '/member',
    component: Layout,
    children: [
      {
        path: '/',
        component: Member,
        meta: { title: '会员管理' }
      }
    ]
  },
  {
    // 供应商管理
    path: '/supplier',
    component: Layout,
    children: [
      {
        path: '/',
        component: Supplier,
        meta: { title: '供应商管理' }
      }
    ]
  },
  {
    // 商品管理
    path: '/goods',
    component: Layout,
    children: [
      {
        path: '/',
        component: Goods,
        meta: { title: '商品管理' }
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
