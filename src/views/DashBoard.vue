<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><el-card body-class="card-body">
        <el-icon class="card-icon bg1">
          <User></User>
        </el-icon>
        <div class="card-content">
          <div>用户访问量</div>
        </div>
      </el-card></el-col>
      <el-col :span="6"><el-card body-class="card-body">
        <el-icon class="card-icon bg2">
          <ChatDotRound />
        </el-icon>
        <div class="card-content">
          <div>系统信息</div>
        </div>
      </el-card></el-col>
      <el-col :span="6"><el-card body-class="card-body">
        <el-icon class="card-icon bg3">
          <Goods />
        </el-icon>
        <div class="card-content">
          <div>商品数量</div>
        </div>
      </el-card></el-col>
      <el-col :span="6"><el-card body-class="card-body">
        <el-icon class="card-icon bg4">
          <ShoppingCartFull />
        </el-icon>
        <div class="card-content">
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

</script>

<style scoped>

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
  box-shadow:0px 0px 0px gray;
}
.bg1{
  background-color: greenyellow;
}
.bg2{
  background-color: orange;
}
.bg3{
  background-color: skyblue;
}
.bg4{
  background-color: lemonchiffon;
}
.card-icon{
  font-size:50px;
  text-align: center;
  line-height: 100px;
  width:100px;
  height:100px;
}
:deep(.card-body){
  display: flex;
  padding:0;
}
.card-content{
  flex:1;
  font-size:16px;
  color:#999;
  line-height: 100px;
  text-align: center;
  padding:0 20px;
}
</style>
