import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Row, Col } from 'antd';

const Header = () =>{
  return(
    <div  style={{ backgroundColor: "#dcdce0" }}>
    <center><h1>Шапка сайта</h1></center>
    <Row>
      <Col span={12}>
          <div>
              <h5><Link to="/registration">Регистрация</Link></h5>
              <h5><Link to="/login">Авторизация</Link></h5>
          </div>
      </Col>

      <Col span={12}>
          <div>
          <Col span={8}>
                <h4><Link to="/">Главная</Link></h4>
            </Col>

            <Col span={8}>
                <h4><Link to="/static">Статичная</Link></h4>
            </Col>

            <Col span={8}>
                <h4><Link to="/list">Список</Link></h4>
            </Col>
          </div>
      </Col>
    </Row>

    </div>
  )
}

export default Header
