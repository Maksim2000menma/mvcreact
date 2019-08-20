import React, { Component } from 'react';
import axios from 'axios';
import { Descriptions, Badge } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Static extends React.Component {
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
//http://backmyapp/user/allinfo/
    axios.put(`http://backmyapp/user/allinfo/${id}`)
      .then(response => {
      const lists = response.data;
      console.log(response.data)
        this.setState({ lists });
    })
  }


  render() {
  return(
    <div>
    <br / >
    <center><h1>Подробная информация</h1></center>
    <br />
          { this.state.lists.map(list =>
            <div>
            <Descriptions title="Информация о пользователе" bordered>
              <Descriptions.Item label="ID">{list.id}</Descriptions.Item>
              <Descriptions.Item label="Last name"><input type="text" name="last_name" value={list.last_name} /></Descriptions.Item>
              <Descriptions.Item label="Last name"><input type="text" value={list.last_name}  /></Descriptions.Item>
              <Descriptions.Item label="First name"><input type="text" name="first_name" value={list.first_name} /></Descriptions.Item>
              <Descriptions.Item label="Login">{list.login}</Descriptions.Item>
              <Descriptions.Item label="Password" span={2}>{list.password}</Descriptions.Item>
              <Descriptions.Item label="Date">{list.date_b}</Descriptions.Item>
              <Descriptions.Item label="Address">{list.address}</Descriptions.Item>
              <Descriptions.Item label="Role">{list.role_id}</Descriptions.Item>
              <Descriptions.Item label="Description">{list.description}</Descriptions.Item>
            </Descriptions>
            <br />
            <Button type="primary" htmlType="submit" name="submitapp" block>Подтвердить</Button>
            <br />
            <br />
            </div>
          ) }
    </div>
  )
}

}

export default Static
