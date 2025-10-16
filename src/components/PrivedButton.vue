<template>
  <div></div>
</template>

<script setup>
/**
 * 隐私按钮
 */
import { computed, ref } from "vue";
import { message } from "ant-design-vue";
import { useUser } from "@/store/user.js";
const user = useUser();
let isLogin = computed(() => user.token);
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const checked = ref(false);
const visible = ref(false);
const formdata = ref({
  username: "",
  password: "",
});
</script>
<style scoped lang="less"></style>
