import type {Menus} from "@/types/menu"
//type说明这只是个类型检查而非什么js代码，不写type会被打包进js代码，在verbatimModuleSyntax下会报错
export const menuData:Menus[]=[
//Menus类型的数组而已，Menus是一个对象啊
{
  index:"/",
  id:"0",
  title:"系统首页",
  icon: 'Odometer',
},{
  index:"/manage",
  id:"1",
  title:"系统管理",
  icon: 'HomeFilled',
  children:[
    {index:"/system-user",id:"11",title:"用户管理"},
    {index:"/system-role",id:"12",title:"角色管理"},
    {index:"/system-menu",id:"13",title:"菜单管理"}
  ]
}
]
