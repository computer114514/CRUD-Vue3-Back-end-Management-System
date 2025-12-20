<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    text-color="#11A8CD"
  >
    <el-menu-item index="0" class="logo" @click="collapseChange">
        <img
        style="width: 35px"
        src="../assets/img/logo.svg"
        alt="Element logo"
      />
      <span style="color:skyblue;margin-left:10px;font-size:25px">后台管理系统</span>
      <div class="collapseButton" >
        <el-icon v-if="sideBarStore.collapse"><Expand /></el-icon>
        <el-icon v-else><Fold /></el-icon>
      </div>
    </el-menu-item>
    <el-menu-item index="1" >Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {useSideBarStore} from "../stores/sideBar"


const activeIndex = ref('1')
const sideBarStore=useSideBarStore()


const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
function collapseChange(){
  console.log("button",sideBarStore.collapse)
  sideBarStore.handleCollapse()
  console.log("collapse",sideBarStore.collapse)
}
</script>

<style scoped>
  .el-menu{
    height:70px;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: #242F42;
  }
  .el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
.logo{
  background-color: #242F42 !important;
  /* pointer-events:none; */
  /* 清楚点击事件 */
}
.collapseButton{
  margin-left:10px;
}
.collapseButton:hover{
    cursor:pointer;
}
</style>
