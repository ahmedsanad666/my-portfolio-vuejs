import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faStackOverflow,
  faGithub,
  faInstagramSquare,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import {gsap} from '@gsa'
import App from "./App.vue";
import router from "./router";
import store from "./store";
// components
import BaseButton from "./components/ui/BaseButton";
import TheTitle from "./components/layout/TheTitle";
import SectionHead from "./components/ui/SectionHead";
import BaseCard from "./components/ui/BaseCard";
import BaseSpinner from "./components/ui/BaseSpinner";

import BaseDialog from "./components/ui/BaseDialog";
import './assets/tailwind.css'

library.add(fas, faTwitter, faFacebook, faStackOverflow, faGithub,faInstagramSquare,faYoutube);

const app = createApp(App);

app.use(store);
app.use(router);

// components

app.component("base-button", BaseButton);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("the-title", TheTitle);
app.component("section-head", SectionHead);
app.component("base-card", BaseCard);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");

// createApp(App).use(store).use(router).mount("#app");
