import React from 'react';
import {Route, Link} from 'react-router-dom'

import Home from './components/Home'
import Course from './components/Course'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Link to="/">首页</Link> | 
      <Link to="/course">课程</Link> | 
      <Link to="/about">关于我们</Link>
      
      <Route path="/" component={ Home } />
      <Route path="/course" component={ Course } />
      <Route path="/about" component={ About } />
    </div>
  );
}

export default App;
