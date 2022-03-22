import React, { useState,VFC } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../Auth";

import './css/header.css';



const Header: React.FC  = () => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(true);
  const navigate = useNavigate();
  //フロントの認証情報管理
  const auth = useAuth();

  function logout() {
    axios.get('/sanctum/csrf-cookie', { withCredentials: true })
      .then(response => {
        axios.post('/api/logout', { withCredentials: true })
          .then((res) => {
            auth?.setLoginUser(null);
            navigate('/');
          })
          .catch((error) => {
            console.log(error);
          })
      })
  }

  return (
    <header>
      <div className="inner">
        <p className="logo"><Link className="over" to="/">COMPANY</Link></p>
        <ul className="navi">
          <li><a href="/company/">会社案内</a></li>
          <li><Link className="button" to="/signup">新規登録</Link></li>
          <li><Link className="button" to="/login">ログイン</Link></li>
        </ul>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle"
            onClick={()=>setIsDropDownOpen(!isDropdownOpen)}
          >
            Dropdown button
          </button>
          <div className={isDropdownOpen ? 'dropdown-menu' : "d-block dropdown-menu"}
            aria-labelledby="dropdown1">
            <Link to="/login" className="dropdown-item">Login</Link>
            <Link className="dropdown-item" to="/user">Mypage</Link>
            <Link className="dropdown-item" to="/signup">Signup</Link>
            <a className="dropdown-item" onClick={()=>{logout()}}>Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;