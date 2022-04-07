
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
        {
          label: '博客',
          href: 'https://miaoblog.vercel.app/public/js/',
        },
      ],
      menuList: [],
    }
  },
  created() {
    // 生成左侧菜单栏
    this.menuList = DataArr.map((v, i) => ({
      label: v.name,
      name: (i + 1).toString(),
      icon: v.icon || null,
    }))
  },
  methods: {
    // 关闭浏览器
    CloseWebPage() {
      if (navigator.userAgent.indexOf('MSIE') > 0) {
        if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
          window.opener = null
          window.close()
        } else {
          window.open('', '_top')
          window.top.close()
        }
      } else if (navigator.userAgent.indexOf('Firefox') > 0) {
        window.location.href = 'about:blank ' //火狐默认状态非window.open的页面window.close是无效的
        //window.history.go(-2);
      } else {
        window.opener = null
        window.open('', '_self', '')
        window.close()
      }
    },
  },
  mounted(){

  },
  setup() {
    return {}
  },
})
</script>
<style lang="less">
@import './assets/common.css';
</style>