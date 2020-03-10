import React, { Component, PureComponent } from 'react'

// 1. --------------------使用普通展示组件 -------------
// function Comment (props) {
//     // 虽然父组件轮询查询评论内容，但是评论内容并未更新，我们希望优化为：评论内容未更新时，不刷新Comment组件；所以引入PureComponent
//     console.log('评论更新')
//     return (
//         <div>
//             {props.data.map(item => (
//                 <div key={item.body}>
//                     <span>{item.author}说：</span>
//                     <span>{item.body}；</span>
//                 </div>
//             ))}
//         </div>
//     )
// }


// 2. ----------------------使用PureComponent优化---------------
// class Comment extends PureComponent {
//     render() {
//         // 但是注意的是，使用PureComponent只能用于非引用类型的更新
//         console.log('评论更新')
//         const props = this.props
//         return (
//         <div>
//             {props.data.map(item => (
//                 <div key={item.body}>
//                     <span>{item.author}说：</span>
//                     <span>{item.body}；</span>
//                 </div>
//             ))}
//         </div>
//         )
//     }
// }

// 3. ----------------------钩子函数 更新前 进行判断 ---------------
// class Comment extends Component {
//     shouldComponentUpdate(props) {
//         if (props.data.body === this.props.data.body && props.data.author === this.props.data.author) {
//             return false
//         }
//     }
//     render() {
//         console.log('评论更新')
//         const {data} = this.props
//         return (
//         <div>
//             <span>{data.author}说：</span>
//             <span>{data.body}；</span>
//         </div>
//         )
//     }
// }


// 4. -------------------------析构传值优化------------------
class Comment extends PureComponent {
    render() {
        // 但是注意的是，使用PureComponent只能用于非引用类型的更新
        console.log('评论更新')
        const {author, body} = this.props
        return (
        <div>
            <span>{author}说：</span>
            <span>{body}；</span>
        </div>
        )
    }
}

// 6. 使用React.memo，让函数型组件也可以使用pureComponent（v16.6后可以使用）


export default class CommonList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        // 这里我们假设评论区数据要每1s向服务器轮询查找评论信息；
        setInterval(() => {
            // 5. ---------------------这里setState可以使用Immutable(地址不变，值改变的情况下会用一种比较高效的形式进行比较)配合pureComponent来优化-----------
            this.setState({
                comments: [
                    {body: 'good', author: "zs"},
                    {body: 'no', author: "ii"}
                ]
            })
        },1000)
    }
    render() {
        return (
            <div>
                {/* 引入展示组件 */}
                {/* <Comment data={this.state.comments}></Comment> */}
                {/* 优化：析构给子组件 */}
                {this.state.comments.map((item, index) => (
                    <Comment key={index} {...item}></Comment>
                ))}
            </div>
        )
    }
}

