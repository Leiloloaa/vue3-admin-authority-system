<template>
  <el-config-provider namespace="ep">
    <el-button type="primary" name="Edit">App Edit </el-button>
    <el-button type="success" name="Search">App Search </el-button>
    <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
  </el-config-provider>
</template>
<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
