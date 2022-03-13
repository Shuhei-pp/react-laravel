import React from 'react';
import './css/Login.css';

const Login = () =>{
  return (
    <div className="login_background">
      <form className="login_form">
        <div className="login_form_text">
          <h1>LOGIN</h1>
          <p>メールアドレス、Passwordをご入力の上、「LOGIN」ボタンをクリックしてください。</p>
        </div>
        <div className="login_form_input">
          <input type="mail" name="mail" placeholder="mail"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit" name="botton" value="LOGIN"/>
        </div>
      </form>
    </div>
  )
} 

export default Login;