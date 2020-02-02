# tpont-ui

## Project setup
```
yarn install
```
``` html
    <tp-dialog title="测试ui" :visible="visible" width="40%">
      <tp-form :model="model">
        <tp-form-item label="用户名">
          <tp-input v-model="model.username" placeholder="请输入用户名" clearable></tp-input>
        </tp-form-item>
        <tp-form-item label="密码">
          <tp-input v-model="model.password" type="password" show-password></tp-input>
        </tp-form-item>
        <tp-form-item label="性别">
          <tp-radio-group v-model="model.gender">
            <tp-radio label="man">男</tp-radio>
            <tp-radio label="female">女</tp-radio>
          </tp-radio-group>
        </tp-form-item>
        <tp-form-item label="是否毕业">
          <tp-switch v-model="model.isMarried"></tp-switch>
        </tp-form-item>
        <tp-form-item label="爱好">
          <tp-checkbox-group v-model="model.hobbyList">
            <tp-checkbox label="ball">足球</tp-checkbox>
            <tp-checkbox label="swiming">游泳</tp-checkbox>
            <tp-checkbox label="spring">旅游</tp-checkbox>
          </tp-checkbox-group>
        </tp-form-item>
      </tp-form>
      <template v-slot:footer>
        <tp-button>取消</tp-button>
        <tp-button type="primary">确定</tp-button>
      </template>
    </tp-dialog>
```
``` javascript
export default {
  name: 'app',
  data () {
    return {
      model: {
        username: '张三',
        password: '123',
        gender: 'female',
        isMarried: false,
        hobbyList: ['ball']
      },
      visible: true
    }
  }
}
```

