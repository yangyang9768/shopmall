import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./index";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "./assets/images/iconfont/iconfont";
import "./assets/images/iconfont/iconfont";
// require styles
import "swiper/dist/css/swiper.css";
import store from "./store";
// import PUBLICURL from "./contants";
import mydistrict from "./package/myDistrict/myDistrict";
import Identify from "./components/Identify";
Vue.config.productionTip = false;
// Vue.prototype.$publicUrl = PUBLICURL;
Vue.use(Identify);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(mydistrict);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
