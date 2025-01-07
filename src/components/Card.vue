<template>
  <div class="url-body">
    <div class="url-content" @click="openLink(item)">
      <div>
        <img :src="item.img || defaultImg" />
      </div>
      <div style="width: calc(100% - 66px)">
        <div>{{ item.title }}</div>
        <p class="overflowClip_1">{{ item.tips }}</p>
      </div>
    </div>
    <div class="url-goto">
      <div class="goto_box">
        <div class="tga text-xs py-1">
          <span>{{ tagName }}</span>
          <span v-for="(v, i) in item.tags" :key="i">{{ v }}</span>
        </div>

        <div class="togo text-center text-muted is-views">
          <a-tooltip placement="right">
            <template #title>
              <span>{{ item.url }}</span>
            </template>
            <RightCircleOutlined
              @click="openLink(item)"
              style="color: #6c757d"
            />
          </a-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 卡片
 */
import { ref, defineComponent } from "vue";
import { RightCircleOutlined } from "@ant-design/icons-vue";
import defaultImg from "../assets/image/default.png";
let props = defineProps({
  tagName: {
    type: String,
    default: "",
  },
  item: {
    type: Object,
    default: () => ({}),
  },
});
let openLink = (item) => {
  let { url } = item;
  window.open(url);
};
</script>

<style scoped lang="less">
a {
  color: #42b983;
}
.url-body {
  background: #fff;
  padding: 8px 16px;
  box-sizing: border-box;
  border-width: 0;
  transform: translateY(0);
  box-shadow: 0px 0px 10px -6px #9e9e9e;

  transition: all ease 0.2s;
}
.url-body:hover {
  transform: translateY(-5px);
  box-shadow: 0px 26px 40px -24px rgba(0, 36, 100, 0.3);
}

.url-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
  cursor: pointer;
  div {
    flex-shrink: 0;
  }
  > div:nth-of-type(1) {
    width: 60px;
    height: 60px;
    background: rgba(128, 128, 128, 0.1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    overflow: hidden;
    img {
      max-width: 60px;
      max-height: 60px;
    }
  }
  color: #282a2d;
  font-size: 14px;
  > div:nth-of-type(2) div {
    font-weight: bold;
  }
  p {
    color: #6c757d !important;
    font-size: 0.75rem !important;
    margin: 0;
    width: 100%;
  }
}
.overflowClip_1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block !important;
}
.url-content:hover {
  > div:nth-of-type(2) div {
    color: #f1404b;
  }
}

.url-goto {
  height: 26px;
  border-top: 1px solid rgba(136, 136, 136, 0.2);
  padding: 4px 0;
  .goto_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tga {
    span {
      font-size: 75%;
      padding: 0.125rem 0.4rem;
      background: rgba(134, 134, 134, 0.1);
      color: #888;
      border-radius: 10px;
      transition: 0.3s;
      margin-right: 4px;
      cursor: pointer;
    }
    span:hover {
      background: #f1404b;
      color: #fff;
    }
  }
  .togo span:hover {
    background: rgba(108, 117, 125, 0.15);
    border-radius: 50%;
  }
}
</style>
