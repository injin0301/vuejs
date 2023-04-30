import { createApp } from "vue";
import { createPinia } from 'pinia';
import router from "./router";
import App from "./App.vue";
import './registerServiceWorker';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
createApp(App).use(router).mount("#app");