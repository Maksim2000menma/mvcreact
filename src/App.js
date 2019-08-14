import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
