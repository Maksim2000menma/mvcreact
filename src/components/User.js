import React, { Component } from 'react';
import axios from 'axios';
import '../bootstrap.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Icon } from 'antd';


class User extends React.Component {
  constructor (props){
     super(props);
     this.state = {
       lists: []
     };
  }

  componentDidMount() {
    axios.get('http://backmyapp/user')
      .then(response => {
      const lists = response.data;
        this.setState({ lists });
    })
  }


  render() {
      return(
        <div>
        <br />
        <center><h2>Управление пользователями</h2></center>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Last_name</th>
              <th>First_name</th>
              <th>Login</th>
              <th>Password</th>
              <th>Role</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lists.map(list =>
            <tr>
                <td>{list.id}</td>
                <td>{list.last_name}</td>
                <td>{list.first_name}</td>
                <td>{list.login}</td>
                <td>{list.password}</td>
                <td>
                {list.role_name}
                </td>
                <td>
                  <Link to={"/allinfo/"+list.id}><Button><Icon type="info-circle" style={{ fontSize: '20px' }}/></Button></Link>
                  <Link to={"/edit/"+list.id}><Button><Icon type="edit" style={{ fontSize: '20px' }}/></Button></Link>
                  <Link to={"/deleteuser/"+list.id}><Button><Icon type="delete" style={{ fontSize: '20px' }}/></Button></Link>
                </td>
            </tr>
            )}
          </tbody>
        </table>
          <Link to={"/createUser/"}><Button type="primary">Создание пользователя</Button></Link>
        </div>
      )
  }
}


export default User
