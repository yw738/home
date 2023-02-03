import { createStore } from "vuex";
// 创建一个新的 store 实例
export default createStore({
    state() {
        return {
            isPrivate: false, //是否为私密模式 ，开启隐藏菜单
        };
    },
    mutations: {
        /**
         * @param {object} state store 实例
         * @param {boolean} boolean 传入的布尔值
         */
        setPrivate(state, boolean) {
            state.isPrivate = boolean;
        },
    },
});