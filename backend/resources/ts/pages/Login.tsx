import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import { useAuth } from "../Auth";

import './css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //フロントの認証情報管理
  const auth = useAuth();

  const Post = () =>{
    axios.get('/sanctum/csrf-cookie',{ withCredentials: true })
      .then(response => {
        axios.post('/api/login',
          {email,password})
          .then((res) => {
            auth?.setLoginUser(res.data.user);
          })
          .catch((error) => {
            console.log(error);
          })
      })
  }
  return (
    <div className="login_background">
      <form className="login_form" onSubmit={(event) => { Post() }}>
        <div className="login_form_text">
          <h1>Login</h1>
          <p>メールアドレス、Passwordをご入力の上、「Login」ボタンをクリックしてください。</p>
        </div>
        <div className="login_form_input">
          <input type="mail" onChange={(e) => setEmail(e.target.value)} placeholder="mail" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <input type="submit" name="botton" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Login;