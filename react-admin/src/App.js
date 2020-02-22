import React from 'react';
import { Row, Col} from 'antd'
import Nav from './components/Nav/Nav'
import Header from './components/Header'
import IRoute from './router/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={4} className="app-left" >
          <Nav />
        </Col>
        <Col span={20} className="app-right">
          <Header/>
          <div>
            <IRoute/>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
