import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import Course from './components/Course'
import About from './components/About'
import Details from './components/Details'
import Nav from './components/Nav'
import Count from './components/Count'
import Num from './components/Num'

import './App.css'

function App() {
  return (
    <div className="App">
      {/* link 路由跳转 to 配置的跳转地址 */}
      <Link to="/">首页</Link> | 
      <Link to="/course">课程列表</Link> | 
      {/* <Link to="/about">关于我们</Link> |  */}
      <Link to="/nav">导航菜单</Link> |
      <Link to={{
        // 路径信息
        pathname: '/about',
        //location中的search 会在链接上拼接参数 获取时拿到的是字符串 需要单独处理
        search: 'id=1&age=10',
        hash: 'aaa',
        // 传的是一个object，browserRouter正常使用，hashRouter刷新页面参数丢失
        state: {
          key: '111',
          name: 'xm'
        },
        // 正常页面跳转可以拿到参数，但是刷新页面时参数会丢失
        query: {
          key: '111',
          name: 'aaa'
        }
      }}>关于我们</Link> | 
      <Link to="/count">redux</Link> | 
      <Link to="/num">react-redux</Link> 
      
      {/* 路由默认是模糊匹配，如果需要精确匹配 可以添加exact属性 */}
      {/* 
        path 对应组件的路径信息 
        compone 对应的组件 
      */}
      <Route path="/" exact  component={ Home } />
      <Route path="/course" component={ Course } />
      <Route path="/course/:id" component={ Details } />
      <Route path="/about" component={ About } />
      <Route path="/nav" component={ Nav } />
      <Route path="/count" component={ Count } />
      <Route path="/num" component={ Num } />

      {/* 仅渲染第一个匹配的路由 需要注意把首页(/)放在最后 */}
      {/* <Switch>
        <Route path="/course" component={ Course } />
        <Route path="/about" component={ About } />
        <Route path="/" component={ Home } />
      </Switch> */}
    </div>
  );
}

export default App;
