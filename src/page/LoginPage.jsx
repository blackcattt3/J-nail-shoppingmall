import React, {useContext} from 'react'
import './LoginPage.css';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const LoginPage = () => {
    const { setUser } = useContext(UserContext)

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const login = (e)=>{
        e.preventDefault();
        // console.log(e.target);
        console.log(id,password)
        let userData = null;
        if( id==='admin'  && password==='1234'){
          userData = {id, role:'admin'};
        } else if(id==='user', password='1234'){
          userData = {id, role:'user'};
        }
        else{
          alert('아이디 또는 비밀번호가 올바르지 않습니다.')
        }

        if(userData){
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);
          navigate(from, {replace:true});
        }
        // setAuthenticate(true);
        // console.log(authenticate)
    }

  return (
    <div className='login-container'>
      <form onSubmit={login} className='login-form'>
        <input className='login-input' type='text' placeholder='id' onChange={(e)=>{setId(e.target.value)}}/>
        <input className='login-input' type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <div className='security'>
            <div className='find-tab'>
                <div>아이디 찾기</div>
                <div>|</div>
                <div>비밀번호 찾기</div>
            </div>
            <div>회원가입</div>
        </div>
        <button type='submit' className='login-btn'>로그인</button>
      </form>
    </div>
  )
}

export default LoginPage


// 로컬스토리지로 단일사용자 로그인 상태 유지