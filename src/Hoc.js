import React from 'react'
// 高阶组件：
function Basic (props) {
    return (
        <div>
            {props.state} - {props.name}
        </div>
    )
}
const hhy = (Component) => {
    const NewComponent = (props) => {
        return <Component {...props} name="虫子"/>
    }
    return NewComponent;
}


// 高阶组件的链式调用应用：日志记录

function withLog(Component) {
    console.log(Component.name+"加强了")
    return props => {
        return <Component {...props} />;
    }
}

export default withLog(hhy(withLog(Basic))) // 这种链式调用写起来不方便，可以优化，使用
