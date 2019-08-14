import React, { Component } from 'react';



class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {last_name: '', first_name: ''};

    this.onChangeLast_name = this.onChangeLast_name.bind(this);
    this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    alert(`${this.state.last_name}, добро пожаловать!`);
    event.preventDefault();
   // 
   //  $.ajax({
   // type: "POST",
   // url: "../../public/Registration.php",
   // data: { last_name:  this.state.last_name  ,
   //         first_name : ${ this.state.first_name }
   //     },
   // success:function(res) {
   //     if(res == "OK")
   //         return true;
   //     else
   //         return false;
   //      }
   //    });
  }


  onChangeFirst_name(event){
    this.setState({first_name: event.target.value});
  }

  onChangeLast_name(event) {
    this.setState({last_name: event.target.value});
  }

    render() {
      return (
        <form method="post" onSubmit={this.onSubmit}>
          <p><label>Last Name <input type="text" name="last_name" value={this.state.last_name} onChange={this.onChangeLast_name}/></label></p>
          <p><label>First Name <input type="text" name="first_name" value={this.state.first_name} onChange={this.onChangeFirst_name}/></label></p>
          <p><input type="submit" value="Отправить" /></p>
        </form>
      );
    }
}

export default Registration
