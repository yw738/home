import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue';
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

const app = createApp(App)

// 将 store 实例作为插件安装
app.use(store)