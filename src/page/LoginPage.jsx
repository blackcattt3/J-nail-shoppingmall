import React from 'react'
import './LoginPage.css';
import { useState } from 'react';

const LoginPage = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const login = (e)=>{
        e.preventDefault();
        console.log(e.target);
        console.log(id,password)
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
