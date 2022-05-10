<script >
import CardsBox from './../components/CardsBox.vue'
import { defineComponent, ref } from 'vue'
import DataArr from './../assets/public.js'
export default defineComponent({
  components: {
    CardsBox,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      DataArr: DataArr,
    }
  },
  created() {},
})
// defineProps({
//   msg: String,
// })

const count = ref(0)
</script>

<template>
  <CardsBox v-for="(item,index) in DataArr" :index="index" :params="item" :key="index" />
</template>

<style scoped lang="less">
</style>
