<template>
  <Layout />
</template>

<script setup>
//leftmenu #f9f9f9
import Layout from "@/components/Layout.vue";
import { onBeforeMount, ref } from "vue";
import { useUser } from "@/store/user.js";
const user = useUser();

onBeforeMount(() => {
  user.getMenuList();
});

let CloseWebPage = () => {
  if (navigator.userAgent.indexOf("MSIE") > 0) {
    if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
      window.opener = null;
      window.close();
    } else {
      window.open("", "_top");
      window.top.close();
    }
  } else if (navigator.userAgent.indexOf("Firefox") > 0) {
    window.location.href = "about:blank "; //火狐默认状态非window.open的页面window.close是无效的
    //window.history.go(-2);
  } else {
    window.opener = null;
    window.open("", "_self", "");
    window.close();
  }
};
</script>
<style lang="less"></style>
