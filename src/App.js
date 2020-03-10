import React, { Component } from 'react';
import './App.css';
import JsxTest from './JsxTest'
import CompType from './CompType'
import StateTest from './StateTest'
import CartSample from './CartSample'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Hoc from './Hoc'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/**自定义组件开头大写 */}
        {/* <JsxTest /> */}
        {/** 组件类型：函数型组件 */}
        {/* <CompType></CompType> */}
        {/* <StateTest></StateTest> */}
        {/* <CartSample></CartSample> */}
        {/* 高阶组件 */}
        <Hoc></Hoc>
      </div>
    )
  }
}

export default App;
