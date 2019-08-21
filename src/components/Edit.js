import React, { Component } from 'react';
import axios from 'axios';
import { Descriptions, Badge } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Static extends React.Component {
  constructor (props)
  {
     super(props);
     this.state = {
       lists: [],
       last_name: '',
       first_name: '',
       login: '',
       password: '',
       description: '',
       address: '',
       date_b: '',
       role_id:''
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


  componentDidMount() {
    //получение id (последнего символа) в url
    var url = document.URL;
    const id = url.substr(url.lastIndexOf('/') + 1);
    axios.get(`http://backmyapp/user/allinfo/${id}`)
      .then(response => {
      const lists = response.data;
      console.log(response.data)
        this.setState({ lists });
    })
  }

  onSubmit(event){
    event.preventDefault();
    //var url = document.URL;
    //const id = url.substr(url.lastIndexOf('/') + 1);
    const {idUser} = this.props.match.params;


    // axios.put(`http://backmyapp/user/edit/${idUser}`,{
    //   submitapp:'Подтвердить',
    //   last_name:'good',
    //   first_name: 'good',
    //   login: 'good',
    //   password: 'good',
    //   date_b: '2019-08-01',
    //   address: 'good',
    //   role_id: '3',
    //   description: 'good'
    // })
        axios.put(`http://backmyapp/user/edit/${idUser}`,{
          submitapp:'Подтвердить',
          last_name:'good',
          first_name: 'good',
          login: 'good',
          password: 'good',
          date_b: '2019-08-01',
          address: 'good',
          role_id: '3',
          description: 'good'
        })
          .then(response => {
          const lists = response.data;
          console.log(response.data);
            this.setState({ lists });
        })
    alert('конец');
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
  return(
    <div>
    <br / >
    <center><h1>Редактирование информации</h1></center>
    <br />
          { this.state.lists.map(list =>
            <div>

            <form onSubmit={this.onSubmit}>
            <Descriptions title="Информация о пользователе" bordered>
              <Descriptions.Item label="ID">{list.id}</Descriptions.Item>
              <Descriptions.Item label="Last name"><input type="text" name="last_name" value={this.state.last_name} onChange={this.onChangeLast_name}/></Descriptions.Item>
              <Descriptions.Item label="First name"><input type="text" name="first_name" value={this.state.first_name} onChange={this.onChangeFirst_name}/></Descriptions.Item>
              <Descriptions.Item label="Login"><input type="text" name="login" value={this.state.login} onChange={this.onChangeLogin}/></Descriptions.Item>
              <Descriptions.Item label="Password" span={2}><input type="text" name="password" value={this.state.password} onChange={this.onChangePassword}/></Descriptions.Item>
              <Descriptions.Item label="Date"><input type="date" name="date_b" value={this.state.date_b} onChange={this.onChangeDateB}/></Descriptions.Item>
              <Descriptions.Item label="Address"><input type="text" name="address" value={this.state.address} onChange={this.onChangeAddress}/></Descriptions.Item>
              <Descriptions.Item label="Role"><input type="text" name="role_id" value={this.state.role_id} onChange={this.onChangeRole}/></Descriptions.Item>
              <Descriptions.Item label="Description"><input type="text" name="description" value={this.state.description} onChange={this.onChangeDescription}/></Descriptions.Item>
            </Descriptions>

            <br />
            <input type="submit" name="submitapp" value="Подтвердить" />
            </form>

            <br />
            <br />
            </div>
          ) }
    </div>
  )
}

}

export default Static
