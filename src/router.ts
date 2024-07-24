import { createRouter, createWebHistory } from "vue-router";

const Page1 = () => import("@/views/Page1.vue");
const Page2 = () => import("@/views/Page2.vue");

const routes = [
  { path: "/ClientBot/", name: "index", component: Page1 },
  { path: "/ClientBot/page2", name: "page2", component: Page2 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
