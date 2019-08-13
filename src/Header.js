import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Home from'./Menu';
import './bootstrap.css';


class Header extends Component {
  render() {
    const url = "/";
    return (
      <div className="container">
          <div className="App">
              <h1>Шапка сайта</h1>
          </div>
        <Row>
          <Col span={8}>
              <div style={{backgroundColor: "#8fd2ff"}}>

                  <p><a className="big_size" href={url}>Регистрация</a></p>
                  <p>Авторизация</p>
              </div>
          </Col>

          <Col span={15} offset={1}>
              <div style={{backgroundColor: "#8fd23f"}}>
              {/*<Home />*/}
                  col-12
              </div>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Header;
