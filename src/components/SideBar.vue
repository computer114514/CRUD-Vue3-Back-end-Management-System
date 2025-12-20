<template>
      <div>
      <el-menu
        :collapse=sideBarStore.collapse
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router>
        <template v-for="item in menuData">
          <template v-if="item.children">
            <el-sub-menu :key="item.index">
              <template #title>
                <el-icon>
                  <component :is="item.icon"></component>
                </el-icon>
                <!-- 要么直接import一个组件<zujian />这样应用
               要么,<component is="item.icon"></component>
               动态组件将字符串理解为一个真正的组件 -->
                <span>{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.children" :key="subItem.index">
                <el-menu-item :index="subItem.index">
                    {{ subItem.title }}
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <!-- key写在这里 -->
                <el-icon>
                  <component :is="item.icon"></component>
                </el-icon>
                <!-- 要么直接import一个组件<zujian />这样应用
               要么,<component is="item.icon"></component>
               动态组件将字符串理解为一个真正的组件 -->
                <template #title>{{ item.title }}</template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
      </div>
</template>

<script lang="ts" setup>
// import {
//   Menu as IconMenu,
//   Location,
// } from '@element-plus/icons-vue'
import {menuData} from "./menu.ts"
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
