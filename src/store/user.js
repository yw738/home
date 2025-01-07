import { defineStore } from "pinia";
export const useUser = defineStore("user", {
  state: () => ({
    isPrivate: false, //是否为私密模式 ，开启隐藏菜单
  }),

  getters: {},

  actions: {
    async RESET_STATE() {
      this.$reset();
    },
    /**
     * @param {object} state store 实例
     * @param {boolean} boolean 传入的布尔值
     */
    setPrivate(boolean) {
      this.isPrivate = boolean;
    },
  },
});
