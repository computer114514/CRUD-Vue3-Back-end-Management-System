import { createRouter, createWebHistory } from 'vue-router'
import HomeTest from "@/views/HomeTest.vue"
import Dashboard from '@/views/DashBoard.vue'
// import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
const routes=[{
  path:'/',
  redirect:"/dashboard"
  // 这两条的意思是一开始不是/吗，给他转到/manage里边去
  //因为没有默认子路由,引出来个默认的子路由
},
  {
  path:"/",
  name:'Home',
  component:HomeTest,
  // 牢牢记住，路由嵌套是需要routerview在父路由里展示的
  children:[
    {
      path:"/dashboard",
      name:"dashboard",
      component:Dashboard,
      meta:{
        title:"系统首页",
      }
    },
    {
      path:"/system-user",
      name:"system-user",
      component:()=>import("@/views/system/SystemUser.vue"),
      meta:{
        title:"用户管理",
      }
    },
    {
      path:"/system-role",
      name:"system-role",
      component:()=>import("@/views/system/SystemRole.vue"),
      meta:{
        title:"角色管理",
      }
    },
    {
      path:"/system-menu",
      name:"system-menu",
      component:()=>import("@/views/system/SystemMenu.vue"),
      meta:{
        title:"菜单管理",
      }
    }
  ]
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
