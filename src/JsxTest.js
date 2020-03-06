import React, { Component } from 'react'
import logo from './logo.svg'
// import style from './JsxTest.module.css'
function formatName() {
    return "formatName"
}
export default class JsxTest extends Component {
    render() {
        let name = 1
        let greet = <p>hello</p>
        return (
            <div>
                {/* 表达式：合法js表达式即可 */}
                <h1>{name}</h1>
                {/**函数也是表达式 */}
                <p>{formatName()}</p>
                {/**jsx也是表达式 */}
                {greet}
                {/** 属性 ： 属性是只读的不能改 */}
                <img src={logo} style={{width: "100px"}} className={style.img}  alt=""/>
                <label htmlFor="ff">fff</label>
            </div>
        )
    }
}
