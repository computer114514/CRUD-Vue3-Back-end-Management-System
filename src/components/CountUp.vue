<template>
  <span ref="countRef"></span>
  <!-- countref表示指向的dom元素 -->
</template>

<script lang="ts" setup>
  import {CountUp} from "countup.js"
  import {onMounted, ref,watch} from "vue"

  const countRef=ref<any>(null);
  //countRef.value就是这个dom元素！

  let countUp:any;

  const props=defineProps({
    end:{
      type:Number,
      required:true
    }
    //options
  });

  onMounted(()=>{
    countUp=new CountUp(countRef.value,props.end);
    //组件被挂载，那么加载CountUp动画实例
    if(countUp.error){
      console.error(countUp.error);
      return;
    }
    countUp.start()
    //动画加载，还有update、pase方法
  })

  watch(()=>props.end,(newVal)=>{
    if(countUp){
      countUp.update(newVal);
    }
    //这个newVal突然冒了出来，
    // 这个是传进入的新值，
    // 接受两个参数，
    // 这边只有一个新值
    //如果有countUp才执行吗,边界检查的真到位,防止报错了
  })
  //watch函数是个好东西，这样就不用刷新就能自动执行countUp函数了
  //第一个是数据源,当数据源变化时，便会执行后边儿的回调函数
</script>

<style scoped>

</style>
