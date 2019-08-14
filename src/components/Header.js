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
              <p><Link to="/registration">Регистрация</Link></p>
              <p><Link to="/login">Авторизация</Link></p>
          </div>
      </Col>

      <Col span={12}>
          <div>
          <Col span={8}>
                <Link to="/">Главная</Link>
            </Col>

            <Col span={8}>
                <Link to="/static">Статичная</Link>
            </Col>

            <Col span={8}>
                <Link to="/list">Список</Link>
            </Col>
          </div>
      </Col>
    </Row>

    </div>
  )
}

export default Header
