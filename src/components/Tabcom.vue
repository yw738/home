<template>
  <div class="container cus_tab">
    <div class="tabs" :style="{ width: getWidth() }">
      <template v-for="(item, index) in headArr" :key="index">
        <input
          type="radio"
          :id="`radio-${index + 1}`"
          name="tabs"
          :checked="comActive == index"
        />

        <label
          class="tab"
          :class="comActive == index ? 'active' : ''"
          :for="`radio-${index + 1}`"
          @click="handClick(index)"
          >{{ item }}</label
        >
      </template>
      <span
        class="glider"
        :style="{
          transform: `translateX(${comActive * 100}%)`,
        }"
      ></span>
    </div>
  </div>
</template>

<script setup>
/**
 * 自定义 tab
 */
import { ref, defineComponent, computed, watch } from "vue";
let props = defineProps({
  active: {
    type: Number,
    default: 0,
  },
  tabHead: {
    type: Array,
    default: () => [],
  },
});
let comActive = ref(0);
let headArr = computed(() => {
  return props.tabHead.map((v) => v.title);
});
let emit = defineEmits(["update:active"]);
let handClick = (index) => {
  comActive.value = index;
  emit("update:active", index);
};
watch(
  () => props.active,
  () => {
    comActive.value = props.active;
  }
);
let getWidth = () => {
  let num = headArr?.value?.length || 1;
  return 110 * num + 16 + "px";
};
</script>

<style lang="less">
:root {
  //   --primary-color: #185ee0;
  //   --secondary-color: #e6eef9;
  --primary-color: #fff;
  --secondary-color: #f1404bd6;
}
// background: #f1404b;
//     color: #fff;
.cus_tab {
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  .container {
    position: relative;
    width: auto;
  }

  .tabs {
    display: flex;
    position: relative;
    background-color: #fff;
    box-shadow: 0px 0px 10px -6px #9e9e9e;
    padding: 8px;
    border-radius: 99px;
  }

  .tabs * {
    z-index: 99;
  }

  input[type="radio"] {
    display: none;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 110px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in;
    &.active {
      color: var(--primary-color);
    }
  }

  .glider {
    position: absolute;
    display: flex;
    height: 30px;
    width: 110px;
    background-color: var(--secondary-color);
    z-index: 2;
    border-radius: 99px;
    transition: 0.25s ease-out;
  }
}
</style>
