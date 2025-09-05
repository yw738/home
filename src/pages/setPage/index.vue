<template>
  <div class="box">
    <a-button type="primary" style="margin-right: 10px" @click="saveJs"
      >保存</a-button
    >
    <a-button type="primary" @click="addItem">新增</a-button>
    <div style="margin: 10px 0 0 0">
      <vxe-grid v-bind="gridOptions" ref="gridRef">
        <template #name-default="{ row }">
          <span style="color: red">{{ row.title }}</span>
        </template>
        <template #action="params">
          <a-button danger size="small" @click="edit(params, index)"
            >编辑</a-button
          >
          <a-button danger size="small" @click="del(params, index)"
            >删除</a-button
          >
        </template>
      </vxe-grid>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref, onBeforeMount } from "vue";
import tableList from "@/assets/public.js";
import { exportDataToJSFile, deepCloneFn } from "./useHook.js";
import { useUser } from "@/store/user.js";
const user = useUser();

let gridOptions = ref({
  border: true,
  treeConfig: {
    showLine: true,
    childrenField: "children",
  },
  columns: [
    { type: "seq", width: 70 },
    {
      field: "name",
      title: "title",
      width: 200,
      treeNode: true,
    },
    { field: "tips", title: "tips" },
    { field: "url", title: "url" },
    { field: "img", title: "img" },
    {
      field: "tags",
      title: "tags",
      width: 200,
    },
    {
      field: "private",
      title: "是否隐藏",
    },
    {
      field: "action",
      title: "操作",
      width: 150,
      slots: { default: "action" },
    },
  ],
  data: [],
});

let gridRef = ref(null);

let getList = () => {
  const $table = gridRef.value;
  let arr = $table.getTreeExpandRecords();
  console.log(arr);
  return arr;
};

let expandAllTreeEvent = (rows = []) => {
  const $table = gridRef.value;
  if ($table) {
    $table.setTreeExpand(rows, true);
  }
};

let reload = (fn) => {
  let rows = getList();
  fn();
  nextTick(() => expandAllTreeEvent(rows));
};

onBeforeMount(async () => {
  let oldObj = deepCloneFn(gridOptions.value);
  let arr = await user.init();
  oldObj.data = arr;
  gridOptions.value = oldObj;
});

let addItem = () => {
  // let oldObj = deepCloneFn(gridOptions.value);
  // oldObj.data.push({
  //   title: "新增的",
  //   children: [
  //     {
  //       title: "",
  //       tags: "",
  //       tips: "",
  //       url: "",
  //     },
  //   ],
  // });
  // reload(() => {
  //   gridOptions.value = oldObj;
  // });
};
let edit = () => {};

let del = async (params) => {
  let { seq, row, rowid, level } = params;
  // console.log(params);
  // const myData = deepCloneFn(gridOptions.value.data);
  // let [i, j, l] = seq.split(".");

  // if (level == 0) {
  //   myData.splice(i - 1, 1);
  // } else if (level == 1) {
  //   let arr2 = myData[i - 1];
  //   arr2.children.splice(j - 1, 1);
  // } else if (level == 2) {
  //   let arr2 = myData[i - 1].children[j - 1];
  //   arr2.children.splice(l - 1, 1);
  // }
  // reload(() => {
  //   gridOptions.value.data = myData;
  // });
};

let saveJs = () => {
  const myData = deepCloneFn(gridOptions.value.data);
  myData.forEach((v) => {
    if (v.children?.length) {
      v["_X_ROW_KEY"] && delete v["_X_ROW_KEY"];
      v.children.forEach((s) => {
        s["_X_ROW_KEY"] && delete s["_X_ROW_KEY"];
        s.tags && (s.tags = s.tags.split(","));
        s?.private &&
          (s.private == "false" ? (s.private = false) : (s.private = true));
        if (s.children?.length) {
          s.children.forEach((p) => {
            p["_X_ROW_KEY"] && delete p["_X_ROW_KEY"];
            p?.tags && (p.tags = p.tags.split(","));
            p?.private &&
              (p.private == "false" ? (p.private = false) : (p.private = true));
          });
        }
      });
    }
  });
  console.log(myData);
  exportDataToJSFile(myData, "users.js");
};
</script>
<style scoped lang="less">
.box {
  padding: 10px;
}
</style>
