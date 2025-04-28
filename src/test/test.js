import linkdata from "./link.js";
import DataArr from "./../assets/public.js";
let list = [];
list = linkdata;
export let getUrlarr = async () => {
  let aaa = [];
  // console.log(DataArr);
  try {
    list?.forEach((v) => {
      if (v.children) {
        v.children.forEach((s) => {
          aaa.push(...s.data.map((f) => f.url));
        });
      } else if (v?.data) {
        aaa.push(...v.data.map((a) => a.url));
      } else {
        aaa.push(v.url);
      }
    });
  } catch (err) {
    console.log(err);
  }

  return aaa;
};
