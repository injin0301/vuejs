import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import MatchingCard from "../views/MatchingCard";
import WordCard from "../views/WordCard";
import WordCardTest from "../views/WordCardTest";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },

  {
    path: "/matching-card",
    name: "matching-card",
    component: MatchingCard,
  },

  {
    path: "/word-card",
    name: "word-card",
    component: WordCard,
  },

  {
    path: "/word-card-test",
    name: "word-card-test",
    component: WordCardTest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
