import React, { Component } from 'react';
import axios from 'axios';
import { Descriptions, Badge } from 'antd';

class AllInfo extends React.Component {
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

    axios.get(`http://backmyapp/user/allinfo/${id}`)
      .then(response => {
      const lists = response.data;
        this.setState({ lists });
    })
  }

  render() {
    const array = [this.state.lists];
    if ((localStorage.getItem('roleUser') == 1) ||(localStorage.getItem('roleUser') == 2) || (localStorage.getItem('roleUser') == 3))
    {
      return(
        <div>
        <br / >
        <center><h1>Подробная информация</h1></center>
        <br />
        { this.state.lists.map(list =>
          <div>
            <Descriptions title="Информация о пользователе" bordered>
              <Descriptions.Item label="ID">{list.id}</Descriptions.Item>
              <Descriptions.Item label="Last name">{list.last_name}</Descriptions.Item>
              <Descriptions.Item label="First name">{list.first_name}</Descriptions.Item>
              <Descriptions.Item label="Login"><b>{list.login}</b></Descriptions.Item>
              <Descriptions.Item label="Password" span={2}><b>{list.password}</b></Descriptions.Item>
              <Descriptions.Item label="Date">{list.date_b}</Descriptions.Item>
              <Descriptions.Item label="Address">{list.address}</Descriptions.Item>
              <Descriptions.Item label="Role">{list.role_id}</Descriptions.Item>
              <Descriptions.Item label="Description">{list.description}</Descriptions.Item>
            </Descriptions>
          </div>
        ) }
      </div>
      )
    }
    else{
      return(
        <div>
        <br/>
          <h1>Нет доступа к данному функционалу!</h1>
          <br/>
        </div>
      )
    }
  }
}

export default AllInfo
