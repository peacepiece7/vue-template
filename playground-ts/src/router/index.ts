import { createRouter, createWebHashHistory } from "vue-router"
import VHome from "@/pages/VHome.vue"
import VDropdownPage from "@/pages/VDropdown.vue"
import VAbout from "@/pages/VAbout.vue"
import VTest from "@/pages/VTest.vue"
// import VDetailVue from "@/pages/VDetail.vue"
import VNested from "@/pages/VNested.vue"
import VChildFirstVue from "@/pages/VNested/VChildFirst.vue"
import VChildSecondVue from "@/pages/VNested/VChildSecond.vue"
import VParent from "@/pages/VParent.vue"
import VParent2 from "@/pages/VParent2.vue"

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
    {
      path: "/nested",
      name: "Nested",
      component: VNested,
      children: [
        {
          path: "first",
          name: "childFirstVue",
          component: VChildFirstVue,
        },
        {
          path: "second",
          name: "childSecondVue",
          component: VChildSecondVue,
        },
      ],
    },
    {
      path: "/error",
      name: "Error",
      component: VParent,
    },
    {
      path: "/error2",
      name: "Error2",
      component: VParent2,
    },
  ],
})
