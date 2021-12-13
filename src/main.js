import Vue from "vue";
import App from "./App.vue";
// from 指向package.json ->main入口
import ywxWatermark from "ywx-watermark";
Vue.use(ywxWatermark);
new Vue({
  el: "#app",
  render: h => h(App)
});
