import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

class Logout extends React.Component{
  constructor(props:any) {
    super(props);
    this.state = {
    }
  }

  logout() {
    const navigate = useNavigate();
    axios.get('/api/logout',{ withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      }
      )
  }

  render() {
    return (
      <div className="login_background">
        <form className="login_form">
          <div className="login_form_text">
            <h1>Login</h1>
            <button onClick={this.logout}>ログアウト</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Logout;