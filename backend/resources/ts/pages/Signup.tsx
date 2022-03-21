import React,{useState} from 'react';
import './css/Signup.css';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Signup = () => {
    console.log({ name, email, password });
    /*axios.get('/sanctum/csrf-cookie')
      .then(()=>{
        axios.post('api/signup', { name, email, password })
          .then((res) => {
            console.log(res);
          }).catch((error) => {
            console.log(error);
          });
      });*/
  }

  return (
    <div className="signup_background">
      <div className="signup_form">
        <div className="signup_form_text">
          <h1>Signup</h1>
          <p>UserName、UserID、Passwordをご入力の上、「Signup」ボタンをクリックしてください。</p>
        </div>
        <div className="signup_form_btm">
          <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="User Name"/>
          <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Mail"/>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
          <button onClick={()=>Signup()}>Signup</button>
        </div>
      </div>
    </div>
  )
} 

export default Signup;