import React, { Component } from 'react'
// 闹钟
class Clock extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {date: new Date().toLocaleTimeString()}
    // }
    state = {date: new Date().toLocaleTimeString(), counter: 1}
    componentDidMount() {
        this.timer = setInterval(()=> {
            this.setState({date: new Date().toLocaleTimeString()})
        },1000)

        this.setState({counter: this.state.counter+1})
        this.setState({counter: this.state.counter+1})
        this.setState({counter: this.state.counter+1})
        // 由于setState是批量执行(同key合并，多key一次执行)，可能为异步这样的特点，所以console结果为1
        console.log(this.state.counter) // 1
        // 拿到counter=2的值：

        // 法一：setState传递函数：
        this.setState((prev) => {
            console.log(prev.counter) // 2
            return prev.counter
        })
        // 法二：setTimeout（event loop原理）
        setTimeout(() => {
            console.log(this.state.counter) // 2
        }, 0)
        // 法三：原生事件（跳出react事件机制）
        document.body.addEventListener('click',()=> {
            console.log(this.state.counter)
        } )
        // 法四：第二个参数回调
        this.setState({counter: this.state.counter+1}, () => {
            console.log(this.state.counter)
        })
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render () {
        return <div>{this.state.date}</div>
    }
}
export default class StateTest extends Component {
    render() {
        return (
            <div>
                <Clock></Clock>
            </div>
        )
    }
}
