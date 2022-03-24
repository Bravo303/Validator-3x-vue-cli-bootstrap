import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
// import VeeValidate, { Validator } from "vee-validate";
// import ru from "vee-validate/dist/locale/ru";
// Validator.localize("ru", ru);
// Vue.use(VeeValidate, { locale: "ru" });
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
