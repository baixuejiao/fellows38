import React, { Component } from 'react';

class Details extends Component {
  constructor(params) {
    super(params)

    this.state = {
      data: {}
    }
  }

  // 为了解决死循环 需要在本生命周期中判断是否需要更新组件
  // 判断本次的id和下一次的id 如果不想等 就更新组件，否则就不要更新组件
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return nextProps.match.params.id != this.props.match.params.id || nextState.data.id != this.state.data.id
  }

  componentDidMount() {
    // 本声明周期只执行一次
    fetch(`/data/course${this.props.match.params.id}.json`)
      .then(response => {
        // console.log(response)
        return response.json()
      })
      .then(res => {
        console.log(res)
        if(res.errno * 1 === 0) {
          this.setState({
            data: res.data
          })
        } else {
          alert(res.errmsg)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }


  componentDidUpdate() {
    // 由于切换了链接导致props发生改变就会触发组件的重新渲染 就会进入到本生命周期里
    console.log('match:',this.props.match)
    fetch(`/data/course${this.props.match.params.id}.json`)
      .then(response => {
        // console.log(response)
        return response.json()
      })
      .then(res => {
        console.log(res)
        if(res.errno * 1 === 0) {
          // 调用了setState方法 又会触发组件的重新渲染 会再一次进入本生命周期 会造成死循环
          this.setState({
            data: res.data
          })
        } else {
          alert(res.errmsg)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log('render')
    // props下的match属性可以获取到路由跳转时传递的参数
    let {params} = this.props.match
    let {data} = this.state 
    return (
      <div>
        <h2>课程详情</h2>
        <div>
          <p>课程ID： {data.id}</p>
          <p>课程名称： {data.title}</p>
          <p>授课教师： {data.teacher}</p>
          <p>课程简介： {data.intro}</p>
        </div>
      </div>
    );
  }
}

export default Details;