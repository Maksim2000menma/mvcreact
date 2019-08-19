import React, { Component } from 'react';
import axios from 'axios';
import '../bootstrap.css';


class List extends React.Component {
  constructor (props)
  {
     super(props);
     this.state = {
       lists: []
     };
  }

  componentDidMount() {
    axios.get('http://backmyapp/list/test')
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
    <center><h2>Список всех пользователей</h2></center>
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
              <button className="btn btn-primary">
                  <img style={{width: 25, height: 25}} src='https://seeklogo.com/images/I/information-desk-symbol-logo-871156055D-seeklogo.com.png' />
              </button>
              <button className="btn btn-primary">
                  <img style={{width: 25, height: 25}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Edit_font_awesome.svg/1024px-Edit_font_awesome.svg.png' />
              </button>
              <button className="btn btn-primary">
                  <img style={{width: 25, height: 25}} src='https://image.flaticon.com/icons/png/512/64/64022.png' />
              </button>
            </td>
        </tr>
      ) }
      </tbody>
    </table>
    <p>Ку!!!</p>
    </div>
  )
}
}


export default List
