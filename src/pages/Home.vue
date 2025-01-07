<template>
  <CardsBox
    v-for="(item, index) in DataArr"
    :index="index"
    :params="item"
    :key="index"
  />
</template>

<script setup>
import CardsBox from "./../components/CardsBox.vue";
import { defineComponent, ref } from "vue";
import DataArr from "./../assets/public.js";
let selectedKeys = ref(["1"]);
let collapsed = ref(false);
// let DataArr = DataArr;
const count = ref(0);
</script>

<style scoped lang="less"></style>
