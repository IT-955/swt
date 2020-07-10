import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './components/css/ele.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './components/css/base.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
