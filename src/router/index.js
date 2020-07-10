import Vue from "vue";
import VueRouter from "vue-router";
import list from "../views/list";
import Goodslist from "../components/List/goodslist";
import home from "../views/home/index";
import login from "../views/login/index";
import sign from "../components/login/sign";
import unpwd from "../components/login/unpwd";
import sms from "../components/login/sms";
import forterpwd from "../components/login/forterpwd";
import mine from "../views/mine/index";
import detail from "../components/List/detail";
import Spcar from "../components/spcar";


Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    name: 'home',
    path: '/',
    component: home,
  },
  {
    name: 'list',
    path: '/list',
    component: list
  },
  {
    name: 'Goodslist',
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
  { name:"sign",
    path: '/sign',
    component: sign,
  },
  { name:"unpwd",
    path: '/unpwd',
    component: unpwd,
  },
  { name:"sms",
    path: '/sms',
    component: sms,
  },
  { name:"forterpwd",
    path: '/forterpwd',
    component: forterpwd,
  },
  {
    name: 'spcar',
    path: '/spcar',
    component: Spcar,
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