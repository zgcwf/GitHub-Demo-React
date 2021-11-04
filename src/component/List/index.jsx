import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        const { users, isFirst, loading, err } = this.props
        return (
            <div>
                <div className="row">
                    {
                        // 三元运算符连用
                        isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                            loading ? <h2>Loading......</h2> :
                                err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                    users.map(user => {
                                        return (
                                            <div key={user.id} className="card">
                                                <a href={user.html_url} rel="noreferrer" target="_blank">
                                                    <img src={user.avatar_url} style={{ width: '100px' }} alt='head_portrait' />
                                                </a>
                                                <p className="card-text">{user.login}</p>
                                            </div>
                                        )
                                    })
                    }


                </div>
            </div>
        )
    }
}
