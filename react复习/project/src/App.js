import React from 'react';
import {Route, Link} from 'react-router-dom'

import Home from './views/Home'
import Course from './views/Course'
import About from './views/About'

import './App.css';

function App() {
  /*
    路由传参：
      1. path="/course/:id" id表示传递的参数  http://localhost:3000/course/123
          to="/course/123"
        获取参数: this.props.match.params 

      2. to = {
        pathname: '/about' 路径信息
        search: '', location.search 拼接的参数在url中显示 刷新不会丢失
        hash: '', location.hash 拼接的参数在url中显示 刷新不会丢失
        state: {}, 拼接的参数在url中不显示 BrowserRouter刷新页面参数不会丢失 HashRouter刷新页面参数丢失
        query: {}, 拼接的参数在url中不显示 刷新页面时 参数丢失
      }
        获取参数: this.props.location

      3.编程式导航
        this.props.history 中提供的方法可以实现路由跳转
          push()
          replace()
          传参：
            {
              pathname: '/about' 路径信息
              search: '', location.search 拼接的参数在url中显示 刷新不会丢失
              hash: '', location.hash 拼接的参数在url中显示 刷新不会丢失
              state: {}, 拼接的参数在url中不显示 BrowserRouter刷新页面参数不会丢失 HashRouter刷新页面参数丢失
              query: {}, 拼接的参数在url中不显示 刷新页面时 参数丢失
            }

  */
  return (
    <div className="App">
      <div>
        <Link to='/'>首页</Link> | 
        <Link to="/course/123">课程详情</Link> | 
        <Link to={{
          pathname: '/about',
          search: 'a=1&b=2',
          hash: 'aaaa',
          state: {
            id: 123
          },
          query: {
            a: 1,
            b: 2
          }
        }}>关于我们</Link>
      </div>

      <div>
        <Route path="/" exact component={Home} />
        <Route path="/course/:id" component={Course} />
        <Route path="/about" component={About} />
      </div>
    </div>
  );
}

export default App;
