import React, { Component } from 'react';
import { Table, Divider } from 'antd';
import axios from 'axios'

// 表头信息
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: '20%',
  },
  {
    title: '名称',
    dataIndex: 'title',
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (value) => (
      value ? <span>已上线</span> : <span>已下线</span>
    )
  },
  {
    title: '操作',
    dataIndex: 'action',
    render: () => (
      <div>
        <a href="#">编辑</a>
        <Divider type="vertical" />
        <a href="#">上线</a>
        <Divider type="vertical" />
        <a href="#">下线</a>
        <Divider type="vertical" />
        <a href="#">删除</a>
      </div>
    )
  },
];

class Banner extends Component {
  constructor(params){
    super(params)

    this.state = {
      bannerList: []
    }
  }
  componentDidMount() {
    axios.get('https://www.qmtech.com/getBannerList')
      .then(res => {
        this.setState({
          bannerList: res.data.list
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.bannerList}
          // pagination={this.state.pagination}
          // loading={this.state.loading}
          // onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default Banner;