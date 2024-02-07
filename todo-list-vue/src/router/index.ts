import { createRouter, createWebHashHistory } from "vue-router"
import VHome from "@/views/HomePage.vue"
import VDropdownPage from "@/views/VDropdownPage.vue"
import VAbout from "@/views/AboutPage.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: VDropdownPage,
    },
    {
      path: "/about",
      name: "About",
      component: VAbout,
    },
  ],
})
