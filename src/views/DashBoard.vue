<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><el-card></el-card></el-col>
      <el-col :span="6"><el-card></el-card></el-col>
      <el-col :span="6"><el-card></el-card></el-col>
      <el-col :span="6"><el-card></el-card></el-col>
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

  /* .el-col{
    background-color: skyblue;
  } */
   .el-row {
  margin-bottom: 20px;
}
.el-card{
  overflow: hidden;
  border-radius: 5px;
  /* border-radius:5%l是不同的！我说怎么这么怪 */
}
</style>
