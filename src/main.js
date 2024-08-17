import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import("./assets/style/base.scss");
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
