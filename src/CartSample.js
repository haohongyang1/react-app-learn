import React, { Component } from 'react'

// 函数型组件：购物车组件
function Cart (props) {
    return (
        <table>
            <tbody>
                {props.data.map(d => (
                    <tr key={d.name} onClick={() => props.onSelect(d.name)}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.price}</td>
                        <td>{d.count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}



export default class CartSample extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            goods: [
                {id: 1, name: "图书", price: 34},
                {id: 2, name: "安徒生童话", price: 36},
                {id: 3, name: "格林童话", price: 47}
            ],
            carts: [],
            title: "商品列表",
            name: ""
        })
    }
    inputChange = (e) => {
        this.setState({name: e.target.value})
    }
    addGoods = () => {
        this.setState({
            goods: [...this.state.goods, {id: 4,name:this.state.name,price:555}],
            name: ""
        })
        // this.setState((prev) => {
        //     prev.goods.push({id: 4,name: this.state.name})
        //     console.log(prev.goods)
        //     // return {goods: this.state.goods.push({id: 4,name: this.state.name})}
        //     return prev.goods
        // })
    }
    addToCart = (good) => {
        // 正确版本
        const item = this.state.carts.find(c => c.id === good.id)
        if (item) {
            item.count+=1
            this.setState({carts: [...this.state.carts]})
        } else {
            this.setState({carts: [...this.state.carts, {...good, count: 1}]})
        }
// 自己练习版本
        // this.setState((prev) => {
        //     let exit = prev.carts.some(item => {
        //         if (item.id === good.id) {
        //             item.count++
        //         }
        //         return item.id === good.id
        //     })
        //     if (!exit) {
        //         prev.carts.push({...good, count: 1})
        //     }
        //     return prev.carts
        // })
    }
    // 子父 传参
    onSelect = (name) => {
        console.log("现在购物车里的商品是："+name)
    }
    render() {
        const goods = this.state.goods.map(good => (
            <div>
                <li key={good.id}>{good.name}</li>
                <button onClick={() => this.addToCart(good)}>加购</button>
            </div>
        ))
        return (
            <div>
                {/* 条件语句 */}
                {this.state.title && <h1>{this.state.title}</h1>}
                {/* 循环语句 */}
                <ul>{goods}</ul>
                {/* <ul>
                    {this.state.goods.map(good => <li key={good.id}>{good.name}</li>)}
                </ul> */}
                {/* 事件处理 */}
                <input
                value={this.state.name}
                onChange={e => this.inputChange(e)} />
                <button onClick={this.addGoods}>添加</button>
                <h1>购物车</h1>
                <Cart data={this.state.carts} onSelect={this.onSelect}></Cart>
            </div>
        )
    }
}
