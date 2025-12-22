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
      <el-col :span="16"><el-card>
        <div class="card-header">
          <p class="card-header-title">订单动态</p>
          <p class="card-header-desc">最近一周订单状态，包括订单成交量和订单退货量</p>
        </div>
        <Vchart class="chart" :option="dashOpt1"></Vchart>
      </el-card></el-col>
      <el-col :span="8"><el-card>
        <div class="card-header">
          <p class="card-header-title">品类分布</p>
          <p class="card-header-desc">最近一个月销售商品的品类情况</p>
        </div>
        <Vchart class="chart-2" :option="dashOpt2"></Vchart>
      </el-card></el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="7"><el-card :body-style="{height:'400px'}">
        <div class="card-header">
          <p class="card-header-title">时间线</p>
          <p class="card-header-desc">最新的销售动态和活动信息</p>
        </div>
        <el-timeline >
          <el-timeline-item
          v-for="(activity,index) in activities"
          :key="index"
          :color="activity.color">
          <div class="timeline-item">
            <div>
              <p class="timeline-title">{{ activity.content }}</p>
              <p class="timeline-desc">{{ activity.description }}</p>
            </div>
            <div class="timeline-time">
              {{ activity.timestamp }}
            </div>
          </div>
          </el-timeline-item>
        </el-timeline>
      </el-card></el-col>
      <el-col :span="10"><el-card :body-style="{height:'400px'}">
        <div class="card-header">
          <p class="card-header-title">渠道统计</p>
          <p class="card-header-desc">最近一个月的订单来源统计</p>
        </div>
        <Vchart class="map-chart" :option="mapOptions"></Vchart>
      </el-card></el-col>
      <el-col :span="7"><el-card>
        <div class="card-header">
          <p class="card-header-title">排行榜</p>
          <p class="card-header-desc">销售商品的热门榜单Top5</p>
        </div>
        <div  class="rank-item"
        v-for="(rank,index) in ranks"
        :key="index">
          <div>{{ index+1 }}</div>
      </div>
      </el-card></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
  import CountUp from "@/components/CountUp.vue"//导入数字滚动动画

  import chinaMap from "@/utils/china";
  import Vchart from 'vue-echarts'//导入图表
  import { dashOpt1,dashOpt2,mapOptions} from "./chart/options";//导入数据
  import {use,registerMap} from "echarts/core";//导入use
  import { BarChart, LineChart, PieChart, MapChart } from "echarts/charts"//导入相应表
  import { CanvasRenderer } from "echarts/renderers";//导入渲染器
  import {GridComponent,TooltipComponent,LegendComponent,TitleComponent,VisualMapComponent,} from 'echarts/components';//各个部分
  use([
    PieChart,//带派
    MapChart,//地图图标
    BarChart,//？？
    CanvasRenderer,//渲染器--画笔
    GridComponent,//网格--坐标系
    LineChart,//折线图
    TooltipComponent,//提示框-鼠标悬停
    LegendComponent,//图例
    TitleComponent,//标题
    VisualMapComponent,//可见地图
]);
  //从vue-echarts中导入VChart还不够，还要导入use，相应类型的图标,画布渲染器、各种其他组件，然后！！！在use使用这些组件，才可以
registerMap("china",chinaMap);

const activities = [
    {
        content: '收藏商品',
        description: 'xxx收藏了你的商品，就是不买',
        timestamp: '30分钟前',
        color: '#00bcd4',
    },
    {
        content: '用户评价',
        description: 'xxx给了某某商品一个差评，吐血啊',
        timestamp: '55分钟前',
        color: '#1ABC9C',
    },
    {
        content: '订单提交',
        description: 'xxx提交了订单，快去收钱吧',
        timestamp: '1小时前',
        color: '#3f51b5',
    },
    {
        content: '退款申请',
        description: 'xxx申请了仅退款，又要亏钱了',
        timestamp: '15小时前',
        color: '#f44336',
    },
    {
        content: '商品上架',
        description: '运营专员瞒着你上架了一辆飞机',
        timestamp: '1天前',
        color: '#009688',
    },
];
const ranks = [
    {
        title: '手机',
        value: 10000,
        percent: 80,
        color: '#f25e43',
    },
    {
        title: '电脑',
        value: 8000,
        percent: 70,
        color: '#00bcd4',
    },
    {
        title: '相机',
        value: 6000,
        percent: 60,
        color: '#64d572',
    },
    {
        title: '衣服',
        value: 5000,
        percent: 55,
        color: '#e9a745',
    },
    {
        title: '书籍',
        value: 4000,
        percent: 50,
        color: '#009688',
    },
];
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
.card-header{
    margin-bottom: 10px;
}
.card-header .card-header-title{
  font-size:20px;
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
.chart-2{
  flex:1;
  width:100%;
  height:400px;
}
.map-chart{
    width: 100%;
    height: 350px;
}
.timeline-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.timeline-desc,.timeline-time{
  color:#999;
  font-size:14px;
  /* 999文字变灰神器 */
}
.timeline-title{
  font-size:20px;
}
</style>
