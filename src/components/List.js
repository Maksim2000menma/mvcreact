import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://backmyapp/list/test';

class List extends React.Component {
    state = {
      lists: []
    }


  componentDidMount() {
    axios.get('http://backmyapp/list/test')
      .then(response => {
      console.log(response.data);
      this.setState({lists: response.data});
    })
    alert(this.state.lists['last_name']);
  }

  render() {
  return(
    <div>
      <p>Список всех пользователей</p>
        {this.state.lists.map(list => <p>{list.last_name}</p>)}
        <p>Нууууу</p>
    </div>
  )
}
}

export default List
