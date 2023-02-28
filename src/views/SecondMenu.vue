<template>
  <h2>secondMenu ============</h2>
  <el-button type="success" name="Search">Second Search </el-button>
</template>

<script lang="ts" setup name="SecondMenu">
import { getCurrentInstance } from "vue";
// <!--
// <el-button type="primary" name="Edit">App Edit </el-button> <el-table :data="tableData" style="width: 100%">
//   <el-table-column prop="date" label="Date" width="180" />
//   <el-table-column prop="name" label="Name" width="180" />
//   <el-table-column prop="address" label="Address" />
// </el-table> -->
import { useRouter, useRoute } from "vue-router";
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const instance = getCurrentInstance();
// console.log("instance", instance);
</script>

<style lang="scss" scoped></style>
