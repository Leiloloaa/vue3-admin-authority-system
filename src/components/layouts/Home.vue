<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="content">
      <BaseSide />
      <div class="content-box">
        <router-view></router-view>
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup name="Home">
import { getCurrentInstance } from "vue";
import BaseHeader from "./BaseHeader.vue";
import BaseSide from "./BaseSide.vue";
const instance = getCurrentInstance();
console.log("instance", instance);
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 100vw;
  height: 95vh;
  .content-box {
    flex: 1;
    width: 75vw;
  }
}
</style>
