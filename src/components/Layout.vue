
<template>
  <div id="app">
    <a-layout class="h100">
      <a-layout-sider v-model:collapsed="collapsed" width="218px" :trigger="null" collapsible>
        <div class="logo">
          <img class="noView" v-if="collapsed" :src="logo2">
          <img class="view" v-else :src="logo">
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item v-for="(item,index) in menuList" @click="menuLinkFn(item,index)" :key="index">
            <appstore-outlined />
            <span>{{item.label}}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #f9f9f9; padding: 0">
          <div class="headbox">
            <div class="header">
              <div>
                <menu-unfold-outlined style="font-size:20px;margin-left:16px;" v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                <menu-fold-outlined style="font-size:20px;margin-left:16px;" height="20px" v-else class="trigger" @click="() => (collapsed = !collapsed)" />
              </div>
              <div class="menuItem">
                <div v-for="(item,index) in navList" :key="index" @click="navClick(item)">{{item.label}}</div>
              </div>
            </div>
            <div class="search" @click="searchFn">
              <search-outlined />
            </div>
          </div>

        </a-layout-header>
        <a-layout-content :style="{ margin: 0, padding: '30px 30px 0', background: '#f9f9f9', minHeight: '280px',overflow: 'auto' }">
          <Home />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script >
/**
 * 布局
 */
import Home from './../pages/Home.vue'
import logo from "./../assets/image/logo.png"
import logo2 from "./../assets/image/logo2.png"
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  AppstoreOutlined,
  SearchOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
    AppstoreOutlined,
    SearchOutlined,
    Home,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
    }
  },
  data(){
    return {
      logo:logo,
      logo2:logo2
    }
  },
  props: {
    // 侧边菜单
    menuList: {
      type: Array,
      default: () => [],
    },
    // 头部菜单
    navList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    /**
     * 侧边栏的点击事件
     * @param {string} index 定位的坐标
    */
    menuLinkFn(item, index) {
      document.querySelector(`#scroll${index}`).scrollIntoView({
        behavior: 'smooth', // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
        // block: 'center', // 定义垂直方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "start"
        // inline: 'nearest', // 定义水平方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "nearest"
      })
    },
    /**
     * 顶部栏的点击事件
     * @param {object} item 定位的坐标
    */
    navClick(item){
      if(item?.href){
        window.open(item?.href);
      }
    },
    // 搜索的回调
    searchFn(){
      console.log('点击搜索！')
    }
  },
})
</script>
<style lang="less">
@lightBackground: #f9f9f9;
#app {
  color: #282a2d;
}
.ant-layout-sider {
  background: #f9f9f9 !important;
}
.ant-layout-header {
  height: 74px !important;
  line-height: 74px !important;
  background: #fdfdfd !important;
}
.ant-menu {
  background: transparent !important;
  border: 0 !important;
}
.ant-menu-item-selected {
  color: #515c6b !important;
  background-color: transparent !important;
}
.ant-menu-inline .ant-menu-item-selected::after {
  opacity: 0 !important;
}
.ant-menu-title-content:hover {
  color: #f1404b !important;
  .icon {
    background: #f1404b !important;
  }
}
.ant-menu-title-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.a-layout {
  background: #f9f9f9 !important;
}
.h100 {
  height: 100%;
}
#app {
  height: 100vh;
  width: 100vw;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.logo {
  height: 74px;
  background: #fdfdfd !important;
  display: flex;
  justify-content: center;
  align-items: center;
  .view {
    width: 180px;
    height: 40px;
  }
  .noView {
    width: 38px;
    height: 40px;
  }
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > div:nth-of-type(2) {
    margin-left: 20px;
  }

  .menuItem {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div {
      padding: 0 15px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
    }
    div:hover {
      color: #f1404b !important;
    }
  }
}
.headbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    height: 28px;
    line-height: 28px;
    display: inline-block;
    font-size: 28px;
    margin-right: 16px;
    cursor: pointer;
  }
}
</style>