<script >
/**
 * 卡片盒子
 */
import Card from './Card.vue'
import { TagOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref, defineProps } from 'vue'
export default defineComponent({
  components: {
    Card,
    TagOutlined,
  },

  setup() {
    return {}
  },
  props: {
    params: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  created() {},
})
// defineProps({
//   data: Object,
// })
</script>

<template>
  <div class="choose_box" :id="`scroll${index}`">
    <div class="head">
      <div>
        <TagOutlined />
      </div>
      <div>{{params.name}}</div>
    </div>
    <a-row :gutter="[30,24]">
      <a-col :xxl="4" :xl="6" :lg="8" :md="12" :sm="24" v-for="(item,index) in params.data" :key="index">
        <Card style="width:100%" :tagName="params.name" :item="item" />
      </a-col>
    </a-row>
  </div>

</template>

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
