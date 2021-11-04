import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'
export default class App extends Component {
  state = { //初始化状态
    users: [], //users初始值为数组
    isFirst: true, //是否为第一次打开页面
    loading: false,//标识是否处于加载中
    err: '',//存储请求相关的错误信息
  }
  //更新App的state，直接传入state对象更改
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  // 或者直接更改state
  // updateAppState = (users, isFirst, loading, err) => {
  //   this.setState({
  //     users: users,
  //     isFirst: isFirst,
  //     loading: loading,
  //     err: err
  //   })
  // }

  render() {
    return (
      <div>
        <div className="container">
          <Search updateAppState={this.updateAppState} />
          <List {...this.state} />
        </div>
      </div>
    )
  }
}


