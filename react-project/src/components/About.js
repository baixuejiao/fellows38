import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class About extends Component {
  back() {
    this.props.history.push('/')
  }
  render() {
    let {location} = this.props
    console.log(location)
    console.log(location.state)
    console.log(this.props.history)

    let params = new URLSearchParams(location.search)
    console.log('id:',params.get('id'))
    console.log('age:',params.get('age'))

    return (
      <div>
        <h1>关于我们</h1>
        {/* redirect 重定向 */}
        {/* <Redirect to="/course" /> */}
        <button onClick={this.back.bind(this)}>goback</button>
      </div>
    );
  }
}

export default About;