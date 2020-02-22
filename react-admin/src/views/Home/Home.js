import React, { Component } from 'react';
import Meng from '../../asstes/images/meng.png'
import './home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <p> hello, xxx </p>
        <h1>欢迎进入青盟课堂后台管理系统</h1>
        <div className="home-wrapper">
          <img alt="" src={Meng} />
          <img alt="" src="/img/qing.png" />
        </div>
      </div>
    );
  }
}

export default Home;