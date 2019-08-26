import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    const {setAuth} = this.props;
    const str = JSON.stringify(this.state);
    axios.post('http://backmyapp/login',str)
      .then(function(response) {
        console.log(response.data);
        //запись функций и роли в глобальный localStorage
        localStorage.setItem('roleUser',response.data[0]);
        localStorage.setItem('funDelete',response.data[1]);
        localStorage.setItem('funCreate',response.data[2]);
        localStorage.setItem('funRead',response.data[3]);
        localStorage.setItem('funEdit',response.data[4]);
        localStorage.setItem('login',response.data[5]);
        setAuth(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
    alert(`${this.state.login}, ${this.state.password}, Регистрация прошла успешно`);
    //this.props.history.push('/user');
  }

  onChangeLogin(event) {
    this.setState({login: event.target.value});
  }

  onChangePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return(
      <div>
      <br />
      <center><h1>Авторизация</h1></center>
      <Row>
        <Col span={12} offset={6}>
          <form method="post" onSubmit={this.onSubmit}>
            <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Логин"
                name="login"
                value={this.state.login} onChange={this.onChangeLogin}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Пароль"
                name="password"
                value={this.state.password} onChange={this.onChangePassword}
              />
            </Form.Item>
            <Form.Item>
              <Col span={8}>
                <Button type="primary" htmlType="submit" className="login-form-button">Вход</Button>
              </Col>
              <Col span={16}>
                Или <Link to={"/registration/"}>зарегистрируйтесь сейчас!</Link>
              </Col>
            </Form.Item>
          </form>
        </Col>
      </Row>
    </div>
  )
}

}

export default Login
