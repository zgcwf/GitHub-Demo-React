import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    SearchUsers = () => {
        const { SearchInput: { value: keyWords } } = this
        axios.get(`https://api.github.com/search/users?q=${keyWords}`).then(
            resolve => {
                // console.log(resolve);
                this.props.SearchContent(resolve.data.items)
            },
            reject => { console.log(reject); }
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
