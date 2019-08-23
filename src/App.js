import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './bootstrap.css';
import './App.css';

class App extends Component {
//необходимо для просмотра информации после login and Logout
  state = {
    auth:false
  };
//стрелочная функция куда передаем значение true or false
  setAuth = (value) => {
    this.setState({
      auth:value
    })
  }
  render() {
    return (
      <div className="container">
        <Header setAuth = {this.setAuth} />
        <Content setAuth = {this.setAuth} />
        <Footer />
      </div>
    );
  }
}

export default App;
