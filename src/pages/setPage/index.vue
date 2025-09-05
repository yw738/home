<template>
  <div class="box">
    <a-button @click="init" style="margin-right: 20px">刷新</a-button>
    <a-button type="primary" @click="addItem">新增</a-button>
    <div style="margin: 10px 0 0 0">
      <vxe-grid v-bind="gridOptions" ref="gridRef">
        <template #name-default="{ row }">
          <span style="color: red">{{ row.title }}</span>
        </template>
        <template #action="params">
          <a-button
            size="small"
            @click="edit(params.row, index)"
            style="margin-right: 10px"
            >编辑</a-button
          >
          <a-button danger size="small" @click="del(params.row, index)"
            >删除</a-button
          >
        </template>
      </vxe-grid>
    </div>
    <Add ref="addRefs" :cascaderData="cascaderData" />
  </div>
</template>

<script setup>
import { nextTick, ref, onBeforeMount } from "vue";
import { deepCloneFn } from "./useHook.js";
import { useUser } from "@/store/user.js";
import { Modal, message } from "ant-design-vue";
import Add from "./add.vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const user = useUser();
let addRefs = ref(null);
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
      formatter({ cellValue, row, column }) {
        // cellValue: 当前单元格的值
        // row: 当前行数据
        // column: 当前列配置
        if (cellValue === 1) {
          return "隐藏";
        } else if (cellValue === 0) {
          return "显示";
        }
        return "未知";
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

let cascaderData = ref([]);

let init = async () => {
  let oldObj = deepCloneFn(gridOptions.value);
  let arr = await user.init(true);
  oldObj.data = arr;
  cascaderData.value = arr.map((v) => {
    return {
      value: v.id,
      label: v.name,
      children:
        v?.children?.map((s) => {
          return {
            value: s.id,
            label: s.name,
          };
        }) || [],
    };
  });
  gridOptions.value = oldObj;
};
onBeforeMount(async () => {
  if (!user.token) {
    router.replace("/");
    return;
  }
  init();
});

let addItem = () => {
  addRefs.value.init("add", {});
};
let edit = (row) => {
  addRefs.value.init("edit", row);
};

let del = async (params) => {
  let { id } = params;
  Modal.confirm({
    title: "提示",
    content: "该数据将被删除。确定删除吗？",
    okText: "确定",
    cancelText: "取消",
    async onOk() {
      user.del({ id }).then((res) => {
        init();
      });
    },
    onCancel() {},
  });
};
</script>
<style scoped lang="less">
.box {
  padding: 10px;
}
</style>
