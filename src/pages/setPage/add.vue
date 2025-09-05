<template>
  <a-modal
    ref="modalRef"
    v-model:open="visible"
    style="width: 500px"
    :wrap-style="{ overflow: 'hidden' }"
    @cancel="cancel"
  >
    <template #title>
      {{ title }}
    </template>
    <a-form
      ref="dataFormRef"
      style="width: 100%"
      :model="formData"
      :rules="rules"
      :label-col="labelCol"
    >
      <a-form-item label="父节点" class="mb15">
        <a-cascader
          v-model:value="formData.pid"
          :options="cascaderData"
          placeholder="Please select"
          change-on-select
        />
      </a-form-item>

      <a-form-item label="标题" class="mb15">
        <a-input v-model:value="formData.name" />
      </a-form-item>

      <a-form-item label="链接" class="mb15">
        <a-input v-model:value="formData.url" />
      </a-form-item>
      <a-form-item label="图片" class="mb15">
        <a-input style="width: 100%" v-model:value="formData.img" />
      </a-form-item>

      <a-form-item label="描述" class="mb15" name="Phone">
        <a-input style="width: 100%" v-model:value="formData.tips" />
      </a-form-item>
      <a-form-item label="tags" class="mb15" name="NationalCodeId">
        <a-input style="width: 100%" v-model:value="formData.tags" />
      </a-form-item>

      <a-form-item label="排序" name="Province">
        <a-input-number
          v-model:value="formData.order_num"
          :min="0"
          :max="999"
        />
      </a-form-item>

      <a-form-item label="是否隐藏" class="mb15" name="City">
        <a-radio-group
          v-model:value="formData.private"
          :options="[
            {
              label: '显示',
              value: 0,
            },
            {
              label: '隐藏',
              value: 1,
            },
          ]"
        />
      </a-form-item>
    </a-form>
    <template #footer>
      <a-button type="primary" @click="submitForm">确定</a-button>
      <a-button @click="cancel">取消</a-button>
    </template>
  </a-modal>
</template>

<script setup>
/**
 *  add||edit
 */
import { ref, toRefs, onBeforeMount, reactive } from "vue";
import { message } from "ant-design-vue";
import { useUser } from "@/store/user.js";
const user = useUser();

let props = defineProps({
  cascaderData: {
    type: Array,
    default: () => [],
  },
});
let { cascaderData } = toRefs(props);

const state = reactive({
  title: "",
  visible: false,
  openType: "",
  formData: {
    id: 0,
    pid: -1,
    name: "",
    url: "",
    img: "",
    tips: "",
    tags: "",
    notes: "",
    order_num: 0,
    private: 0,
  },
  rules: {
    FirstName: [
      {
        required: true,
        message: "请输入",
        trigger: "blur",
      },
    ],
    LastName: [
      {
        required: true,
        message: "请输入",
        trigger: "blur",
      },
    ],
    PostalCode: [
      {
        required: true,
        message: "请输入",
        trigger: "blur",
      },
    ],
  },
});
const { title, visible, formData, rules } = toRefs(state);

onBeforeMount(() => {});

const emit = defineEmits(["success"]);
const dataFormRef = ref(null);
const labelCol = {
  style: {
    width: "120px",
  },
};

let init = async (type, res2 = {}) => {
  let res = JSON.parse(JSON.stringify(res2));
  state.visible = true;
  if (type == "edit") {
    Object.assign(state.formData, res);
    state.title = "编辑";
  } else {
    state.title = "新增";
    reSetFn();
  }

  state.openType = type;
};

function cancel() {
  dataFormRef?.value?.resetFields();
  state.visible = false;
  state.title = "";
  reSetFn();
}

function reSetFn(isBtn = false) {
  Object.assign(state.formData, {
    pid: -1,
    name: "",
    url: "",
    img: "",
    tips: "",
    tags: "",
    notes: "",
    order_num: 0,
    private: 0,
  });
}

function submitForm(type = 1) {
  dataFormRef.value
    .validate()
    .then(() => {
      // 暂时没有修改 订单 地址
      if (state.openType == "edit") {
        handleUpdate();
      } else {
        handleAdd();
      }
    })
    .catch((error) => {});
}
async function handleAdd() {
  let params = JSON.parse(JSON.stringify(state.formData));
  let pid;
  if (params.pid instanceof Array) {
    params?.pid?.reverse();
    pid = params?.pid[0];
  } else {
    pid = params.pid;
  }
  params.pid = pid;
  try {
    user.add(params).then((res) => {
      if (res.success) {
        message.success("新增成功！");
        cancel();
        reSetFn();
        emit("success");
      } else {
        message.success("新增失败！");
      }
    });
  } catch (err) {}
}

let handleUpdate = () => {
  let params = JSON.parse(JSON.stringify(state.formData));
  let pid;
  if (params.pid instanceof Array) {
    params?.pid?.reverse();
    pid = params?.pid[0];
  } else {
    pid = params.pid;
  }
  params.pid = pid;
  try {
    user.edit(params).then((res) => {
      debugger;
      if (res.success) {
        message.success("修改成功！");
        cancel();
        reSetFn();
        emit("success");
      } else {
        message.success("修改失败！");
      }
    });
  } catch (err) {}
};

// 组件暴露自己的属性
defineExpose({ init });
</script>

<style scoped></style>
