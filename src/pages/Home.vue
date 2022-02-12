<script >
import Card from './../components/Card.vue'

import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    Card,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
    }
  },
})
// defineProps({
//   msg: String,
// })

const count = ref(0)
</script>

<template>

  <a-row :gutter="[16,8]">
    <a-col :span="{xs:4,sm:6}" v-for="(item,index) in 6" :key="index">
      <Card />
    </a-col>
  </a-row>
</template>

<style scoped lang="less">
a {
  color: #42b983;
}
</style>
