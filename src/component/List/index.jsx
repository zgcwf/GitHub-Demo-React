import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        const { users } = this.props
        return (
            <div>
                <div className="row">
                    {
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
