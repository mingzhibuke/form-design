<template>
  <div>
    <!-- <template v-if="data.type.indexOf('range') != -1">
      <el-form-item label="开始占位内容">
        <el-input v-model="data.startPlaceholder"
                  placeholder="开始占位内容"></el-input>
      </el-form-item>
      <el-form-item label="结束占位内容">
        <el-input v-model="data.endPlaceholder"
                  placeholder="结束占位内容"></el-input>
      </el-form-item>
    </template> -->
    <el-form-item label="表单项提示内容">
      <el-input v-model="data.notice" placeholder="表单项提示内容"></el-input>
    </el-form-item>
    <el-form-item v-if="data.type == 'datetime'" label="日期时间格式">
      <el-select
        v-model="data.formValues[0].limitFormat"
        placeholder="日期时间格式"
        @change="handleChange"
      >
        <el-option label="年-月-日 时" value="yyyy-MM-dd HH"></el-option>
        <el-option label="年-月-日 时:分" value="yyyy-MM-dd HH:mm"></el-option>
        <el-option
          label="年-月-日 时:分:秒"
          value="yyyy-MM-dd HH:mm:ss"
        ></el-option>
        <el-option label="月-日" value="MM-dd"></el-option>
        <el-option label="月-日 时" value="MM-dd HH"></el-option>
        <el-option label="月-日 时:分" value="MM-dd HH:mm"></el-option>
        <el-option label="月-日 时:分:秒" value="MM-dd HH:mm:ss"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item v-if="data.type == 'time'" label="日期时间格式">
      <el-select
        v-model="data.formValues[0].limitFormat"
        placeholder="日期时间格式"
        @change="handleChange"
      >
        <el-option label="时:分" value="HH:mm"></el-option>
        <el-option label="时:分:秒" value="HH:mm:ss"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="列如:">
      <span style="font-weight: bold">{{ dateTime }}</span>
    </el-form-item>
    <el-form-item label="是否可编辑">
      <el-switch v-model="data.editable"></el-switch>
    </el-form-item>
    <el-form-item label="是否显示">
      <el-switch v-model="data.visible"></el-switch>
    </el-form-item>
    <el-form-item>
      是否必填：
      <el-switch v-model="data.require"></el-switch>
    </el-form-item>
  </div>
</template>

<script>
import { dateFormat } from "@utils/index.js";
export default {
  name: "config-date",
  props: ["data"],
  data() {
    return {
      validator: {
        type: null,
        required: null,
        pattern: null,
        length: null,
      },
      dateTime: "",
    };
  },
  methods: {
    generateRule() {
      const rules = [];
      Object.keys(this.validator).forEach((key) => {
        if (this.validator[key]) rules.push(this.validator[key]);
      });
      this.data.rules = rules;
    },
    handleChange(val) {
      this.dateTime = dateFormat(new Date(), val);
    },
  },
  watch: {
    "data.require": function (val) {
      if (val)
        this.validator.required = {
          required: true,
          message: `${this.data.title}必须填写`,
        };
      else this.validator.required = null;
      this.generateRule();
    },
    data: {
      handler(newVal, oldVal) {
        let timeData = dateFormat(new Date(), newVal.formValues[0].limitFormat);
        switch (newVal.type) {
          case "daterange":
            this.dateTime = timeData + "---" + timeData;
            break;
          case "timerange":
            this.dateTime = timeData + "---" + timeData;
            break;
          case "datetimerange":
            this.dateTime = timeData + "---" + timeData;
            break;
          default:
            this.dateTime = dateFormat(
              new Date(),
              newVal.formValues[0].limitFormat
            );
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

