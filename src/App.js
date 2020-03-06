import React, { Component } from 'react';
import './App.css';
import JsxTest from './JsxTest'
import CompType from './CompType'
import StateTest from './StateTest'
import CartSample from './CartSample'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/**自定义组件开头大写 */}
        <JsxTest />
        {/** 组件类型：函数型组件 */}
        {/* <CompType></CompType> */}
        <StateTest></StateTest>
        <CartSample></CartSample>
      </div>
    )
  }
}

export default App;
