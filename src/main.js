import { createApp } from "vue";
import "./assets/styles/app.css";
import "./assets/styles/css/main.css";
import App from "./App.vue";
import SwitchViewApp from "./install";
App.use(SwitchViewApp);
createApp(App).mount("#app");
