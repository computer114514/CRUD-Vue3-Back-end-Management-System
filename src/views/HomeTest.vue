<template>
  <div class="wrapper">
    <SideBar></SideBar>
    <Header></Header>
    <div class="container" :class="{'content-collapse':sideBarStore.collapse}">
      <PageTabs></PageTabs>
      <!-- :class="{'content-collapse':true/false}"" 用单引号的吗-->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import PageTabs from '@/components/PageTabs.vue';
  import SideBar from '@/components/SideBar.vue';
  import Header from '@/components/HeaderTab.vue';
  import {useSideBarStore} from "../stores/sideBar"
  const sideBarStore=useSideBarStore();
</script>

<style scoped>
  .container{
    /* width: calc(100% - 200px); */
    width:auto;
    /* min-width:100%; 好知识点！min-width啊*/
    /* calc自动计算剩余空间容量 一定要有空格*/
    position: absolute;
    top:70px;
    left:200px;
    /* 绝对定位加width自动，这样就能自动调整宽度了 */
    right:0;
    /* height:calc(100% - 70px); */
    min-height:100%;
    overflow: hidden;
    background-color: #EEF0FC;
    transition:left 0.3s ease-in-out;
  }
  .content-collapse{
    left:60px;
  }
  .content{
    padding:20px;
  }
</style>
