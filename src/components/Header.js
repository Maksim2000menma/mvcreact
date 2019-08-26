import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Redirect } from 'react-router';


const OpRegistration =() => {
  if ((localStorage.getItem('roleUser') == 1) || (localStorage.getItem('roleUser') == 2) || (localStorage.getItem('roleUser') == 3)){
    return '';
  }
  else {
    return <Link to="/registration">Регистрация</Link>;
  }
}

const OpAuthorization =() => {
  if ((localStorage.getItem('roleUser') == 1) || (localStorage.getItem('roleUser') == 2) || (localStorage.getItem('roleUser') == 3)){
    return '';
  }
  else {
    return <Link to="/login">Авторизация</Link>;
  }
}

const OpLogout =() => {
  if ((localStorage.getItem('roleUser') == 1) || (localStorage.getItem('roleUser') == 2) || (localStorage.getItem('roleUser') == 3)){
    return 'Выход';
  }
  else {
    return '';
  }
}


const InfoUser =() => {
  const data = {
    roleUser : localStorage.getItem('roleUser'),
    funDelete : localStorage.getItem('funDelete'),
    funCreate : localStorage.getItem('funCreate'),
    funRead : localStorage.getItem('funRead'),
    funEdit : localStorage.getItem('funEdit'),
    login : localStorage.getItem('login')
  };
  if ((data.roleUser == 1) || (data.roleUser == 2) || (data.roleUser == 3)){
    return <p>ROLE:{data.roleUser}, LOGIN:<b>{data.login}</b>, READ:{data.funRead}, CREATE:{data.funCreate}, DELETE:{data.funDelete}, EDIT:{data.funEdit}</p>;
  }
  else {
    return '';
  }
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
          <h5><OpRegistration /></h5>
          <h5><OpAuthorization /></h5>
          <h5><a onClick={this.clickLogout}><OpLogout /></a></h5>
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
