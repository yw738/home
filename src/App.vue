<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useUser } from "@/store/user.js";
const user = useUser();
</script>
<style lang="less">
@import "@/assets/css/common.css";
</style>
