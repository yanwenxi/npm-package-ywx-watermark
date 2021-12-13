import ywxWatermark from "./components/ywx-watermark/index.vue";
// 判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window != "undefined" && window.Vue) {
  window.Vue.component("ywx-watermark", ywxWatermark);
}
// 可以使用Vue.use进行全局安装
ywxWatermark.install = function(Vue) {
  Vue.component(ywxWatermark.name, ywxWatermark);
};

export default ywxWatermark;
