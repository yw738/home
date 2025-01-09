import axios from "axios";
import { JSONFilePreset } from "lowdb/node";
import { getUrlarr } from "./test.js";
const defaultData = { posts: [] };
const db = await JSONFilePreset("db.json", defaultData);
let arr = getUrlarr();

/**
 * 测试链接专用
 */

async function checkLinkValidity(url) {
  try {
    // 发送HEAD请求以避免下载整个页面内容
    const response = await axios.head(url);
    if (response.status >= 200 && response.status < 300) {
      console.log(`链接有效: ${url}`);
    } else {
      console.log(`链接可能无效: ${url}, 状态码：${response.status}`);
    }
  } catch (error) {
    if (error.response) {
      // 请求已发出，但服务器响应了状态码不在2xx范围内
      console.log(`链接无效: ${url}, 状态码：${error.response.status}`);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.log(`链接无效: ${url}, 请求未收到响应`);
    } else {
      // 在设置请求时发生了一些事情，触发了一个错误
      console.log(`链接无效: ${url}, 错误信息：${error.message}`);
    }
    db.data.posts.push(url);
  }
}

let testUrl = async () => {
  for (let i = 0; i < arr.length; i++) {
    await checkLinkValidity(arr[i]);
    await db.write();
  }
};

testUrl();
