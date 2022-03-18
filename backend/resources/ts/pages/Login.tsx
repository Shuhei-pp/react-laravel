import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './css/Login.css';



const getUser = () => {
  axios.get("/api/user")
    .then(res => {
      console.log('ログイン済み');
      console.log(res.data);

    }).catch(err => {
      console.log('ログインしてません');
    })
}

const Login = () => {
  getUser();
  return (
    <div className="login_background">
      <form className="login_form">
        <div className="login_form_text">
          <h1>Login</h1>
          <p>メールアドレス、Passwordをご入力の上、「Login」ボタンをクリックしてください。</p>
        </div>
        <div className="login_form_input">
          <input type="mail" name="mail" placeholder="mail"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit" name="botton" value="Login"/>
        </div>
      </form>
    </div>
  )
} 

export default Login;