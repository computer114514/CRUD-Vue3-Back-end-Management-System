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
      <el-col :span="18"><el-card></el-card></el-col>
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
  import CountUp from "@/components/CountUp.vue"
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
</style>
