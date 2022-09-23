import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage";
import PortfolioPage from "../views/PortfolioPage";
import ContactPage from "../views/ContactPage";
import BlogPage from "../views/BlogPage";
import AuthPage from "../views/AuthPage";
import RequestPage from "../views/RequestPage";
import NotFound from "../views/NotFound";
import AddProjects from "../views/AddProjects";

import AddInfo from '../views/AddInfo';

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },

  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioPage,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
  },
  {
    path: "/requests",
    name: "requests",
    component: RequestPage,
  },
  {
    path: "/add-project",
    component: AddProjects,
  },{
    path:'/porsonalInfos',
    component:AddInfo
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
