import React, { Component } from 'react'

export default class lifeCycle extends Component {
    constructor(props) {
        super(props)

        // 常用于初始化状态
        console.log("1. 组件构造函数执行")
    }
    componentWillMount() {
        // 此时可以访问state和props
        console.log("2. 组件即将挂载")
    }
    
    render() {
        console.log("3(8). 组件正在挂载")
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount() {
        // 组件已经挂载，可以进行setState、api调用等等...
        console.log("4. 组件挂载完成")
    }
    componentWillReceiveProps () {
        // 父组件传递参数有变化，做相应响应
        console.log("5.将要接收属性传递")
    }
    shouldComponentUpdate(prevProps, prevState) {
        // 组件是否需要更新，需要返回布尔值结果，优化点
        console.log("6.组件是否需要更新？")
        return true
    }
    componentWillUpdate() {
        // 可以做更新统计
        console.log("7. 组件将要更新")
    }
    componentDidUpdate() {
        console.log("9. 组件已更新")
    }
    componentWillUnmount() {
        // 可以做清理工作
        console.log("10. 组件将要卸载")
    }
}
