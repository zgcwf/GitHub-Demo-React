import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    SearchUsers = () => {
        //获取用户的输入(连续解构赋值+重命名，最后结构的值可以用：重命名)
        const { SearchInput: { value: keyWords } } = this
        //发送请求前通知App更新状态
        this.props.updateAppState({ isFirst: false, isLoading: true })
        // this.props.updateAppState([], false, true, '')

        axios.get(`https://api.github.com/search/users?q=${keyWords}`).then(
            resolve => {
                //请求成功后通知App更新状态
                this.props.updateAppState({ isLoading: false, users: resolve.data.items })
                // this.props.updateAppState(resolve.data.items, false, false, '')
            },
            reject => {
                //请求失败后通知App更新状态
                this.props.updateAppState({ isLoading: false, err: reject.message })
                // this.props.updateAppState([], false, false, reject.message)
            }

        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">搜索Github用户</h3>
                    <div>
                        <input ref={(c) => this.SearchInput = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                        <button onClick={this.SearchUsers}>搜索</button>
                    </div>
                </section>
            </div>
        )
    }
}
