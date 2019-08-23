import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Row, Col } from 'antd';

const InfoUser =() => {
  const data = {
    roleUser : localStorage.getItem('roleUser'),
    funDelete : localStorage.getItem('funDelete'),
    funCreate : localStorage.getItem('funCreate'),
    funRead : localStorage.getItem('funRead'),
    funEdit : localStorage.getItem('funEdit'),
    login : localStorage.getItem('login')
  };
  return <p>Роль:{data.roleUser}, Login:{data.login}</p>;
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.clickLogout = this.clickLogout.bind(this);
  }

  clickLogout() {
    const {setAuth} = this.props;
    //удаление значений по ключам
    localStorage.removeItem("roleUser");
    localStorage.removeItem("funDelete");
    localStorage.removeItem("funCreate");
    localStorage.removeItem("funRead");
    localStorage.removeItem("funEdit");
    localStorage.removeItem("login");
     setAuth(false);
    console.log(this.props);
    alert('Выход');
  }

render() {
  return(
    <div  style={{ backgroundColor: "#dcdce0" }}>
    <center><h1>Шапка сайта</h1></center>
    <Row>
      <Col span={12}>
        <div>
          <h5><Link to="/registration">Регистрация</Link></h5>
          <h5><Link to="/login">Авторизация</Link></h5>
          <button onClick={this.clickLogout}>Выход</button>
          <InfoUser />
        </div>
      </Col>
      <Col span={12}>
        <div>
          <Col span={8}>
            <h4><Link to="/">Главная</Link></h4>
          </Col>
          <Col span={8}>
            <h4><Link to="/static">Статичная</Link></h4>
          </Col>
          <Col span={8}>
            <h4><Link to="/list">Список</Link></h4>
          </Col>
          <Col span={8}>
            <h4><Link to="/user">Управление</Link></h4>
          </Col>
        </div>
      </Col>
    </Row>
  </div>
  )
  }
}

export default Header
