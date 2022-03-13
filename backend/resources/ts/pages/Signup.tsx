import React from 'react';
import './css/Signup.css';

const Signup = () => {
  return (
    <div className="signup_background">
      <form className="signup_form">
        <div className="signup_form_text">
          <h1>Signup</h1>
          <p>UserName、UserID、Passwordをご入力の上、「Signup」ボタンをクリックしてください。</p>
        </div>
        <div className="signup_form_btm">
          <input type="text" name="user_name" placeholder="User Name"/>
          <input type="text" name="mail" placeholder="Mail"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit" name="botton" value="Signup"/>
        </div>
      </form>
    </div>
  )
} 

export default Signup;