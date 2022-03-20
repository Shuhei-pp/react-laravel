import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProvideAuth, { PrivateRoute } from './Auth';

//pages
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';

//components
import Header from './components/Header';

//Routes
ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/user" element={<PrivateRoute component={<Mypage />}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<PrivateRoute component={<Logout />}/>}/>
          </Routes>
        </BrowserRouter>
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById('index')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals