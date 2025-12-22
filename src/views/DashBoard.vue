<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><el-card body-class="card-body">
        <el-icon class="card-icon bg1">
          <User></User>
        </el-icon>
        <div class="card-content">
          <CountUp class="card-num color1" :end="12452"></CountUp>
          <div>用户访问量</div>
        </div>
      </el-card></el-col>
      <el-col :span="6"><el-card body-class="card-body">
        <el-icon class="card-icon bg2">
          <ChatDotRound />
        </el-icon>
        <div class="card-content">
          <CountUp class="card-num color2" :end="365"></CountUp>
          <div>系统信息</div>
        </div>
      </el-card></el-col>
      <el-col :span="6"><el-card body-class="card-body">
        <el-icon class="card-icon bg3">
          <Goods />
        </el-icon>
        <div class="card-content">
          <CountUp class="card-num color3" :end="1919"></CountUp>
          <!-- 传入的是 -->
          <div>商品数量</div>
        </div>
      </el-card></el-col>
      <el-col :span="6"><el-card body-class="card-body">
        <el-icon class="card-icon bg4">
          <ShoppingCartFull />
        </el-icon>
        <div class="card-content">
          <CountUp class="card-num color4" :end="1145"></CountUp>
          <div>今日订单</div>
        </div>
      </el-card></el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="18"><el-card>
        <div class="card-header">
          <p class="card-header-title">订单动态</p>
          <p class="card-header-desc">最近一周订单状态，包括订单成交量和订单退货量</p>
        </div>
        <Vchart class="chart" :option="dashOpt1"></Vchart>
      </el-card></el-col>
      <el-col :span="6"><el-card></el-card></el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8"><el-card></el-card></el-col>
      <el-col :span="8"><el-card></el-card></el-col>
      <el-col :span="8"><el-card></el-card></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
  import CountUp from "@/components/CountUp.vue"//导入数字滚动动画

  import Vchart from 'vue-echarts'//导入图表
  import { dashOpt1 } from "./chart/options";//导入数据
  import {use} from "echarts/core";//导入use
  import {LineChart} from "echarts/charts"//导入相应表
  import { CanvasRenderer } from "echarts/renderers";//导入渲染器
  import {GridComponent,TooltipComponent,LegendComponent,TitleComponent,VisualMapComponent,} from 'echarts/components';//各个部分
  use([
    CanvasRenderer,//渲染器--画笔
    GridComponent,//网格--坐标系
    LineChart,//折线图
    TooltipComponent,//提示框-鼠标悬停
    LegendComponent,//图例
    TitleComponent,//标题
    VisualMapComponent,//可见地图
]);
  //从vue-echarts中导入VChart还不够，还要导入use，相应类型的图标
  //画布渲染器、各种其他组件，然后！！！在use使用这些组件，才可以
</script>
<style scoped>
.card-num{
  font-size:30px;
}
.el-col{
  min-width: 0;
  }
.el-row {
  margin-bottom: 20px;
  min-width: 0;
}
.el-card{
  overflow: hidden;
  border-radius: 5px;
  /* border-radius:5%l是不同的！我说怎么这么怪 */
}
.el-card:hover{
  box-shadow:0px 1px 2px gray;
}
.bg1{
  background-color: greenyellow;
}
.color1{
  color:greenyellow
}
.bg2{
  background-color: orange;
}
.color2{
  color:orange;
}
.bg3{
  background-color: skyblue;
}
.color3{
  color:skyblue;
}
.bg4{
  background-color: lemonchiffon;
}
.color4{
  color:brown
}
.card-icon{
  font-size:50px;
  text-align: center;
  line-height: 100px;
  width:100px;
  height:100px;
}
:deep(.card-body){
  height:100px;
  align-items: center;
  display: flex;
  padding:0;
}
.card-content{
  flex:1;
  font-size:16px;
  color:#999;
  text-align: center;
  padding:0 20px;
}
.card-header .card-header-title{
  font-size:18px;
  font-weight: bold;
}
.card-header .card-header-desc{
  font-size:14px;
  color:#999;
}
.chart{
  flex:1;
  width:100%;
  height:400px;
}
</style>
