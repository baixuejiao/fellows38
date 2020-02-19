import React, { Component } from 'react';

class Details extends Component {
  render() {
    // props下的match属性可以获取到路由跳转时传递的参数
    let {params} = this.props.match
    return (
      <div>
        <h2>课程详情</h2>
        <p>{params.id}</p>
      </div>
    );
  }
}

export default Details;