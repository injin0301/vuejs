import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import MatchingCard from "../views/MatchingCard";
import WordCard from "../views/WordCard";
import WordCardEditor from "../views/WordCardEditor.vue"

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
    path: "/word-card-editor",
    name: "word-card-editor",
    component: WordCardEditor,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
