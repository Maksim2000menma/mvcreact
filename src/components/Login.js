import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';

class Login extends React.Component {
    render() {
  return(
    <div>
    <br />
      <center><h1>Авторизация</h1></center>
      <Row>
      <Col span={12} offset={6}>

      <Form className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Логин"
              name="login"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Пароль"
              name="password"
            />
        </Form.Item>
        <Form.Item>
          <Col span={8}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Вход
            </Button>
          </Col>
          <Col span={16}>
            Или <Link to={"/registration/"}>зарегистрируйтесь сейчас!</Link>
          </Col>
        </Form.Item>
      </Form>

      </Col>
    </Row>
    </div>
  )
}
}

export default Login
