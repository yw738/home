<template>
  <div class="choose_box" :id="`scroll${index}`">
    <template v-if="params.children && params.children[0].children">
      <div style="margin-bottom: 24px">
        <Tabcom :tabHead="params.children" v-model:active="active" />
      </div>
      <template v-for="(v, i) in params.children" :key="i">
        <div v-show="active == i">
          <a-row :gutter="[30, 24]">
            <template v-for="(item, index) in v.children" :key="index">
              <!-- item.private => 是否隐藏该卡片，设为私密卡片 -->
              <a-col :xxl="4" :xl="6" :lg="8" :md="12" :sm="24">
                <Card style="width: 100%" :tagName="params.name" :item="item" />
              </a-col>
            </template>
          </a-row>
        </div>
      </template>
    </template>

    <template v-else>
      <div class="head">
        <div>
          <TagOutlined />
        </div>
        <div>{{ params.name }}</div>
      </div>
      <a-row :gutter="[30, 24]">
        <template v-for="(item, index) in params.children" :key="index">
          <!-- item.private => 是否隐藏该卡片，设为私密卡片 -->
          <a-col
            :xxl="4"
            :xl="6"
            :lg="8"
            :md="12"
            :sm="24"
            v-if="isPrivate || !item.private"
          >
            <Card style="width: 100%" :tagName="params.name" :item="item" />
          </a-col>
        </template>
      </a-row>
    </template>
  </div>
</template>

<script setup>
/**
 * 卡片盒子
 */
import Card from "./Card.vue";
import { TagOutlined } from "@ant-design/icons-vue";
import { ref, defineProps, computed } from "vue";
import Tabcom from "@/components/Tabcom.vue";
import { useUser } from "@/store/user.js";
const user = useUser();
let isPrivate = computed(() => user.isPrivate);
let props = defineProps({
  params: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: Number,
    default: 0,
  },
});

let active = ref(0);
</script>

<style scoped lang="less">
.head {
  .anticon {
    transform: rotate(45deg);
    font-size: 24px;
    margin: 6px 0 0 -2px;
  }
  > div:nth-of-type(2) {
    margin-left: 15px;
  }
  height: 22px;
  margin-bottom: 23px;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #555;
}
.ant-col {
  width: 100%;
}
.choose_box {
  margin-bottom: 30px;
}
</style>
