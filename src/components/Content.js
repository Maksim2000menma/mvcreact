import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import About from './About';

const Content = () =>{
  return(
    <div>
    <h1>Содержимое сайта</h1>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/works" component={Works}/>
      <Route path="/about" component={About}/>
    </Switch>
    </div>
  )
}

export default Content
