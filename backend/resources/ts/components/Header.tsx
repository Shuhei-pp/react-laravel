import React, { useState,VFC } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/header.css';



const Header: React.FC  = () => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(true);

  function logout() {
    axios.get('/sanctum/csrf-cookie', { withCredentials: true })
      .then(response => {
        axios.post('/api/logout', { withCredentials: true })
          .then((res) => {
            console.log(res);
            location.href='/';
          })
          .catch((error) => {
            console.log(error);
          })
      })
  }

  return (
    <header>
      <div className="inner">
        <p className="logo"><a className="over" href="#">COMPANY</a></p>
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
            <a className="dropdown-item" href="#">Menu #1</a>
            <a className="dropdown-item" href="#">Menu #2</a>
            <a className="dropdown-item" href="#" onClick={()=>{logout()}}>Menu #3</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;