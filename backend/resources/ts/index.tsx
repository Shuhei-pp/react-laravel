import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";

//Components
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Login from './pages/Login';
import Signin from './pages/Signin';

//Routes
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/top" element={<Mypage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/Signin" element={<Signin />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('index')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals