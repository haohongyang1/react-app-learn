import React, { Component } from 'react'
// 函数型组件---- 注意【函数型组件】和【类组件】的区别和用法

function Welcome1 (props) { // 接受父组件传参，这里的props以函数参数方式传递进来，松散的，
return <div>Welcome1, {props.name}-{props.age}</div>
}

class Welcome2 extends Component{
    render() {
    return <div>Welcome2,{this.props.name}-{this.props.age}</div>
    }
}

export default function CompType() {
    return (
        <div>
            {/** 属性是只读的，不能改 */}
           <Welcome1 name="tom" age="22"></Welcome1> 
           <Welcome2 name="jerry" age="20"></Welcome2>
        </div>
    )
}
