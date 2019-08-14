import React, { Component } from 'react';
import Menu from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
