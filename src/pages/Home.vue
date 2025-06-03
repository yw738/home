<template>
  <template v-if="filterList.length">
    <CardsBox
      v-for="(item, index) in filterList"
      :index="index"
      :params="item"
      :key="index"
    />
  </template>
  <template v-else> - </template>
</template>

<script setup>
import CardsBox from "@/components/CardsBox.vue";
import { computed, defineComponent, ref, watch } from "vue";
import DataArr from "@/assets/public.js";
import { useUser } from "@/store/user.js";
const user = useUser();

let findItem = (arr) => {
  let key = user.searchKey;
  let array = [];
  arr?.forEach((s) => {
    if (
      s?.title?.includes(key) ||
      s?.tips?.includes(key) ||
      s?.tag?.includes(key)
    ) {
      array.push(s);
    }
  });
  return array;
};

let findArr = () => {
  console.log(user.searchKey);
  let arr = [];
  DataArr.forEach((v) => {
    if (v?.children?.length) {
      v.children.forEach((s) => {
        s.children && arr.push(...findItem(s.children));
      });
    } else {
      arr.push(...findItem(v.children));
    }
  });
  console.log(arr);
  return [
    {
      name: "搜索结果",
      children: arr,
    },
  ];
};

let filterList = computed(() => {
  if (!user.searchKey) {
    return DataArr;
  } else {
    return findArr();
  }
});
</script>

<style scoped lang="less"></style>
