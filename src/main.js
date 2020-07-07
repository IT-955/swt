import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Swipe, SwipeItem } from 'vant';
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './components/css/base.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(Swipe);
Vue.use(SwipeItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
