import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Static from './Static';
import List from './List';
import User from './User';
import AllInfo from './AllInfo';

const Content = () =>{
  return(
    <div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/login" component={Login}/>
      <Route path="/static" component={Static}/>
      <Route path="/list" component={List}/>
      <Route path="/user" component={User}/>
      <Route path="/allinfo" component={AllInfo}/>
    </Switch>
    </div>
  )
}

export default Content
