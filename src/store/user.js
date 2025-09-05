import { defineStore } from "pinia";
import menuicon from "@/assets/image/menuicon.js";

export const useUser = defineStore("user", {
  state: () => ({
    isPrivate: false, //是否为私密模式 ，开启隐藏菜单
    token: localStorage.getItem("token") || "",

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

    init(isEdit = false) {
      return fetch(`${this.BASEAPI}/api/sites`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((res) => {
          let { data, success } = res;
          if (success) {
            let arr = list2Tree(data);
            if (isEdit) {
              return arr[0].children;
            }
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
    getMenuList() {
      let arr1 = sessionStorage.getItem("dataArr");
      let arr2 = sessionStorage.getItem("menuList");
      // 多次请求走 会话缓存
      if (arr1 && arr2) {
        this.dataArr = JSON.parse(arr1);
        this.menuList = JSON.parse(arr2);
        return;
      }
      this.init();
    },

    /**
     * 用户登录请求
     * @param userInfo 登录用户信息
     *  username: 用户名
     *  password: 密码
    //  *  code: 验证码
    //  *  uuid: 匹配正确验证码的 key
     */
    login(userInfo = {}) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        fetch(`${this.BASEAPI}/api/login`, {
          method: "POST", // 或 POST、PUT 等
          headers: {
            "Content-Type": "application/json", // 根据需要添加
          },
          body: JSON.stringify({ username, password }),
        })
          .then((response) => response.json())
          .then((response) => {
            const { token, success, message } = response;
            if (success) {
              window.localStorage.setItem("token", token);
              this.token = token;
              resolve();
            } else {
              reject();
            }
          })
          .catch((error) => console.error("Error:", error));
      });
    },

    add(params) {
      return new Promise((resolve, reject) => {
        const token = this.token;
        if (!token) {
          reject();
          return;
        }
        fetch(`${this.BASEAPI}/api/addsite`, {
          method: "POST", // 或 POST、PUT 等
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // 根据需要添加
          },
          body: JSON.stringify(params),
        })
          .then((response) => response.json())
          .then((response) => {
            const { data } = response;
            resolve(data);
          })
          .catch((error) => console.error("Error:", error));
      });
    },

    edit(params) {
      return new Promise((resolve, reject) => {
        const token = this.token;
        if (!token) {
          reject();
          return;
        }
        fetch(`${this.BASEAPI}/api/update`, {
          method: "POST", // 或 POST、PUT 等
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // 根据需要添加
          },
          body: JSON.stringify(params),
        })
          .then((response) => response.json())
          .then((response) => {
            resolve(response);
          })
          .catch((error) => console.error("Error:", error));
      });
    },

    del(params) {
      return new Promise((resolve, reject) => {
        const token = this.token;
        if (!token) {
          reject();
          return;
        }
        fetch(`${this.BASEAPI}/api/del`, {
          method: "POST", // 或 POST、PUT 等
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // 根据需要添加
          },
          body: JSON.stringify(params),
        })
          .then((response) => response.json())
          .then((response) => {
            const { data } = response;
            resolve(data);
          })
          .catch((error) => console.error("Error:", error));
      });
    },
  },
});
