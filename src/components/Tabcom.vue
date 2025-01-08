<template>
  <div class="container cus_tab">
    <div class="tabs">
      <input type="radio" id="radio-1" name="tabs" checked />
      <label class="tab" for="radio-1">可以</label>
      <input type="radio" id="radio-2" name="tabs" />
      <label class="tab" for="radio-2">在页签右</label>
      <input type="radio" id="radio-3" name="tabs" />
      <label class="tab" for="radio-3">边添加附</label>
      <span class="glider"></span>
    </div>
  </div>
</template>

<script setup>
/**
 * 自定义 tab
 */
import { ref, defineComponent } from "vue";
import { RightCircleOutlined } from "@ant-design/icons-vue";
import defaultImg from "../assets/image/default.png";
let props = defineProps({
  active: {
    type: Number,
    default: "",
  },
  tabHead: {
    type: Array,
    default: () => [],
  },
});
let openLink = (item) => {
  let { url } = item;
  window.open(url);
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
    width: auto;
    width: 346px;
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

  input[type="radio"]:checked + label {
    color: var(--primary-color);
    // color: red;
  }

  input[id="radio-1"]:checked ~ .glider {
    transform: translateX(0);
  }

  input[id="radio-2"]:checked ~ .glider {
    transform: translateX(100%);
  }

  input[id="radio-3"]:checked ~ .glider {
    transform: translateX(200%);
  }

  input[id="radio-4"]:checked ~ .glider {
    transform: translateX(300%);
  }

  input[id="radio-5"]:checked ~ .glider {
    transform: translateX(400%);
  }
}
</style>
