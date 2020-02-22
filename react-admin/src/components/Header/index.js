import React, { Component } from 'react';

import { Divider } from 'antd';
import './index.css'

class index extends Component {
  render() {
    return (
      <div className="common-header">
        <div className="common-header-wrapper">
          <img className="user-img" alt="img" src="http://login.qingmengtech.com/images/3.png?imageView2/1/w/80/h/80" />
        </div>
        <Divider type="vertical" style={{width: '100%', height: '1px'}} />
      </div>
    );
  }
}

export default index;