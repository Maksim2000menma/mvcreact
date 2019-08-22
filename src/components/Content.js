import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Static from './Static';
import List from './List';
import User from './User';
import AllInfo from './AllInfo';
import DeleteUser from './DeleteUser';
import Edit from './Edit';
import CreateUser from './createUser';

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
      <Route path="/deleteuser" component={DeleteUser}/>
      <Route path="/edit/:idUser/" component={Edit}/>
      <Route path="/createUser" component={CreateUser}/>
    </Switch>
    </div>
  )
}

export default Content
