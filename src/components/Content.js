import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Static from './Static';
import List from './List';

const Content = () =>{
  return(
    <div>
    <h1>Содержимое сайта</h1>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/login" component={Login}/>
      <Route path="/static" component={Static}/>
      <Route path="/list" component={List}/>
    </Switch>
    </div>
  )
}

export default Content
