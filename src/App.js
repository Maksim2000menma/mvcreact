import React, { Component } from 'react';
import Button from 'antd/es/button';
import { Icon } from 'antd';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Контент сайта</h1>
        <Button type="primary">Button</Button>
        <Button type="primary" shape="circle" icon="search" />
        <Icon type="mobile" />
        { /* Комментарий*/}
      </div>
    );
  }
}

export default App;
