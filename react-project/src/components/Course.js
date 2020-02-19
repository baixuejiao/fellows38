import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Course extends Component {
  constructor(params) {
    super(params)

    this.state = {
      list: []
    }
  }
  componentDidMount() {
    // fetch方式发送请求时，如果提交的数据里包含base64格式的数据，base64的数据可能会发生字符串被截断的情况
    fetch('/data/courseList.json')
      .then(response => {
        return response.json()
      })
      .then(res => {
        if(res.errno * 1 === 0) {
          this.setState({
            list: res.data
          })
        } else {
          alert(res.errmsg)
        }
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        alert('服务器错误请稍后重试。。')
      })
  }
  render() {
    return (
      <div>
        <h1>课程列表</h1>
        <div>
          {
            this.state.list.map(obj => (
              <p key={obj.id}>
                <Link to={`/course/${obj.id}`}>{obj.title}</Link>
              </p>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Course;

