<template>
  <a-tooltip v-if="!isLogin">
    <template #title>登录</template>
    <a-switch
      v-model:checked="checked"
      :disabled="checked"
      @change="showModal"
    />
  </a-tooltip>
  <template v-else>
    <a-button type="link" @click="openSet">编辑</a-button>
  </template>

  <a-modal
    v-model:visible="visible"
    :centered="true"
    :maskClosable="false"
    title="验证身份"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-input
      v-model:value="formdata.username"
      style="margin-bottom: 10px"
      placeholder="账户"
    />
    <a-input v-model:value="formdata.password" placeholder="密码" />
  </a-modal>
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

let openSet = () => {
  router.push("/setJson");
};
const showModal = () => {
  formdata.value = {
    username: "",
    password: "",
  };
  visible.value = true;
};
// 确定
const handleOk = () => {
  let { username, password } = formdata.value;

  if (!username.trim()) {
    message.error("请输入用户名");
    return;
  }

  if (password.length < 6) {
    message.error("密码长度不能少于6位");
    return;
  }

  user
    .login({
      username,
      password,
    })
    .then(() => {
      message.success("登录成功！");
      handleCancel();
    });
};
const handleCancel = (e) => {
  formdata.value = {
    username: "",
    password: "",
  };
  checked.value = false;
  visible.value = false;
};
</script>
<style scoped lang="less"></style>
