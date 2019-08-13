import React, { Component } from 'react';
import Button from 'antd/es/button';
import { Icon } from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import './App.css';

const { Text } = Typography;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Контент сайта</h1>
        <Button type="primary">Button</Button>
        <br />
        <Button type="primary" shape="circle" icon="search" />
        <br />
        <Icon type="mobile" />
        { /* Комментарий*/}
        <h1><Text type="warning">Просто текст</Text></h1>
        <Text mark>Ant Design</Text>

        <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px"}}>
        <h1>Привет</h1>
        </div>

        <div>
          <Row>
            <Col span={12}>
            <div>
            col-12
            </div>
            </Col>
            <Col span={12}>col-12</Col>
          </Row>
        </div>
        
      </div>
    );
  }
}

export default App;
