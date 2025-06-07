<template>
  <div class="box">
    <a-button type="primary" style="margin-right: 10px" @click="saveJs"
      >保存</a-button
    >
    <a-button type="primary" @click="addItem">新增大类别</a-button>
    <div style="margin: 10px 0 0 0">
      <vxe-grid v-bind="gridOptions" ref="gridRef">
        <template #name-default="{ row }">
          <span style="color: red">{{ row.title }}</span>
        </template>
        <template #action="params">
          <a-button
            @click="add(params)"
            v-if="params.level < 2"
            style="margin-right: 10px"
            type="primary"
            size="small"
          >
            加子类别
          </a-button>
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
// import { VxeTable, VxeColumn, VxeGrid } from "https://cdn.jsdelivr.net/npm/vxe-table@4.13.21/lib/index.umd.min.js";
import tableList from "@/assets/public.js";
import { exportDataToJSFile, deepCloneFn } from "./useHook.js";

let gridOptions = ref({
  border: true,
  treeConfig: {
    showLine: true,
    childrenField: "children",
  },
  editConfig: {
    trigger: "click",
    mode: "cell",
  },
  columns: [
    { type: "seq", width: 70 },
    {
      field: "title",
      title: "title",
      width: 200,
      treeNode: true,
      editRender: { name: "input" },
    },
    {
      field: "icon",
      title: "icon",
      width: 150,
      editRender: { name: "input" },
    },
    { field: "tips", title: "tips", editRender: { name: "input" } },
    {
      field: "tags",
      title: "tags",
      width: 200,
      editRender: { name: "input" },
    },
    { field: "url", title: "url", editRender: { name: "input" } },
    { field: "img", title: "img", editRender: { name: "input" } },
    {
      field: "private",
      title: "是否私有",
      editRender: {
        name: "select",
        options: [
          { label: "是", value: true },
          { label: "否", value: false },
        ],
      },
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

onBeforeMount(() => {
  let oldObj = deepCloneFn(gridOptions.value);
  tableList.forEach((v) => {
    if (v.children?.length) {
      v["_X_ROW_KEY"] && delete v["_X_ROW_KEY"];
      v.children.forEach((s) => {
        s["_X_ROW_KEY"] && delete s["_X_ROW_KEY"];
        s.tags && (s.tags = s.tags.join(","));
        if (s.children?.length) {
          s.children.forEach((p) => {
            p["_X_ROW_KEY"] && delete p["_X_ROW_KEY"];
            p.tags && (p.tags = p.tags.join(","));
          });
        }
      });
    }
  });
  oldObj.data = tableList;
  gridOptions.value = oldObj;
});

let addItem = () => {
  let oldObj = deepCloneFn(gridOptions.value);
  oldObj.data.push({
    title: "新增的",
    children: [
      {
        title: "",
        tags: "",
        tips: "",
        url: "",
      },
    ],
  });
  reload(() => {
    gridOptions.value = oldObj;
  });
};
let add = (params) => {
  let { row, level } = params;
  let obj = {
    title: "",
    tags: "",
    tips: "",
    url: "",
    children: [],
  };
  let obj2 = {
    title: "",
    tags: "",
    tips: "",
    url: "",
  };
  if (level == 0) {
    if (row?.children?.length) {
      row.children.push(obj);
    } else {
      row.children = [obj];
    }
  } else if (level == 1) {
    if (row?.children?.length) {
      row.children.push(obj2);
    } else {
      row.children = [obj2];
    }
  }

  reload(() => {
    gridOptions.value = deepCloneFn(gridOptions.value);
  });
};
let del = async (params) => {
  let { seq, row, rowid, level } = params;
  console.log(params);
  const myData = deepCloneFn(gridOptions.value.data);
  let [i, j, l] = seq.split(".");

  if (level == 0) {
    myData.splice(i - 1, 1);
  } else if (level == 1) {
    let arr2 = myData[i - 1];
    arr2.children.splice(j - 1, 1);
  } else if (level == 2) {
    let arr2 = myData[i - 1].children[j - 1];
    arr2.children.splice(l - 1, 1);
  }
  reload(() => {
    gridOptions.value.data = myData;
  });
};

let saveJs = () => {
  const myData = deepCloneFn(gridOptions.value.data);
  myData.forEach((v) => {
    if (v.children?.length) {
      v["_X_ROW_KEY"] && delete v["_X_ROW_KEY"];
      v.children.forEach((s) => {
        s["_X_ROW_KEY"] && delete s["_X_ROW_KEY"];
        s.tags && (s.tags = s.tags.split(","));
        if (s.children?.length) {
          s.children.forEach((p) => {
            p["_X_ROW_KEY"] && delete p["_X_ROW_KEY"];
            p.tags && (p.tags = p.tags.split(","));
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
