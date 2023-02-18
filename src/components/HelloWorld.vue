<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ref("");

const toast = () => {
  ElMessage.success("Hello");
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <!-- example components -->
  <el-button @click="count++">AddCount count is: {{ count }}</el-button>
  <el-button type="primary" name="HelloEdit">HelloWorld Edit</el-button>
</template>

<style>
.ep-button {
  margin: 4px;
}
</style>
