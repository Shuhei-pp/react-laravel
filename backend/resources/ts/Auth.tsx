//フロントでの認証状態を管理するAuth.tsx

import React, { useContext, createContext, ReactNode, useState,useEffect } from 'react';
import axios from 'axios';

import Login from './pages/Login';

interface UserData{
  email: string,
  password: string,
}

//createContextを使うとどのコンポーネント(下の階層)でも値を渡すことができる
const authContext = createContext<any>(null);

const ProvideAuth = ({ children }: any) => {
  //authは認証ユーザーのデータ,クラスメソッド(ログイン等)をもっている
  const auth = useProvideAuth();
  //index.tsx以下でauthが使えるようにする
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export default ProvideAuth;

export const useAuth = () => {
  return useContext(authContext)
}

//フロントでユーザーデータを管理
const useProvideAuth = () => {
  const [user, setUser] = useState<UserData|null>(null);

  //ログインしたらユーザーデータをセット
  const setLoginUser = (userData: any) => {
    setUser(userData);
  }

  //ログアウトしたらユーザーデータを削除
  const revokeLoginUser = () => {
    setUser(null);
  }

  useEffect(() => {
    axios.get('/api/user').then((res) => {
      setUser(res.data.user);
    }).catch(() => {
      setUser(null);
      if (location.pathname != '/login') {
        location.href = '/login';
      }
    })
  }, [])
  
  return { 
    user,
    setLoginUser,
    revokeLoginUser
  }
}

//認証済みルート
export const PrivateRoute = (props:any) =>{
  const auth = useAuth();
  if (auth?.user!=null) {
    return props.component
  }
  return(
    <Login />
  )

}