<template>
  <div>
    <el-form-item label="表单项提示内容">
      <el-input v-model="data.notice"
                placeholder="表单项提示内容"></el-input>
    </el-form-item>
    <!-- <el-form-item label="默认值">
      <el-input v-model="data.value"
                placeholder="默认值"></el-input>
    </el-form-item> -->
    <!-- <el-form-item label="前缀">
      <el-input v-model="data.prepend"
                placeholder="前缀"></el-input>
    </el-form-item>
    <el-form-item label="后缀">
      <el-input v-model="data.append"
                placeholder="后缀"></el-input>
    </el-form-item> maxlength-->
    <el-form-item label="最大长度">
      <el-input-number v-model="data.limitMax"
                       controls-position="right"
                       :min="0"
                       placeholder="最大长度"></el-input-number>
    </el-form-item>
        <el-form-item label="最小长度">
      <el-input-number v-model="data.limitMin"
                       controls-position="right"
                       :min="0"
                       placeholder="最小长度"></el-input-number>
    </el-form-item>
    <!-- <el-form-item label="显示计数"
                  v-if="data.type != 'password'">
      <el-switch v-model="data.showWordLimit"></el-switch>
    </el-form-item> -->
    <el-form-item label="是否可编辑">
      <el-switch v-model="data.editable"></el-switch>
    </el-form-item>
    <el-form-item label="是否显示">
      <el-switch v-model="data.visible"></el-switch>
    </el-form-item>
    <el-form-item >
      是否必填：
      <el-switch v-model="data.require"></el-switch>
      <!-- <el-input v-model.lazy="data.pattern"
                placeholder="正则表达式"></el-input> -->
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "config-input",
  props: ['data'],
  data () {
    return {
        datas:{},
        validator: {
        type: null,
        require: null,
        pattern: null,
        length: null
      }
    }
  },
  methods: {
    generateRule () {
      const rules = [];
      Object.keys(this.validator).forEach(key => {
        if (this.validator[key]) rules.push(this.validator[key])
      })
      this.data.rules = rules
    },
  },
  watch: {
    'data.require': function (val) {
      if (val) this.validator.require = { required: true, message: `${this.data.title}必须填写` }
      else this.validator.require = null
      this.generateRule()
    },
    'data.pattern': function (val) {
      if (val) this.validator.pattern = { pattern: new RegExp(val), message: `${this.data.label}格式不匹配` }
      else this.validator.pattern = null
      // delete this.data.pattern
      this.generateRule()
    },
    'data.limitMin':function(val){
      if(this.data.limitMax&&this.data.limitMin>this.data.limitMax){
        this.data.limitMin=this.data.limitMax-1
      }
    }
  }
}
</script>
