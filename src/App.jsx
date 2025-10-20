import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './page/HomePage'
import LoginPage from './page/LoginPage';
import AboutPage from './page/AboutPage';
import NewArrivalPage from './page/NewArrivalPage';
import BestPage from './page/BestPage';
import LookBookPage from './page/LookBookPage';

function App() {

  return (
    <div className='app-container'>
      <Header/>
      <div className='main'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/newarrival' element={<NewArrivalPage/>}/>
          <Route path='/best' element={<BestPage/>}/>
          <Route path='/lookbook' element={<LookBookPage/>}/>
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
// 외부하면 누르면 navBar 닫힌다.
// 장바구니 기능

// 메인
