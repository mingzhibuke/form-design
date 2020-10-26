export default [
  /* 
  @param titLe表单项名称
  @param notice表单项提示内容
  @param valueType 表单项值类型,如:0:文本展示;1:输入;2:选项;3:时间;4:人员;5:文件;6:位置
  @param editable表单项是否可编辑@param position表单项顺序
  @param visible表单项是否显示
  @param require表单项是否必填@param LimitMin值的最小数量
  @param LimitMax值的最大数量
  @param LimitFormat 值格式限制。如:递用户的时候,可为角色字段;送时间的时候,可为时间格式;多个条件可用";"分割,不传不限制 */



  // {
  //   title: '布局字段',
  //   list: [{
  //     type: 'group',
  //     label: '分组',
  //     icon: 'icon-group',
  //     display: true,
  //     arrow: false,
  //     collapse: true,
  //     children: {
  //       column: []
  //     }
  //   }, {
  //     type: 'dynamic',
  //     label: '子表单',
  //     icon: 'icon-table',
  //     span: 24,
  //     display: true,
  //     children: {
  //       align: 'center',
  //       headerAlign: 'center',
  //       index: false,
  //       addBtn: true,
  //       delBtn: true,
  //       column: []
  //     }
  //   }, {
  //     type: 'title',
  //     icon: 'icon-title',
  //     span: 24,
  //     display: true,
  //     styles: {
  //       fontSize: '18px',
  //       color: '#000'
  //     },
  //     label: '标题',
  //     labelWidth: '0px',
  //     value: '标题',
  //   }]
  // },
  {
    title: '输入字段',
    list: [
      {
        type: 'input',
        title: '单行文本',
        icon: 'icon-input',
        valueType: '1',
        limitMax: 0,
        limitMin: 0,
        position: 0,
        notice: '单行文本',
        editable: true,
        visible: true,
        require: false,
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: null,
            editable: false,
            position: 1,
            valueType: 0,
            formValue: { valueType: 1, content: '填写表单!' }
          }
        ]
      },
      {
        type: 'title',
        title: '文本展示',
        icon: 'icon-textarea',
        notice: "文本举例1",
        value: "文本举例1",
        valueType: 0,
        position: 0,
        editable: false,
        visible: true,
        require: false,
        limitMin: 0,
        limitMax: 0,
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: null,
            editable: false,
            position: 1,
            valueType: 0,
            formValue: { valueType: 0, content: "填写表单,帮助我们解决问题" }
          }
        ]
      },
      // {
      //   type: 'radio',
      //   title: '单选框组',
      //   icon: 'icon-radio',
      //   notice: "单选举例,必选",
      //   valueType: 2,
      //   position: 0,
      //   editable: true,
      //   disabled: false,
      //   visible: true,
      //   require: true,
      //   limitMin: 1,
      //   limitMax: 1,
      //   limitFormat: null,
      //   dicData: [
      //     { label: '选项1', value: '0' },
      //     { label: '选项2', value: '1' },
      //   ],
      //   formValues: [
      //     {
      //       id: -1,
      //       limitFormat: null,
      //       editable: true,
      //       position: 1,
      //       valueType: 2,
      //       formValue: {valueType:2,ckId:1,ckName:"选项1",ckValue:1,ckChecked:false}
      //     },
      //     {
      //       id: -1,
      //       limitFormat: null,
      //       editable: true,
      //       position: 2,
      //       valueType: 2,
      //       formValue: {valueType:2,ckId:2,ckName:"选项2",ckValue:2,ckChecked:false}
      //     }
      //   ]
      // }, 
      // {
      //   type: 'checkbox',
      //   title: '多选框组',
      //   notice: '多选举例,必选',
      //   icon: 'icon-checkbox',
      //   id: -1,
      //   valueType: 2,
      //   position: 0,
      //   editable: true,
      //   visible: true,
      //   require: true,
      //   limitMin: 1,
      //   limitMax: 3,
      //   limitFormat: null,
      //   dicData: [
      //     { label: '选项1', value: '0' },
      //     { label: '选项2', value: '1' },
      //     { label: '选项3', value: '2' },
      //     { label: '选项4', value: '3' },
      //   ],
      //   formValues: [
      //     {
      //       id: -1,
      //       limitFormat: null,
      //       editable: true,
      //       position: 1,
      //       valueType: 2,
      //       formValue: {valueType:2,ckId:1,ckName:'选项1',ckValue:1,ckChecked:false}
      //     },
      //     {
      //       id: -1,
      //       limitFormat: null,
      //       editable: true,
      //       position: 2,
      //       valueType: 2,
      //       formValue: {valueType:2,ckId:2,ckName:'选项2',ckValue:2,ckChecked:false}
      //     },
      //     {
      //       id: -1,
      //       limitFormat: null,
      //       editable: true,
      //       position: 3,
      //       valueType: 2,
      //       formValue: {valueType:2,ckId:3,ckName:'选项3',ckValue:3,ckChecked:false}
      //     },
      //     {
      //       id: -1,
      //       limitFormat: null,
      //       editable: true,
      //       position: 4,
      //       valueType: 2,
      //       formValue: {valueType:2,ckId:4,ckName:'选项4',ckValue:4,ckChecked:false}
      //     }
      //   ]
      // },


      {
        id: -1,
        type: '6',
        icon: 'icon-map',
        title: "位置举例",
        notice: "位置举例,必选",
        valueType: '6',
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: 1,
        limitMax: 1,
        limitFormat: null,
        formValues: []
      },
    ],
    //{
    //   type: 'password',
    //   label: '密码',
    //   icon: 'icon-password',
    //   span: 24,
    //   display: true
    // }, {
    //   type: 'textarea',
    //   label: '多行文本',
    //   icon: 'icon-textarea',
    //   span: 24,
    //   display: true
    // }, {
    //   type: 'number',
    //   label: '计数器',
    //   icon: 'icon-number',
    //   controls: true,
    //   span: 24,
    //   display: true,
    // }, {
    //   type: 'url',
    //   label: '超链接',
    //   icon: 'icon-url',
    //   span: 24,
    //   display: true
    // }, {
    //   type: 'array',
    //   label: '数组',
    //   icon: 'icon-array',
    //   span: 24,
    //   display: true,
    // }, {
    //   type: 'img',
    //   label: '图片',
    //   icon: 'icon-img',
    //   span: 24,
    //   display: true,
    // }, {
    //   type: 'map',
    //   label: '地图选择器',
    //   icon: 'icon-map',
    //   span: 24,
    //   display: true
    // }]
  },
  {
    title: '选择字段',
    list: [
      {
        type: 'select',
        title: '单选下拉',
        notice: "单选举例,非必选",
        icon: 'icon-select',
        id: -1,
        valueType: 2,
        position: 0,
        editable: true,
        visible: true,
        require: false,
        limitMin: 1,
        limitMax: 1,
        limitFormat: null,
        dicData: [
          { label: '选项1', value: '0' },
          { label: '选项2', value: '1' },
          { label: '选项3', value: '2' },
          { label: '选项4', value: '3' },
        ],
        formValues: [
          {
            id: -1,
            limitFormat: null,
            editable: true,
            position: 1,
            valueType: 2,
            formValue: { valueType: 2, ckId: 1, ckName: '选项1', ckValue: 1, ckChecked: false }
          },
          {
            id: -1,
            limitFormat: null,
            editable: true,
            position: 2,
            valueType: 2,
            formValue: { valueType: 2, ckId: 2, ckName: '选项2', ckValue: 2, ckChecked: false }
          },
          {
            id: -1,
            limitFormat: null,
            editable: true,
            position: 3,
            valueType: 2,
            formValue: { valueType: 2, ckId: 3, ckName: '选项3', ckValue: 3, ckChecked: false }
          },
          {
            id: -1,
            limitFormat: null,
            editable: true,
            position: 4,
            valueType: 2,
            formValue: { valueType: 2, ckId: 4, ckName: '选项4', ckValue: 4, ckChecked: false }
          }
        ]
      },
      {
        type: 'select',
        title: '多选下拉',
        notice: "多选举例,必选",
        icon: 'icon-select',
        id: -1,
        valueType: 2,
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: 1,
        limitMax: 3,
        limitFormat: null,
        dicData: [
          { label: '选项1', value: '0' },
          { label: '选项2', value: '1' },
          { label: '选项3', value: '2' },
          { label: '选项4', value: '3' },
        ],
        formValues: [
          {
            id: -1,
            limitFormat: null,
            editable: true,
            position: 1,
            valueType: 2,
            formValue: { valueType: 2, ckId: 1, ckName: '选项1', ckValue: 1, ckChecked: false }
          },
          {
            id: -1,
            limitFormat: null,
            editable: true,
            position: 2,
            valueType: 2,
            formValue: { valueType: 2, ckId: 2, ckName: '选项2', ckValue: 2, ckChecked: false }
          },
          {
            id: -1,
            limitFormat: null,
            editable: true,
            position: 3,
            valueType: 2,
            formValue: { valueType: 2, ckId: 3, ckName: '选项3', ckValue: 3, ckChecked: false }
          },
          {
            id: -1,
            limitFormat: null,
            editable: true,
            position: 4,
            valueType: 2,
            formValue: { valueType: 2, ckId: 4, ckName: '选项4', ckValue: 4, ckChecked: false }
          }
        ]
      }
    ]
  },
  // {
  //   title: '选择字段',
  //   list: [{
  //     type: 'radio',
  //     label: '单选框组',
  //     icon: 'icon-radio',
  //     dicData: [
  //       { label: '选项一', value: '0' },
  //       { label: '选项二', value: '1' },
  //       { label: '选项三', value: '2' },
  //     ],
  //     span: 24,
  //     display: true,
  //     dicOption: 'static',
  //     props: {
  //       label: 'label',
  //       value: 'value'
  //     }
  //   }, {
  //     type: 'checkbox',
  //     label: '多选框组',
  //     icon: 'icon-checkbox',
  //     dicData: [
  //       { label: '选项一', value: '0' },
  //       { label: '选项二', value: '1' },
  //       { label: '选项三', value: '2' },
  //     ],
  //     span: 24,
  //     display: true,
  //     dicOption: 'static',
  //     props: {
  //       label: 'label',
  //       value: 'value'
  //     }
  //   }, {
  //     type: 'select',
  //     label: '下拉选择器',
  //     icon: 'icon-select',
  //     dicData: [
  //       { label: '选项一', value: 0 },
  //       { label: '选项二', value: 1 },
  //       { label: '选项三', value: 2 },
  //     ],
  //     // 用于做级联配置
  //     cascaderItem: [],
  //     span: 24,
  //     display: true,
  //     dicOption: 'static',
  //     props: {
  //       label: 'label',
  //       value: 'value'
  //     }
  //   }, {
  //     type: 'cascader',
  //     label: '级联选择器',
  //     icon: 'icon-link',
  //     span: 24,
  //     display: true,
  //     dicData: [
  //       {
  //         label: '选项一',
  //         value: 0,
  //         children: [{
  //           label: '选项1-1',
  //           value: 11,
  //         }, {
  //           label: '选项1-2',
  //           value: 12,
  //         }]
  //       },
  //       { label: '选项二', value: 1 },
  //       { label: '选项三', value: 2 },
  //     ],
  //     cascaderIndex: 1,
  //     showAllLevels: true,
  //     dicOption: 'static',
  //     separator: "/",
  //     props: {
  //       label: 'label',
  //       value: 'value'
  //     }
  //   }, {
  //     type: 'tree',
  //     label: '树形选择器',
  //     icon: 'icon-tree',
  //     span: 24,
  //     display: true,
  //     dicOption: 'static',
  //     dicData: [
  //       {
  //         label: '选项一',
  //         value: 0,
  //         children: [{
  //           label: '选项1-1',
  //           value: 11,
  //         }, {
  //           label: '选项1-2',
  //           value: 12,
  //         }]
  //       },
  //       { label: '选项二', value: 1 },
  //       { label: '选项三', value: 2 },
  //     ],
  //     parent: true,
  //     props: {
  //       label: 'label',
  //       value: 'value'
  //     }
  //   }]
  // },
  {
    title: '上传字段',
    list: [{
      type: 'upload',
      title: '上传',
      icon: 'icon-upload',
      valueType: 5,
      position: 0,
      editable: true,
      visible: true,
      require: false,
      limitMin: 0,
      limitMax: 9,
      limitFormat: "IMAGE",
      formValues: [
        {
          id: -1,
          limitFormat: null,
          editable: true,
          position: 1,
          valueType: 5,
          formValue: {valueType:5,fileName:'测试图片',fileType:'FILE',fileUrl:'http://www.qsos.vip/upload/2018/11/ic_launcher20181225044818498.png'}
        }
      ]
    }],
  },
  {
    title: '日期时间字段',
    list: [
      {
        id: -1,
        type: 'year',
        title: '年',
        notice: "请选择年",
        icon: 'icon-year',
        format: 'yyyy',
        valueFormat: 'yyyy',
        valueType: 3,
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: 0,
        limitMax: 0,
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: 'yyyy',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          }
        ]
      }, {
        type: 'month',
        title: '年月',
        icon: 'icon-month',
        notice:'请选择年月',
        display: true,
        format: 'yyyy-MM',
        valueFormat: 'yyyy-MM',
        valueType: 3,
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: 0,
        limitMax: 0,
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: 'yyyy-MM',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          }
        ]
      },
      {
        type: 'date',
        title: '日期',
        notice:'请选择日期',
        icon: 'icon-date',
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd',
        valueType: 3,
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: 0,
        limitMax: 0,
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: 'yyyy-MM-dd',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          }
        ]
       },
       {
        type: 'datetime',
        title: '日期时间',
        notice:'请选择日期时间',
        icon: 'icon-datetime',
        format: 'yyyy-MM-dd HH:mm:ss',
        valueFormat: 'yyyy-MM-dd HH:mm:ss',
        valueType: 3,
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: 0,
        limitMax: 0,
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: 'yyyy-MM-dd HH',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          }
        ]
      },
      {
        type: 'time',
        title: '时间',
        notice:'请选择时间',
        icon: 'icon-time',
        format: 'HH:mm',
        valueFormat: 'HH:mm',
        valueType: 3,
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: 0,
        limitMax: 0,
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: 'HH:mm',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          }
        ]
      },
      {
        type: 'daterange',
        title: '日期范围',
        notice:'请选择日期范围',
        icon: 'icon-date-range',
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd',
        valueType: 3,
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: '1444632367028',
        limitMax: '1759992367028',
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: 'yyyy-MM-dd',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          },
          {
            id: -1,
            limitFormat: 'yyyy-MM-dd',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          }
        ]
      }, 
      {
        type: 'timerange',
        title: '时间范围',
        notice:'请选择时间范围',
        icon: 'icon-time-range',
        format: 'HH:mm:ss',
        valueFormat: 'HH:mm:ss',
        valueType: 3,
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: '1444632367028',
        limitMax: '1759992367028',
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: 'HH:mm:ss',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          },
          {
            id: -1,
            limitFormat: 'HH:mm:ss',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          }
        ]
      }, 
      {
        type: 'datetimerange',
        title: '日期时间范围',
        notice:'请选择日期时间范围',
        icon: 'icon-datetime-range',
        format: 'yyyy-MM-dd HH:mm:ss',
        valueFormat: 'yyyy-MM-dd HH:mm:ss',
        valueType: 3,
        position: 0,
        editable: true,
        visible: true,
        require: true,
        limitMin: '1444632367028',
        limitMax: '1759992367028',
        limitFormat: null,
        formValues: [
          {
            id: -1,
            limitFormat: 'yyyy-MM-dd HH:mm:ss',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          },
          {
            id: -1,
            limitFormat: 'yyyy-MM-dd HH:mm:ss',
            editable: true,
            position: 1,
            valueType: 3,
            formValue: { time: '1602312367028', timeLimitMin: '1444632367028', timeLimitMax: '1759992367028', valueType: 3 }
          }
        ]
      }
    ],
  },
  // {
  //   title: '插件字段（富文本需要单独引入）',
  //   list: [{
  //     title: '日历',
  //     component: 'elCalendar',//ele日期
  //     labelWidth: '40',
  //     icon: 'icon-map',
  //     span: 24,
  //     params: {

  //     }
  //   }, {
  //     type: 'ueditor',
  //     component: 'avue-ueditor',
  //     label: '富文本',
  //     icon: 'icon-richtext',
  //     span: 24,
  //     display: true,
  //     options: {
  //       action: '',
  //       oss: '',
  //       props: {},
  //       ali: {},
  //       qiniu: {}
  //     }
  //   },],
  // },
  // {
  //   title: '其他字段',
  //   list: [{
  //     type: 'icon',
  //     label: '图标',
  //     icon: 'icon-icon',
  //     span: 24,
  //     display: true,
  //     iconList: [{
  //       label: '基本图标',
  //       list: ['el-icon-info', 'el-icon-error', 'el-icon-error', 'el-icon-success', 'el-icon-warning', 'el-icon-question']
  //     }, {
  //       label: '方向图标',
  //       list: ['el-icon-info', 'el-icon-back', 'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-right', 'el-icon-arrow-up']
  //     }, {
  //       label: '符号图标',
  //       list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']
  //     }]
  //   }, {
  //     type: 'switch',
  //     label: '开关',
  //     icon: 'icon-switch',
  //     span: 24,
  //     display: true,
  //     value: 0,
  //     dicData: [{ label: '', value: '0' }, { label: '', value: '1' }]
  //   }, {
  //     type: 'rate',
  //     label: '评价',
  //     icon: 'icon-star',
  //     span: 24,
  //     display: true,
  //     max: 5,
  //     value: 0,
  //     texts: ['极差', '失望', '一般', '满意', '惊喜'],
  //     colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
  //   }, {
  //     type: 'slider',
  //     label: '滑块',
  //     icon: 'icon-slider',
  //     span: 24,
  //     display: true,
  //     min: 0,
  //     max: 10
  //   }, {
  //     type: 'color',
  //     label: '颜色选择器',
  //     icon: 'icon-color',
  //     span: 24,
  //     display: true
  //   }]
  // }
]
