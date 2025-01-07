<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <template v-for="(item, index) in navList" :key="index">
      <a-sub-menu v-if="item.children">
        <template #title>{{ item.label }}</template>
        <a-menu-item
          v-for="(v, i) in item.children"
          :key="i"
          @click="handClick(v)"
          >{{ v.label }}</a-menu-item
        >
      </a-sub-menu>
      <a-menu-item :key="index" v-else @click="handClick(item)">
        {{ item.label }}
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script setup>
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

let navList = [
  {
    label: "首页",
    value: "/home",
  },
  {
    label: "工具",
    children: [{ label: "工具", url: "https://yw738.github.io/zxsj_tool/" }],
  },
];
let handClick = (item) => {
  item.url && window.open(item.url);

  if (item.path) {
    router.push(item.path);
  }
};
const current = ref(["mail"]);
</script>
