# React 学习笔记

## 简介：

2014 年左右，那个时候还没有 vue，以很快的速度占据，特点如下：

1. jsx 语法、虚拟 vdom、高效 diff 算法等等；
2. 独特的单向数据流，双向数据流会使项目变得复杂，变得不可控，是一个好的模型，包括后期根据他推出的 redux，vue 借鉴了 react 和 anjular 的优点
3. Vue **VS** React
   同：数据驱动视图
   异：vue：双向绑定数据劫持
   ---- TODO 待更新；

## 实战

### 一、项目构建

安装：npm i create-react-app
创建：create-react-app [project-name]
或者（安装+创建）：npx create-react-app [project-name]
创建后：npm run eject 可以将项目打散，看到所有依赖信息，包括 webpack.config.js 中一些封装的配置信息；

### 二、Jsx 语法

创建组件：[filename].js
引入模板：rcc-[enter]键 （需要使用 vscode 编辑器，安装[ES7 React/Redux/GraphQL/React-Native snippets]插件）

**小记**

- 在 jsx 语法写代码的时候一定记住，虽然写的是具有 html 结构的代码，但是实际上写的永远是 js 代码；

### 三、组件：

- 分类：函数型组件 && 类组件：
- 使用：如果组件仅供内容展示，没有状态变化，就使用函数型组件（以 function 形式定义，初始化过程中保留后不再变化），类组件适合做数据获取（在初始化以及 update 过程中需要不断实例化）；

- 状态修改：通过 setState 更改状态：/root/StateTest.js

- **setState 注意事项：**

  - 状态是封闭的，只有自己组件内部能更改；
  - 批量执行，多 key 一次执行，相同 key 合并；
  - 可能是异步的，如果要获取最新状态值，有三种方式：
    - 传递函数给 setState
    - setTimeout
    - 原生事件中

- 事件处理：父->子: props; 子->父：事件定义和调用；注意单向事件流和 this 指向；

--- TODO----
问题：setState 的参数给对象和函数有什么区别？

### 四、ant-design

引入 ant-design 组件，并且配置按需加载，/root/config-overrides.js

#### 1.组件化：

开发过程中注意组件化设计的实现，容器组件 VS 展示组件

- 原则：在 React 中尽可能细粒度的切割组件，容器组件负责数据获取，展示组件(尽可能使用函数型组件声明)负责根据 props 展示信息
- 优势：
  - 如何工作和如何展示分离
  - 重用性高
  - 更高可用性
  - 易于测试

#### 2.PureComponent

作为 Component 的优化，实践部分进入/root/src/CommentList.js
注意：浅拷贝的比较；
[Immutable](https://zhuanlan.zhihu.com/p/101534155)

#### 3.高阶组件 HOC

- 目的：提高组件复用率，抽离相同逻辑；需要扩充一个组件的能力，
- 概念：高阶组件也是一个函数，但他返回另一个组件，产生新的组件可以对属性进行包装，也可以重写部分生命周期；

### 五、Redux

使用方式：
createStore 创建 store、reducer 初始化 修改状态、getState 获取状态值、dispatch 提交更新、subscribe 变更订阅

附录：PureComponent 源码：

```JavaScript
export default function PureComponnet(props, context) {
    Component.call(this, props, context) // 继承Component
}
PureComponent.prototype = Object.create(Component.prototype)
PureComponent.prototype.constructor = PureComponent
PureComponent.prototype.isPureReactComponent = true
PureComponent.prototype.shouldComponentUpdate = shallowCompare
function shallowCompare(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
}

function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true
    }

    if (typeof objA === 'object' || objA === null || typeof objB === 'object' || objB === null) {
        return false
    }

    var keysA = Object.keys(objA)
    var keysB = Object.keys(objB)

    if (keysA.length !== keysB.length) {
        return false
    }
// 只循环一层
    for (var i = 0;i<keysA.length;i++>) {
        if (!objB.hasOwnProperty(keysA[i] || objA[keysA[i] !== objB[keysA[i]]])) {
            return false
        }
    }
    return true
}
```
