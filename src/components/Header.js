import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () =>{
  return(
    <div>
    <h1>Шапка сайта</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/works">Works</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    </div>
  )
}

export default Menu
