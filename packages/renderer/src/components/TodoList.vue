<template>
  <div class="wrapper">
    <section class="input-wrapper">
      <el-input
        v-model="itemVal"
        @keyup.enter="handleEnterAdd"
        placeholder="Press Enter Add"
      ></el-input>
      <el-button @click="notify"></el-button>
      <div v-for="item in list" :key="item">{{ item }}</div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, defineComponent } from "vue";
import { ElInput, ElButton } from "element-plus";
import { useElectron } from "@/use/electron";
const list = ref<Array<string>>([]);
const itemVal = ref("");
const { request } = useElectron();
function handleEnterAdd() {
  list.value.push(itemVal.value);
  itemVal.value = "";
}
function notify() {
  request("notify", {
    title: "这是通知标题",
    body: "这是通知内容"
  });
}
</script>
<style scoped>
.wrapper {
  width: 100vw;
  height: 480px;
  border: 1px solid red;
}
</style>
