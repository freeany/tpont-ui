// 统一导出
// 导入颜色选择器组件
import Button from './tp-button/tp-button'
import Dialog from './tp-dialog/tp-dialog'
import Input from './tp-input/tp-input'
import Checkbox from './tp-checkbox/tp-checkbox'
import Radio from './tp-radio/tp-radio'
import RadioGroup from './tp-radio-group/tp-radio-group'
import Switch from './tp-switch/tp-switch'
import CheckboxGroup from './tp-checkbox-group/tp-checkbox-group'
import Form from './tp-form/tp-form'
import FormItem from './tp-form-item/tp-form-item'
import './fonts/font.scss'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
// 如果不是模块化环境开发的话， 用script直接引入的话，就自动注册组件了。
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
  install
}
