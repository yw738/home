<script >
/**
 * 卡片盒子
 */
import Card from './Card.vue'
import { TagOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref, defineProps } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    Card,
    TagOutlined,
  },

  setup() {
    const store = useStore()
    return {
      isPrivate: computed(() => store.state.isPrivate),//检测是否开启私密模式
    }
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
      <template v-for="(item,index) in params.data" :key="index">
        <!-- item.private => 是否隐藏该卡片，设为私密卡片 -->
        <a-col :xxl="4" :xl="6" :lg="8" :md="12" :sm="24" v-if="isPrivate||!item.private">
          <Card style="width:100%" :tagName="params.name" :item="item" />
        </a-col>
      </template>
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
