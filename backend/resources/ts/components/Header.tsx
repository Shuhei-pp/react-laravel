import React from 'react';
import './css/header.css';

class Header extends React.Component {
  render() {
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
              aria-expanded="false">
              Menu
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdown1">
              <a className="dropdown-item" href="#">Menu #1</a>
              <a className="dropdown-item" href="#">Menu #2</a>
              <a className="dropdown-item" href="#">Menu #3</a>
            </div>
          </div>
        </div>
        
      </header>
    );
  }
}

export default Header;