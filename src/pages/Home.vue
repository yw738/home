<template>
  <CardsBox
    v-for="(item, index) in DataArr"
    :index="index"
    :params="item"
    :key="index"
  />
</template>

<script setup>
import CardsBox from "@/components/CardsBox.vue";
import { defineComponent, ref } from "vue";
import DataArr from "@/assets/public.js";
</script>

<style scoped lang="less"></style>
