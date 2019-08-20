import React, { Component } from 'react';
import axios from 'axios';

class DeleteUser extends React.Component {
  constructor (props)
  {
     super(props);
     this.state = {
       lists: []
     };
  }

  componentDidMount() {
    //получение id (последнего символа) в url
    var url = document.URL;
    const id = url.substr(url.lastIndexOf('/') + 1);

    axios.delete(`http://backmyapp/user/delete/${id}`)
      .then(response => {
      console.log(response);
        console.log(response.data);
    })
  }

  render() {
  return(
    <div>
    <br / >
    <center><h1>Удаление выполнено</h1></center>
    <br />

    </div>
  )
}
}

export default DeleteUser
