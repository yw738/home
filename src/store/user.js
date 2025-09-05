import { defineStore } from "pinia";
import menuicon from "@/assets/image/menuicon.js";

export const useUser = defineStore("user", {
  state: () => ({
    isPrivate: false, //是否为私密模式 ，开启隐藏菜单

    searchKey: "",

    menuList: [],
    dataArr: [],
    BASEAPI: "https://d1-tutorial.yff738751286.workers.dev",
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

    getMenuList() {
      let arr1 = sessionStorage.getItem("dataArr");
      let arr2 = sessionStorage.getItem("menuList");
      // 多次请求走 会话缓存
      if (arr1 && arr2) {
        this.dataArr = JSON.parse(arr1);
        this.menuList = JSON.parse(arr2);
        return;
      }
      fetch(`${this.BASEAPI}/api/sites`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((res) => {
          let { data, success } = res;
          if (success) {
            let arr = list2Tree(data);
            this.dataArr = arr[0].children;
            this.menuList = this.dataArr.map((v, i) => ({
              label: v.name,
              name: (i + 1).toString(),
              icon: menuicon[v.img] || null,
            }));
            sessionStorage.setItem("dataArr", JSON.stringify(this.dataArr));
            sessionStorage.setItem("menuList", JSON.stringify(this.menuList));
          }
        })
        .catch((error) => console.error("Error:", error));
    },
  },
});
