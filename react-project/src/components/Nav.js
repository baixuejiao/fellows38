import React, { Component } from 'react';
import {Link,  Route} from 'react-router-dom'

class Nav extends Component {
  constructor(params) {
    super(params)

    this.data =  [
      {
        "id": 1,
        "path": "banner",
        "title": "轮播图信息"
      },
      {
        "id": 2,
        "path": "user",
        "title": "用户管理",
        "children": [
          {
            "id": 3,
            "path": "create",
            "title": "创建用户"
          },
          {
            "id": 4,
            "path": "list",
            "title": "用户列表"
          }
        ]
      },
      {
        "id": 5,
        "path": "classify",
        "title": "课程分类",
        "children": [
          {
            "id": 6,
            "path": "fe",
            "title": "前端",
            "children": [
              {
                "id": 7,
                "path": "junior",
                "title": "初级",
                "children": [
                  {
                    "id": 8,
                    "path": "html",
                    "title": "html"
                  }
                ]
              },
              {
                "id": 9,
                "path": "middle",
                "title": "中级",
                "children": [
                  {
                    "id": 10,
                    "path": "react",
                    "title": "react"
                  }
                ]
              }
            ]
          },
          {
            "id": 11,
            "path": "rd",
            "title": "后端",
            "children": [
              {
                "id": 12,
                "path": "java",
                "title": "java"
              },
              {
                "id": 13,
                "path": "python",
                "title": "python"
              }
            ]
          }
        ]
      }
    ]
  }
  render() {
    // console.log('props:', this.props)
    let {path} = this.props.match // 当前路由的path
    // let path = '/nav'
    let navList = this.props.list || this.data
    return (
      <div>
        <h1>导航菜单</h1>

        <div>
        {
          navList.map(obj => (
            
            obj.children ? (
              <Link key={obj.id} to={`${path}/${obj.path}`} style={{marginRight: '10px'}}>{ obj.title }</Link>
            ) : (
              <span style={{marginRight: '10px'}} key={obj.id}>{obj.title}</span>
            )

          ))
        }
        </div>

        <div>
          {
            navList.map(obj => (
              // <Route key={obj.id} path={`${path}/${obj.path}`} component={Nav} />
              // Route的render属性用与渲染组件 render的值是一个function 这里的render方法用了函数的简写方式
              <Route key={obj.id} path={`${path}/${obj.path}`} render={(props) => (
                <Nav {...props}  list={obj.children} />
              )} />

            ))
          }
        </div>
      </div>
    );
  }
}

export default Nav;

// let fun = () => {
//   return xxx
// }

// let fun = () => (xxx)