<template>
      <div>
      <el-menu
        :collapse=sideBarStore.collapse
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
        <span>系统首页</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <!-- template定义菜单父级标题区域 -->
            <!-- #title是vue的具名插槽语法 -->
            <el-icon><location /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="2-1">用户管理</el-menu-item>
          <el-menu-item index="2-2">角色管理</el-menu-item>
          <el-menu-item index="2-3">菜单管理</el-menu-item>
          <!-- index是什么呢？反正颜色是根据这个渲染的 -->
        </el-sub-menu>
      </el-menu>
      </div>
</template>

<script lang="ts" setup>
import {

  Menu as IconMenu,
  Location,

} from '@element-plus/icons-vue'

import {useSideBarStore} from "../stores/sideBar"

const sideBarStore=useSideBarStore()
console.log("昏迷状态是什么呢",sideBarStore.collapse);
</script>

<style scoped>
  .el-icon{
    margin-right:20px;
  }
  .el-menu{
    /* height:calc(100% - 70px); */
    min-height:100%;
    position:absolute;
    left:0;
    top:70px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse){
    width:200px;
    /* 这边的:not()是css伪类，代表排除括号里条件在外，.el-menu--collapse为collapse存在时自动添加的css */
  }
</style>
