import SwitchView from "./components/SwitchView.vue";
const SwitchViewApp = {
  install(Vue) {
    // Vue is a Vue Constructor, not an Vue instance. This plugin requires passing the main app Vue instance as options parameter.
    // Vue.component need to be called BEFORE new Vue() in main.js...
    Vue.component("switch-view", SwitchView);
  },
};
export default SwitchViewApp;
export { SwitchViewApp };
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(SwitchViewApp);
}
