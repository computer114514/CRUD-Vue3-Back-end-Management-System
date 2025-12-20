import { createRouter, createWebHistory } from 'vue-router'
import HomeTest from "@/views/HomeTest.vue"
import ManageTest from '@/views/ManageTest.vue'
// import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import SystemUser from '@/views/system/SystemUser.vue'
const routes=[{
  path:'/',
  redirect:"/manage"
  // 这两条的意思是一开始不是/吗，给他转到/manage里边去
  //因为没有默认子路由,引出来个默认的子路由
},
  {
  path:"/",
  component:HomeTest,
  // 牢牢记住，路由嵌套是需要routerview在父路由里展示的

  children:[
    {
      path:"/manage",
      component:ManageTest,
    },
    {
      path:"/system-user",
      // component:()=>import("@/views/system/SystemUser.vue"),
      component:SystemUser
    },
    {
      path:"/system-role",
      component:()=>import("@/views/system/SystemRole.vue"),
    },
    {
      path:"/system-menu",
      component:()=>import("@/views/system/SystemMenu.vue"),
    }
  ]
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
