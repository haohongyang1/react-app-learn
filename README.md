# React学习笔记

## 简介：
2014年左右，那个时候还没有vue，以很快的速度占据，特点如下：
1. jsx语法、虚拟vdom、高效diff算法等等；
2. 独特的单向数据流，双向数据流会使项目变得复杂，变得不可控，是一个好的模型，包括后期根据他推出的redux，vue借鉴了react和anjular的优点
3. Vue **VS** React
同：数据驱动视图
异：vue：双向绑定数据劫持
---- TODO 待更新；

## 核心API学习
安装：npm i create-react-app 
创建：create-react-app [project-name]
或者（安装+创建）：npx create-react-app [project-name]
创建后：npm run eject可以将项目打散，看到所有依赖信息，包括webpack.config.js中一些封装的配置信息；

## Jsx语法学习：
创建组件：[filename].js
引入模板：rcc-[enter]键 （需要使用vscode编辑器，安装[ES7 React/Redux/GraphQL/React-Native snippets]插件）


**小记**
- 在jsx语法写代码的时候一定记住，虽然写的是具有html结构的代码，但是实际上写的永远是js代码；

## 组件：
函数型组件 && 类组件：
如果组件仅供内容展示，没有状态变化，就使用类组件

状态修改：通过setState更改状态：/root/StateTest.js

**小记**
setState注意事项：
- 状态是封闭的，只有自己组件内部能更改；
- 批量执行，多key一次执行，相同key合并；
- 可能是异步的，如果要获取最新状态值，有三种方式：
    - 传递函数给setState
    - setTimeout
    - 原生事件中

事件处理：注意单向事件流和this指向；


--- TODO----
问题：setState的参数给对象和函数有什么区别？


