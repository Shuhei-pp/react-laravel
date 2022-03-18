import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './css/Login.css';

class Login extends React.Component{
  constructor(props:any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  Post() {
    axios.get('/sanctum/csrf-cookie')
      .then(response => {
        axios.post('/api/login', this.state)
          .then(() => {
            console.log("成功や");
          })
          .catch((error) => {
            console.log(error);
          })
      })
  }
  render() {
    return (
      <div className="login_background">
        <form className="login_form" onSubmit={(event) => { this.Post() }}>
          <div className="login_form_text">
            <h1>Login</h1>
            <p>メールアドレス、Passwordをご入力の上、「Login」ボタンをクリックしてください。</p>
          </div>
          <div className="login_form_input">
            <input type="mail" onChange={(e) => this.setState({ email: e.target.value })} placeholder="mail" />
            <input type="password" onChange={(e) => this.setState({ password: e.target.value })} placeholder="Password" />
            <input type="submit" name="botton" value="Login" />
          </div>
        </form>
      </div>
    )
  }
}

export default Login;