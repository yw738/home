
<template>
  <Layout :menuList="menuList" :navList="navList" />
</template>

<script >
//leftmenu #f9f9f9
import Layout from './components/Layout.vue'
import DataArr from './assets/public.js'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Layout,
  },
  data() {
    return {
      navList: [
        {
          label: '首页',
          value: '',
        },
        // {
        //   label: '前端',
        //   value: '',
        // },
      ],
      menuList: [],
    }
  },
  created() {
    // 生成左侧菜单栏
    this.menuList = DataArr.map((v, i) => ({
      label: v.name,
      name: (i + 1).toString(),
    }))
  },
  setup() {
    return {}
  },
})
</script>
<style lang="less">
@import './assets/common.css';
</style>