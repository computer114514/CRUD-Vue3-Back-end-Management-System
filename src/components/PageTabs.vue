<template>
  <el-tabs
    v-model="activeName"
    type="border-card"
    class="demo-tabs"
    @tab-click="clickTabs"
    closable
    @tab-remove="closeTabs"
  >
    <el-tab-pane
    v-for="item in tabs.list"
    :key="item.path"
    :name="item.path"
    :label="item.title"
    @click="setTags(item)"
    >
    <!-- label就是el-tab-pane的名字啊 -->
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import {useTabsStore} from "@/stores/tabs"
import { ref } from 'vue'
import{useRoute,useRouter,onBeforeRouteUpdate} from "vue-router";

const tabs=useTabsStore()
const route=useRoute()
console.log("当前路径",route.path);
//useRoute的route用于获取路由属性

const router=useRouter()
//router用于操作,push跳转,replace,to,back

const activeName = ref('/manage')

function closeTabs(Path){
  const index=tabs.list.findIndex((item)=>item.path===Path)
  if(tabs.list[index-1]||tabs.list[index+1]){
      tabs.delTagItem(index)
      const item=tabs.list[index]||tabs.list[index-1];
        //这是下一个或者上一个，默认下一个
      router.push(item?item.path:"/")
        //如果上一个也不存在，那么就默认系统管理
  }
  else if(tabs.list[index]?.path!=="/manage"){
      tabs.delTagItem(index)
      router.push("/manage")
  }
  //我在原有基础上自创的逻辑,只有systemmanage时无法删除
}

function clickTabs(item){
    //item是路由实例，带有props属性(标签上你给他传入的属性)
    router.push(item.props.name)
    //必须要这样才能跳转到item对应的name哦
  }

const setTags=(route)=>{
    activeName.value=route.path;
    //这个该死的activeName是语法糖,用于传递给el组件信息，el会自动给这个activename对应的tab加高亮
    const isExist=tabs.list.some((item)=>item.path===route.fullPath)
    if(!isExist){
      tabs.setTagItem({
        name:route.name,
        title:route.meta.title,
        path:route.fullPath,
      });
    }
}
//setTags功能是在tab列表上添加这个路由对应的属性

setTags(route);
onBeforeRouteUpdate((to)=>{
  setTags(to)
})
//一旦路由更新(如左侧状态栏点击之后router.push)之后更新自动检测，加入
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs{
  height:28px;
}
</style>
