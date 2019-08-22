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
       id: '',
       last_name: '',
       first_name: '',
       login: '',
       password: '',
       description: '',
       address: '',
       date_b: '',
       role_id:''
     };
     //hoc
     //fetch
     //props.data_b
       this.onChangeLast_name = this.onChangeLast_name.bind(this);
       this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
       this.onChangeLogin = this.onChangeLogin.bind(this);
       this.onChangePassword = this.onChangePassword.bind(this);
       this.onChangeDescription = this.onChangeDescription.bind(this);
       this.onChangeAddress = this.onChangeAddress.bind(this);
       this.onChangeDateB = this.onChangeDateB.bind(this);
       this.onChangeRole = this.onChangeRole.bind(this);
       this.onChangeId = this.onChangeId.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    const {idUser} = this.props.match.params;

    axios.get(`http://backmyapp/user/allinfo/${idUser}`)
      .then(response => {
      const lists = response.data;
      console.log(response.data);
      console.log(lists[0]['login']);

        this.setState({
          id: lists[0]['id'],
          last_name: lists[0]['last_name'],
          first_name: lists[0]['first_name'],
          login: lists[0]['login'],
          password: lists[0]['password'],
          description: lists[0]['description'],
          address: lists[0]['address'],
          date_b: lists[0]['date_b'],
          role_id: lists[0]['role_id'],
          lists });
    })
  }

  onSubmit(event){
    event.preventDefault();//норм url
    const {idUser} = this.props.match.params;
        axios.put(`http://backmyapp/user/edit/${idUser}`,{
          submitapp:'good',
          id:this.state.id,
          last_name:this.state.last_name,
          first_name: this.state.first_name,
          login: this.state.login,
          password: this.state.password,
          date_b: this.state.date_b,
          address: this.state.address,
          role_id: this.state.role_id,
          description: this.state.description
        },{headers: {"Content-Type": "text/plain"}})
          .then(response => {
          const lists = response.data;
          console.log(response.data);
          //this.setState({ lists });
        })
    alert('Редактирование прошло успешно');
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
  onChangeId(event) {
    this.setState({id: event.target.value});
  }

  // {this.state.lists.map(list =>
  //    <div>
  // {list.id}
  // </div>
  // )}
  render() {
  return(
    <div>
    <br / >
    <center><h1>Редактирование информации</h1></center>
    <br />

            <div>


                    <form onSubmit={this.onSubmit}>
                      <Descriptions title="Информация о пользователе" bordered>
                        <Descriptions.Item label="ID"><input type="text" name="id" value={this.state.id} onChange={this.onChangeId} readOnly/></Descriptions.Item>
                        <Descriptions.Item label="Last name"><input type="text" name="last_name" value={this.state.last_name} onChange={this.onChangeLast_name} /></Descriptions.Item>
                        <Descriptions.Item label="First name"><input type="text" name="first_name" value={this.state.first_name} onChange={this.onChangeFirst_name} /></Descriptions.Item>
                        <Descriptions.Item label="Login"><input type="text" name="login" value={this.state.login} onChange={this.onChangeLogin} /></Descriptions.Item>
                        <Descriptions.Item label="Password" span={2}><input type="text" name="password" value={this.state.password} onChange={this.onChangePassword} /></Descriptions.Item>
                        <Descriptions.Item label="Date"><input type="date" name="date_b" value={this.state.date_b} onChange={this.onChangeDateB} /></Descriptions.Item>
                        <Descriptions.Item label="Address"><input type="text" name="address" value={this.state.address} onChange={this.onChangeAddress} /></Descriptions.Item>
                        <Descriptions.Item label="Role"><input type="text" name="role_id" value={this.state.role_id} onChange={this.onChangeRole} /></Descriptions.Item>
                        <Descriptions.Item label="Description"><input type="text" name="description" value={this.state.description} onChange={this.onChangeDescription} /></Descriptions.Item>
                      </Descriptions>
                      <input type="submit" name="submitapp" value="Подтвердить" />
                    </form>


            </div>

    </div>
  )
}

}

export default Static
