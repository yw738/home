<template>
  <a-modal
    ref="modalRef"
    v-model:open="visible"
    style="width: 700px"
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
      <a-row :gutter="10">
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
        <a-col :span="12">
          <a-form-item label="排序" name="Province">
            <a-input-number
              v-model:value="formData.order_num"
              :min="0"
              :max="999"
            />
          </a-form-item>
        </a-col>

        <a-col :span="12">
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
        </a-col>
      </a-row>
    </a-form>
    <template #footer>
      <a-button type="primary" @click="submitForm">{{
        $t("btn.confirm")
      }}</a-button>
      <a-button @click="cancel">{{ $t("btn.cancel") }}</a-button>
    </template>
    <template #modalRender="{ originVNode }">
      <div :style="transformStyle">
        <component :is="originVNode" />
      </div>
    </template>
  </a-modal>
</template>

<script setup>
/**
 *  add||edit
 */
import { ref, toRefs, onBeforeMount, reactive } from "vue";
import { moveDraggable } from "@/common/move";
import { addressApi } from "@/api/login";
import { message } from "ant-design-vue";
import { orderApi } from "@/api/order";

const modalTitleRef = ref(null);
let { transformStyle } = moveDraggable(modalTitleRef);
let props = defineProps({
  /**
   * 是否显示默认地址按钮
   */
  isShowCheckbox: {
    type: Boolean,
    default: true,
  },

  // 新增界面在哪儿使用 。address 代表在新增地址。 billress 代表在新增 账单地址
  pageType: {
    type: String,
    default: "address",
  },
});

const filterOption = (input, option) => {
  return option?.EnglishName?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0;
};
const filterOption2 = (input, option) => {
  return option?.label?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0;
};

// 是否默认 新增地址的时候 新增一条账单地址
let isAddBill = ref(true);
const state = reactive({
  title: "",
  visible: false,
  openType: "",
  formData: {
    Id: "",
    NationalCodeId: "",
    PostalCode: "",
    Province: "",
    ProvinceCode: "",
    City: "",
    DetailedAddress: "",
    LastName: "",
    FirstName: "",
    Phone: "",
    DefaultCheck: false,
  },
  rules: {
    FirstName: [
      {
        required: true,
        message: $t("请输入") + " " + $t("名字"),
        trigger: "blur",
      },
    ],
    LastName: [
      {
        required: true,
        message: $t("请输入") + " " + $t("姓"),
        trigger: "blur",
      },
    ],
    PostalCode: [
      {
        required: true,
        message: $t("请输入") + " " + $t("邮编"),
        trigger: "blur",
      },
    ],
    NationalCodeId: [
      {
        required: true,
        message: $t("请选择") + " " + $t("国家"),
        trigger: "blur",
      },
    ],
    Province: [
      {
        required: true,
        message: $t("请选择") + " " + $t("省份"),
        trigger: "blur",
      },
    ],
    City: [
      {
        required: true,
        message: $t("请输入") + " " + $t("城市"),
        trigger: "blur",
      },
    ],
    Phone: [
      {
        required: true,
        message: $t("请输入") + " " + $t("联系电话"),
        trigger: "blur",
      },
    ],
    DetailedAddress: [
      {
        required: true,
        message: $t("请输入") + " " + $t("详细地址"),
        trigger: "blur",
      },
    ],
  },
  options: [], //国家
  options2: [], //省州
});
const { title, visible, formData, rules, options, options2 } = toRefs(state);

onBeforeMount(() => {
  addressApi.getCodes().then((res) => {
    // debugger
    state.options = res?.Data?.map((v) => ({
      ...v,
      label: v.EnglishName,
      value: v.Id,
    }));
  });
  // state.options = pcaCode;
});

let handChange = (val, isFrist = true) => {
  let item = findItem(state.options, val);
  state.options2 = [];
  if (!isFrist) {
    state.formData.ProvinceCode = "";
    state.formData.Province = "";
  }
  addressApi.getProvince({ countryCode: item.Code }).then((res) => {
    state.options2 =
      res?.Data?.map((v) => ({
        ...v,
        label: v.Name,
        value: v.Code,
      })) || [];
  });
};

let handProvince = (val) => {
  let item = findItem(state.options2, val);
  Object.assign(state.formData, {
    Province: item.Name,
    ProvinceCode: item.Code,
  });
};

// emit 子组件向父组件事件传递
const emit = defineEmits(["success"]);
const dataFormRef = ref(null);
const labelCol = {
  style: {
    width: "200px",
    // width: "0",
  },
};

let init = async (type, res2 = {}) => {
  let res = JSON.parse(JSON.stringify(res2));
  state.visible = true;
  if (type == "edit") {
    delete res.address;
    delete res.DefaultCheckName;
    Object.assign(state.formData, {
      ...res,
      NationalCodeId: res?.NationalCode?.Id,
    });
    handChange(res?.NationalCode?.Id);
    // debugger
    state.title = $t("编辑收货地址");
  } else if (type == "orderEdit") {
    // 订单暂时不能修改地址了  以下内容 废弃
    return;
    state.title = $t("编辑收货地址");
    orderApi.detail({ OrderNo: res.OrderNo }).then((response) => {
      if (response.Type == 0) {
        let { Data: data } = response;
        Object.assign(state.formData, {
          OrderNo: res.OrderNo,
          Id: 0,
          UUID: "0",
          Province: data.Delivery_Province,
          ProvinceCode: "",
          City: data.Delivery_City,
          County: data.Delivery_County,
          DetailedAddress: data.Delivery_DetailAddress,
          Recipient: data.Delivery_Recipient,
          Phone: data.Delivery_Phone,
          address: [
            data.Delivery_Province,
            data.Delivery_City,
            data.Delivery_County,
          ],
        });
      }
    });
  } else {
    if (props.pageType == "address") {
      state.title = $t("新增收货地址");
    } else {
      state.title = "Add Billing address";
    }

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
    Id: "",
    NationalCodeId: null,
    PostalCode: "",
    Province: "",
    City: "",
    ProvinceCode: null,
    DetailedAddress: "",
    LastName: "",
    FirstName: "",
    Phone: "",
    DefaultCheck: false,
  });
}

function submitForm(type = 1) {
  dataFormRef.value
    .validate()
    .then(() => {
      // 暂时没有修改 订单 地址
      if (state.openType == "orderEdit") {
        handleUpdate();
      } else {
        handleAdd();
      }
    })
    .catch((error) => {
      // console.log("error", error);
    });
}
async function handleAdd() {
  let params = JSON.parse(JSON.stringify(state.formData));
  if (state.openType == "add") {
    delete params.Id;
  }
  try {
    let res = null;
    if (props.pageType == "billress") {
      res = await addressApi.addBill(params);
    } else if (props.pageType == "address") {
      res = await addressApi.add(params);
      // 如果在新增地址的地方，勾选了 新增账单地址 则 调下面的api
      if (isAddBill.value && state.openType == "add") {
        addressApi.addBill(params);
      }
    }

    if (res.Type == 0) {
      let msg = res.Messages[0];
      if ((msg = "修改账单地址成功")) {
        msg = "Shipping address updated successfully";
      }
      if ((msg = "新增账单地址成功")) {
        msg = "New shipping address added successfully";
      }
      message.success(msg);
      cancel();
      reSetFn();
      emit("success");
    } else {
      message.warning(res.Messages[0]);
    }
  } catch (err) {
    // console.log(err);
  }
}

let handleUpdate = () => {
  let params = JSON.parse(JSON.stringify(state.formData));
  delete params.NationalCode;
  let OrderNo = params.OrderNo;
  delete params.OrderNo;
  orderApi.editAddress(OrderNo, params).then((res) => {
    if (res.Type == 0) {
      message.success(res.Messages);
      cancel();
      reSetFn();
      emit("success");
    } else {
      message.warning(res.Messages);
    }
  });
};

// 组件暴露自己的属性
defineExpose({ init });
</script>

<style lang="scss" scoped>
.scs_input {
  border-radius: 4px;
  ::v-deep(.ant-select-selector) {
    border-radius: 4px !important;
  }
  ::v-deep(.ant-select-selection-placeholder) {
    color: #999;
  }
}
</style>
