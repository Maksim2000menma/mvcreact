import React, { Component } from 'react';

class Menu extends Component{
  render(){
  let menus = [
    "Static",
    "List"
  ]
  return <div className="in_row_menu">
    {menus.map((value, index)=>{
      return <div className="in_row_menu" key={index}><Link label={value}/></div>
    })}
  </div>
  }
}

class Link extends Component{
  render(){
    const url = "/" + this.props.label.toLowerCase().trim().replace(" ", "-");
      return <a className="big_size" href={url}>{this.props.label}</a>
      //toLowerCase сделать ссылку маленькими буквами trin - удаление пробелов в начале и конце строки
  }
}

class Home extends Component{
  render(){
    const url_main = "/";
      return <div className="in_row_menu"><a className="big_size" href={url_main}>Home</a></div>
  }
}
