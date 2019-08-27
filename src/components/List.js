import React, { Component } from 'react';
import axios from 'axios';
import '../bootstrap.css';
import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
import { Icon } from 'antd';


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
      <br / >
      <center><h1>Список всех пользователей</h1></center>
      <br />

        <Row gutter={16}>
            { this.state.lists.map(list =>
              <Col span={8}>
              <Card title={"LOGIN - "+list.login} style={{ width: 300 }}>
                  <p><b>id</b> - {list.id}</p>
                  <p><b>Last name</b> - {list.last_name}</p>
                  <p><b>First name</b> - {list.first_name}</p>
                  <p><b>Login</b> - {list.login}</p>
              </Card>
              <br />
              </Col>
            ) }
        </Row>

      </div>
    )
  }
}


export default List
