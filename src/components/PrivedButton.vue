<template>
  <a-tooltip>
    <template #title>验证您的身份</template>
    <a-switch v-model:checked="checked" :disabled="checked" @change="showModal" />
  </a-tooltip>

  <a-modal v-model:visible="visible" :centered="true" :maskClosable="false" title="验证身份" @ok="handleOk" @cancel="handleCancel">
    <a-input v-model:value="value" placeholder="输入你的专属密码" />
  </a-modal>
</template>
<script>
/**
 * 隐私按钮
 */
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'
export default defineComponent({
  setup() {
    const checked = ref(false)
    const visible = ref(false)
    const value = ref('')
    const store = useStore()
    const pass = window.atob('dGltaXlhbmc=') //window.btoa("19980104")

    let setPrivate = () => store.commit('setPrivate', true)
    const showModal = () => {
      value.value = ''
      visible.value = true
    }
    // 确定
    const handleOk = () => {
      if (!value.value.trim()) {
        message.error('密码不能为空！')
        return
      }
      if (value.value == pass) {
        visible.value = false
        message.success('开启隐藏菜单成功')
        setPrivate()
      } else {
        message.error('密码错误！')
      }
    }
    const handleCancel = (e) => {
      visible.value = false
      checked.value = false
      message.info('已取消')
    }

    return {
      checked,
      visible,
      showModal,
      handleOk,
      handleCancel,
      value,
    }
  },
})
</script>
<style scoped lang="less">
</style>
