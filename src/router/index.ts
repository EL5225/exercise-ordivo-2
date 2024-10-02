import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";
import PokemonDetail from "@/pages/PokemonDetail.vue";
import Favorite from "@/pages/Favorite.vue";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/pokemon/:name",
    component: PokemonDetail,
    name: "PokemonDetail",
  },
  {
    path: "/favorite",
    component: Favorite,
    name: "Favorite",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
