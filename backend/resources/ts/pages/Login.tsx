import React from 'react';
import './css/Login.css';

const Login = () =>{
  return (
    <div>
      <form name="login_form">
        <div className="login_form_top">
          <h1>LOGIN</h1>
          <p>UserID、Passwordをご入力の上、「LOGIN」ボタンをクリックしてください。</p>
        </div>
        <div className="login_form_btm">
          <input type="text" name="mail"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit" name="botton" value="LOGIN"/>
        </div>
      </form>
    </div>
  )
} 

export default Login;