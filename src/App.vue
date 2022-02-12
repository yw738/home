
<template>
  <div id="app">
    <a-layout class="h100">
      <a-layout-sider v-model:collapsed="collapsed" width="218px" :trigger="null" collapsible>
        <div class="logo">
          <img class="noView" v-if="collapsed" src="https://www.no404.vip/wp-content/uploads/2020/06/20200625140306012922.png">
          <img class="view" v-else src="https://www.no404.vip/wp-content/uploads/2020/06/20200625135808529631.png">
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
          </a-menu-item>

        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #f9f9f9; padding: 0">
          <div class="header">
            <div>
              <menu-unfold-outlined style="font-size:20px;margin-left:16px;" v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
              <menu-fold-outlined style="font-size:20px;margin-left:16px;" height="20px" v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </div>
            <div>
              <a-dropdown>
                <a class="ant-dropdown-link" style="color:#282a2d" @click.prevent>
                  Hover me
                  <DownOutlined />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      1st menu item
                    </a-menu-item>
                    <a-menu-item>
                      2nd menu item
                    </a-menu-item>
                    <a-menu-item>
                      3rd menu item
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </div>

        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <Home />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script >
//leftmenu #f9f9f9
import Home from './pages/Home.vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
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
    Home,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
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
}
</style>