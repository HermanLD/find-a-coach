import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import AppBtn from "./components/UI/AppButton.vue";
import AppInput from "./components/UI/AppInput.vue";
import AppSelect from "./components/UI/AppSelect.vue";
import AppLoader from "./components/UI/AppLoader.vue";

//* CSS base and resets
import "./assets/base.css";

//* Initiate Vue App
const app = createApp(App);

//* Global Components
app.component("app-btn", AppBtn);
app.component("app-input", AppInput);
app.component("app-select", AppSelect);
app.component("app-loader", AppLoader);

//* Plugin Vuex Store & Router
app.use(store);
app.use(router);

//*-------------->
app.mount("#app");
