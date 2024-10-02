import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import PokemonDetail from "@/views/PokemonDetail.vue";
import Favorite from "@/views/Favorite.vue";

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
