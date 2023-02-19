<template>
  <div class="left-menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#fff"
      router
    >
      <el-menu-item index="/home/userInfo">
        <el-icon><icon-menu /></el-icon>
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="/home/firstMenu">
        <span>Navigator One</span>
      </el-menu-item>
      <el-menu-item index="/home/secondMenu">
        <span>Navigator Two</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

import { useRouter } from "vue-router";

const router = useRouter();
const handleOpen = (key: string, keyPath: string[]) => {
  // if (key == "1") {
  //   router.push("/home/userInfo");
  // } else if (key == "2") {
  //   router.push("/home/firstMenu");
  // } else if (key == "3") {
  //   router.push("/home/secondMenu");
  // }
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  // if (key == "1") {
  //   router.push("/home/userInfo");
  // } else if (key == "2") {
  //   router.push("/home/firstMenu");
  // } else if (key == "3") {
  //   router.push("/home/secondMenu");
  // }
};
</script>

<style lang="scss" scoped>
.left-menu {
  :deep(.ep-menu) {
    width: 25vw;
    height: 100%;
  }
}
</style>
