import React, { useState, useEffect, useReducer, useContext } from 'react'
/**
 * 需求：实现一个选择喜爱水果的列表
 */

function FruitList({ fruits, setfruit }) {
    return (
        fruits.map(fruit => (
            <li key={fruit} onClick={() => setfruit(fruit)}>{fruit}</li>
        ))
    )
}

function FruitAdd(props) {
    const { dispatch } = useContext(Context)

    const [pname, setpname] = useState("")
    const onAddFruit = (e) => {
        if (e.key === 'Enter') {
            // props.onAddFruit(pname)
            // 快速导入写法
            dispatch({ type: "add", payload: pname })
            setpname("")
        }
    }
    return (
        <input type="text"
            value={pname}
            onChange={e => setpname(e.target.value)}
            onKeyDown={onAddFruit} />
    )
}

// 将状态移动到全局--- useReducer
function fruitReducer(state, action) {
    switch (action.type) {
        case "init":
            return action.payload
        case "add":
            return [...state, action.payload]
        default:
            return state
    }
}

// 创建上下文
const Context = React.createContext();

export default function HookTest() {
    // useState参数是状态值；返回一个数组，第1个参数是状态变量，第2个参数是状态变更函数
    const [fruit, setfruit] = useState("")
    // const [fruits, setfruits] = useState([])
    //useReducer 参数1 相关reducer，参数2 初始值
    const [fruits, dispatch] = useReducer(fruitReducer, [])
    // useEffect操作副作用
    useEffect(() => {
        console.log("getFructs")
        setTimeout(() => {
            // setfruits(["草莓", "火龙果"])
            dispatch({ type: "init", payload: ["草莓"] })
        }, 1000)
    }, [])
    // 带有依赖的useEffect
    useEffect(() => {
        document.title = fruit
    }, [fruit])
    return (
        <div>
            <Context.Provider value={{ fruits, dispatch }}>
                {fruit === "" ? "请选择你爱吃的水果" : `您选择的水果是${fruit}`}
                {/* 组件局部变量写法 */}
                {/* <FruitAdd onAddFruit={(pname) => setfruits([...fruits, pname])}></FruitAdd> */}
                {/* 全局变量写法 */}
                {/* <FruitAdd onAddFruit={(pname) => dispatch({type: "add", payload: pname})}></FruitAdd> */}
                {/* 快速导入上下文写法 - 注意组件裸奔，啥也没传 */}
                <FruitAdd />
                <FruitList fruits={fruits} setfruit={setfruit}></FruitList>
            </Context.Provider>
        </div>
    )
}
