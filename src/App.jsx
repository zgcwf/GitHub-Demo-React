import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'
export default class App extends Component {
  state = {
    users: []
  }
  SearchContent = (items) => {
    this.setState({
      users: items
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <Search SearchContent={this.SearchContent} />
          <List users={this.state.users} />
        </div>
      </div>
    )
  }
}


