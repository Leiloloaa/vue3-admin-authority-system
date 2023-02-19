<template>
  <h1>FirstMenu ============</h1>
  <el-button type="primary" name="Edit">App Edit </el-button>
  <el-button type="success" name="Search">App Search </el-button>
  <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
</template>

<script lang="ts" setup name="SecondMenu">
import { useRouter, useRoute } from "vue-router";
</script>

<style lang="scss" scoped></style>
