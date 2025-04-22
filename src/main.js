import '../node_modules/flowbite-vue/dist/index.css'
import "./assets/main.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
//in your `main.js` file

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";

const app = createApp(App);

app.use(router).use(VueScrollTo) ;

app.mount("#app");
