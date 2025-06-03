import axios from "axios";
import { JSONFilePreset } from "lowdb/node";
import list from "./../assets/public.js";
const defaultData = { posts: [] };
const db = await JSONFilePreset("db.json", defaultData);

/**
 * 获取所有需要测试的链接
 */
let getUrlarr = async () => {
  let aaa = [];
  try {
    list?.forEach((v) => {
      if (v.children && v.children[0]?.children) {
        v?.children?.forEach((s) => {
          aaa.push(...s.children.map((f) => f.url));
        });
      } else if (v?.children) {
        aaa.push(...v.children.map((a) => a.url));
      } else {
        aaa.push(v.url);
      }
    });
  } catch (err) {
    console.log(err);
  }
  return aaa;
};

let arr = await getUrlarr();

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
  console.log(`================================================`);
  console.log(`================== 测试完成 =====================`);
  console.log(`================================================`);
};

testUrl();

console.log(`================================================`);
console.log(`================ 开始启动测试 ===================`);
console.log(`================================================`);
