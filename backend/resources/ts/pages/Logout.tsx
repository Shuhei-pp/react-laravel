import React, { useState, useEffect } from 'react';
import axios from 'axios';

class Logout extends React.Component{
  constructor(props:any) {
    super(props);
    this.state = {
    }
  }

  logout() {
      
    axios.get('/api/user',{ withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      }
      )
  }

  render() {
    return (
      <div className="login_background">
        <div className="login_form_text">
          <h1>Logout</h1>
          <p>メールアドレス、Passwordをご入力の上、「Login」ボタンをクリックしてください。</p>
        </div>
        <div className="login_form_input">
          <button onClick={this.logout}>ユーザーを調べる</button>
        </div>
      </div>
    )
  }
}

export default Logout;