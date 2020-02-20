import { createStore } from 'redux'

// 存储的状态
let state = {
  number: 1
}

/*
  action是一个对象
  {
    type
    data
  }
*/

const ADD_NUM = 'ADD_NUM'
const REDUCE_NUM = 'REDUCE_NUM'

// action creator 返回的是一个action
function AddActionCreator(data) {
  return {
    type: ADD_NUM,
    data
  }
}

function ReduceActionCreator(data) {
  return {
    type: REDUCE_NUM,
    data
  }
}

// reducer 方法具体来操作修改state
// 接收两个参数 preState 旧的state
// action
// 方法返回一个新的state
function reducer(preState = state, action) {
  console.log(action)
  switch(action.type) {
    case ADD_NUM:
      return Object.assign({}, preState, {
        number: preState.number + action.data * 1
      })
    case REDUCE_NUM: 
      return Object.assign({}, preState, {
        number: preState.number - 1
      })
    default:
      return preState
  }
}


const store = createStore(reducer)

export {
  store,
  AddActionCreator,
  ReduceActionCreator
}