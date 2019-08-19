import React, { Component } from 'react';
import axios from 'axios';
import '../bootstrap.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Icon } from 'antd';


class User extends React.Component {
  constructor (props)
  {
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
    const array = [this.state.lists];

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
        <th>Function</th>
      </tr>
      </thead>
      <tbody>
      { this.state.lists.map(list =>
        <tr>
            <td>{list.id}</td>
            <td>{list.last_name}</td>
            <td>{list.first_name}</td>
            <td>{list.login}</td>
            <td>{list.password}</td>
            <td>
              <Link to={"/allinfo/"+list.id}><Button><Icon type="info-circle" spin style={{ fontSize: '20px' }}/></Button></Link>
              <DeleteUser><Button><Icon type="edit" spin style={{ fontSize: '20px' }}/></Button></DeleteUser>

              <Button><Icon type="delete" spin style={{ fontSize: '20px' }}/></Button>
            </td>
        </tr>
      ) }
      </tbody>
    </table>
    </div>
  )
}
}


export default User
