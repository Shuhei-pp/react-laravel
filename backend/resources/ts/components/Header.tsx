import React, { useState,VFC } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

import './css/header.css';



const Header: React.FC  = () => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(true);
  const navigate = useNavigate();

  function logout() {
    axios.get('/sanctum/csrf-cookie', { withCredentials: true })
      .then(response => {
        axios.post('/api/logout', { withCredentials: true })
          .then((res) => {
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
          <li><a href="/feature/">選ばれる理由</a></li>
          <li><a href="/service/">サービス</a></li>
          <li><a href="/case/">制作事例</a></li>
          <li><a href="/company/">会社案内</a></li>
          <li><a className="button" href="/recruit/">お問い合わせ</a></li>
        </ul>
        <div className="dropdown">
          <button type="button" id="dropdown1"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={()=>setIsDropDownOpen(!isDropdownOpen)}
          >
            Dropdown button
          </button>
          <div className={isDropdownOpen ? 'dropdown-menu' : "d-block dropdown-menu"}
            aria-labelledby="dropdown1">
            <Link to="/login" className="dropdown-item">Login</Link>
            <Link className="dropdown-item" to="/user">Mypage</Link>
            <a className="dropdown-item" onClick={()=>{logout()}}>Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;