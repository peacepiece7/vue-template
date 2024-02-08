import { createRouter, createWebHashHistory } from "vue-router"
import VHome from "@/pages/VHome.vue"
import VDropdownPage from "@/pages/VDropdown.vue"
import VAbout from "@/pages/VAbout.vue"
import VTest from "@/pages/VTest.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: VHome,
    },
    {
      path: "/dropdown",
      name: "Dropdown",
      component: VDropdownPage,
    },
    {
      path: "/about",
      name: "About",
      component: VAbout,
    },
    {
      path: "/test",
      name: "Test",
      component: VTest,
    },
  ],
})
