import DataArr from "@/assets/public.js";
let list = DataArr;

export let getUrlarr = () => {
  let aaa = [];
  list.forEach((v) => {
    if (v.children) {
      v.children.forEach((s) => {
        aaa.push(...s.data.map((f) => f.url));
      });
    } else {
      aaa.push(...v.data.map((a) => a.url));
    }
  });
  return aaa;
};
