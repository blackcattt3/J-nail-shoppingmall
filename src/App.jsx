import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {

  return (
    <div className='container'>
      <Header/>
      <div className='main'>
        <Routes>

        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App

// 헤더
// 로고 이미지 누르면 메인 화면으로 이동한다
// 로그인, 로그아웃 가능 - 로그인 전에는 로그인 버튼이, 로그인 하고나서는 로그아웃 버튼이 보인다.
// 마이페이지 - 로그인 전에는 로그인화면으로 넘어가고 로그인 후에는 마이페이지가 보인다
// 햄버거바 만들기 - About, New Arrival, Best, Look Book
// 장바구니 기능

// 메인
