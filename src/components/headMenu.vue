<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <template v-for="(item, index) in navList" :key="index">
      <a-sub-menu v-if="item.children">
        <template #title>{{ item.label }}</template>
        <a-menu-item
          v-for="(v, i) in item.children"
          :key="v.key"
          @click="handClick(v)"
          >{{ v.label }}</a-menu-item
        >
      </a-sub-menu>
      <a-menu-item :key="item.key" v-else @click="handClick(item)">
        {{ item.label }}
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script setup>
/**
 * 头部菜单
*/
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

let navList = [
  {
    label: "首页",
    key: 1,
    value: "/home",
  },
  {
    label: "工具",
    children: [
      { label: "诛仙世界利润助手", key: 2, url: "https://yw738.github.io/zxsj_tool/" },
    ],
  },
];
let handClick = (item) => {
  item.url && window.open(item.url);

  if (item.path) {
    router.push(item.path);
  }
};
const current = ref([1]);
</script>
