import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../homeStyle.css'

const Home = () =>{
  return(
  <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div>
        <h1>Главная страница</h1>
        <p>и многое дрругое</p>
      </div>
  </CSSTransitionGroup>
  )
}

export default Home
