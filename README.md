> 这是一个 极简的 vue admin 管理后台 它只包含了 Element UI & axios & vue-awesome & permission control，这些搭建后台必要的东西。

# 编码规范
初衷：统一编码风格和规范，增强代码可读性。

## 重点
- 代码缩进统一【4】个空格
- 代码空格：等号前后要空格、css类名后要空格、小括号后要空格...
```
const a = '123'

test() {}

.test {}
```
- 文件夹、文件、路由命名统一使用小驼峰（helloWorld）
- 所有js代码不要分号
- js语法使用es6，常量cosnt，变量let，函数统一用箭头函数（不再考虑this的缓存）
```javascript
const arr = [1,2,3]
let name = 'li'
arr.forEach(item => {
    console.log(item)
})
```

## HTML
- 标签中所有引号使用双引号
```html
<div class="test-hello"></div>
```
- class、id等命名不要用拼音，用英文单词，不会的找百度翻译，多个单词用 - 分割
- 若标签属性过多,导致单行代码过长，则一个属性起一行。
```html
<el-button
  type="primary"
  size="small"
  @click.native="$router.replace('/groups')">
  切换组织
</el-button>
```

## JS
- 所有引号使用单引号
```javascript
let a = '123'
```
- script标签内部代码首行不缩进
```javascript
<script>
import VMenu from './menu'

export default {
  name: 'Menu',
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
}
</script>
```

## CSS
- style标签内部代码首行缩进两个空格
```css
<style lang="scss">
    .test {}
</style>
```
- 样式编写顺序从主到次
```css
.test {
    display: flex;
    width: 100px;
    height: 100px;
    padding: 10px;
    color: 10px;
    background-color: #eee;
}
```

## Vue组件模板
- 新建文件夹 test
- 在test文件夹下新建文件 test.vue
- 组件代码尽量不要超过五六百行，页面内容多则考虑进行组件拆分
```html
/**
 * @Desc:   测试组件
 * @Author: tfx
 */
<template>
  <div></div>
</template>

<script>
import { Tab } from 'vux'

export default {
  name: 'Home',
  components: {
    Tab
  }
}
</script>

<style lang="scss" scoped>
  .home {
      color: #bfa;
  }
</style>
```
- 组件属性书写顺序
```javascript
export default {
    name: 'Home',
    components: {
    Tab
    },
    props: {},
    data() {
    return {}
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {}
}
</script>
```

## 注释
- 文件头部注释
```
/**
 * @Desc:   xxx组件/页面
 * @Author: xxx
 */
```
- 方法注释
```javascript
/**
 * 获取xx列表
 * @param {Number} id xxid
 * @param {Object} param xx参数
 * @return {String} 结果
 */
 export function test(id, param) {
   return 'abc'
 }
```
- HTML注释
```html
<!-- S 头部 -->
<v-header>
  <div></div>
</v-header>
<!-- S 头部 -->
```
- CSS注释
```css
/* header */
.header {}
```
- JS单行代码注释
```javascript
// 调用xxx
test()
```

# 数据交互层
## 请求配置封装
- url只需要传递具体路径那一部分
- get请求传参用params属性（追加到url上）
- post请求传参用data属性（放至请求体）
```javascript
import request from '@/util/request'

/**
 * 测试get请求
 */
export function testGet(params) {
    return request({
        url: '/diseaseCommunity/list',
        method: 'get',
        params
    })
}

/**
 * 测试post请求
 */
export function testPost(data) {
    return request({
        url: '/diseaseCommunity/add',
        method: 'post',
        data
    })
}
```
## 调用
- token失效、请求错误已经全局统一处理
- 一般处理请求成功，即res.success即可
```javascript
/**
 * 测试get请求
 */
testGetRequest() {
    const param = {
        pageIndex: 1,
        pageSize: 5
    }
    testGet(param).then(res => {
        console.log('testGet', res)
        if (res.success) {
          ...
        }
    })
},
```


# 其他
- 有ui设计的项目，尽可能不依赖第三方库或ui框架（随时可能会替换）
- 养成常更新代码、提交代码的习惯，避免代码冲突等问题

... 未完待续
