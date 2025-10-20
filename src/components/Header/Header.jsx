import React from 'react'
import './Header.css';
import logo from '../../assets/img/main_logo.png'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const navigate = useNavigate();

  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(()=>{
    console.log("useEffect 실행")
    // 외부 클릭 감지 함수
    const handleOutSideClick = (e)=>{
      if(navbarIsOpen && navRef.current && !navRef.current.contains(e.target)){
        // console.log(e.target);
        // 이때 e.target은 클릭된 객체를 의미. ex) footer 클릭했을때 <div class="footer"></div> 이런식으로 찍힘.
        setNavbarIsOpen(false)
      }
    }
    if(navbarIsOpen){
      // 이벤트리스너는 매개변수 붙이지 않아도 자동으로 이벤트객체를 전달한다)
      document.addEventListener("click", handleOutSideClick);
    }
    // return의 역할 : navbarIsOpen의 true/false 여부와 상관없이 useEffect 실행전에 이전 이벤트제거를 실행한다.
    return ()=>{
      console.log("이전 이벤트 제거");
      document.removeEventListener('click', handleOutSideClick)
    }
  },[navbarIsOpen])

  const navBarList = [
    { name: 'About', path:'/about'},
    { name: 'New Arrival', path:'/newarrival'},
    { name: 'Best', path:'/best'},
    { name: 'Look Book', path:'/lookbook'},
  ]


  return (
    <div>
      <div className='header'>
        <FontAwesomeIcon onClick={(e)=>{e.stopPropagation(); setNavbarIsOpen(!navbarIsOpen)}} className = 'header-icon' icon={faBars} style={{color: "#ffffff",}} />
        <img onClick={()=>{navigate('/')}} className='logo-img' src={logo}/>
        <div className='header-right'>
          <FontAwesomeIcon onClick={()=>{navigate('/login')}} className = 'header-icon' icon={faUser} style={{color: "#ffffff",}} />
          <FontAwesomeIcon className = 'header-icon' icon={faCartShopping} style={{color: "#ffffff",}} />
        </div>
      </div>

      <div ref={navRef} className={`navBar ${navbarIsOpen?"open":""}`}>
        <ul>
          {navBarList.map((item, index)=>(
            <li key={index} onClick={()=>{navigate(`${item.path}`)}}>{item.name}</li>
          ))}
        </ul>
      </div> 
    </div>
  )
}

export default Header

// 외부클릭감지 로직 구현시 stopPropagation 이거 안써줬을때 햄버거바 눌러도 아예 navBar가 내려오질 않았음.
// 버블링 현상때문! stopPropagation 써서 막아줌.