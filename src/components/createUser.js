import React, { Component } from 'react';
import axios from 'axios';
import {Form,Icon,Input,Row,Col,Checkbox,Button,AutoComplete} from 'antd';
import { Link } from 'react-router-dom';

const { TextArea } = Input;

class createUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        last_name: '',
        first_name: '',
        login: '',
        password: '',
        description: '',
        address: '',
        date_b: '',
        role_id: ''
      };

    this.onChangeLast_name = this.onChangeLast_name.bind(this);
    this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDateB = this.onChangeDateB.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    const str = JSON.stringify(this.state);
    axios.post('http://backmyapp/user/create',str)
                .then(function(response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
   event.preventDefault();
    alert(`${this.state.last_name}, ${this.state.first_name}, Регистрация прошла успешно`);
    this.props.history.push('/');
  }


  onChangeFirst_name(event){
    this.setState({first_name: event.target.value});
  }

  onChangeLast_name(event) {
    this.setState({last_name: event.target.value});
  }

  onChangeLogin(event) {
    this.setState({login: event.target.value});
  }

  onChangePassword(event) {
    this.setState({password: event.target.value});
  }

  onChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  onChangeAddress(event) {
    this.setState({address: event.target.value});
  }
  onChangeDateB(event) {
    this.setState({date_b: event.target.value});
  }
  onChangeRole(event) {
    this.setState({role_id: event.target.value});
  }


    render() {
      return (
        <div>
        <br />
        <center><h1>создание нового пользователя</h1></center>

        <Row>
          <Col span={12} offset={6}>

              <form method="post" onSubmit={this.onSubmit}>
                    <Form.Item>
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Last name"
                          name="last_name" value={this.state.last_name} onChange={this.onChangeLast_name}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="First name"
                          name="first_name" value={this.state.first_name} onChange={this.onChangeFirst_name}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Логин"
                          name="login" value={this.state.login} onChange={this.onChangeLogin}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password"
                          placeholder="Password"
                          name="password" value={this.state.password} onChange={this.onChangePassword}
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextArea
                          rows={4}
                          placeholder="Description"
                          name="description" value={this.state.description} onChange={this.onChangeDescription}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Address"
                          name="address" value={this.state.address} onChange={this.onChangeAddress}
                        />
                        <Input type="date" name="date_b" style={{width:'100%', height: 30}} value={this.state.date_b} onChange={this.onChangeDateB}/>
                    </Form.Item>

                    <Form.Item>
                      <Input
                        prefix={<Icon type="plus" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Роль пользователя (1 2 3)"
                        name="role_id" value={this.state.role_id} onChange={this.onChangeRole}
                      />
                    </Form.Item>

                    <Form.Item>
                        <Button style={{width:'100%'}} type="primary" htmlType="submit" className="login-form-button">
                          Регистрация
                          </Button>
                    </Form.Item>
              </form>

          </Col>
      </Row>

        </div>
      );
    }
}


export default createUser
