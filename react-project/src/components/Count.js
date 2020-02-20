import React, { Component } from 'react';
import {store, AddActionCreator, ReduceActionCreator} from '../store'

class Count extends Component {
  constructor(params) {
    super(params)

    this.state = {
      // getState 获取state中的属性
      num: store.getState().number
    }

    // redux中state如果发生改变  自动触发subscribe方法
    store.subscribe(() => {
      this.setState({
        num: store.getState().number
      })
    })

  }

  add() {
    // dispatch 派发action
    store.dispatch(AddActionCreator(this.refs.myInput.value))
  }

  reduce() {
    store.dispatch(ReduceActionCreator())
  }

  render() {
    return (
      <div>
        <h1>计数器</h1>
        <p>num: {this.state.num}</p>
        <input type="text" ref="myInput" />
        <button onClick={this.add.bind(this)}>加法</button>
        <button onClick={this.reduce.bind(this)}>减法法</button>
      </div>
    );
  }
}

export default Count;