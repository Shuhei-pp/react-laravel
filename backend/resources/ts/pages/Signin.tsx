import React from 'react';
import './css/Signin.css';

const Signin = () => {
  return (
    <div className="signin_background">
      <form className="signin_form">
        <div className="signin_form_text">
          <h1>SIGNIN</h1>
          <p>UserName、UserID、Passwordをご入力の上、「LOGIN」ボタンをクリックしてください。</p>
        </div>
        <div className="signin_form_btm">
          <input type="text" name="user_name" placeholder="User Name"/>
          <input type="text" name="mail" placeholder="Mail"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit" name="botton" value="LOGIN"/>
        </div>
      </form>
    </div>
  )
} 

export default Signin;