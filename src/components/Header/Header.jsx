import React, {useContext} from 'react'
import { UserContext } from '../../contexts/UserContext';
import './Header.css';
import logo from '../../assets/img/main_logo.png'
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faL } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const { user, logout } = useContext(UserContext);

  const navigate = useNavigate();

  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const navRef = useRef(null);

  const [loginTabIsOpen, setLoginTabIsOpen] = useState(false);
  const loginRef = useRef(null);

  const [infoTabIsOpen, setInfoTabIsOpen] = useState(false);
  const infoRef = useRef(null)

  // useEffect(()=>{
  //   // console.log("useEffect 실행")
  //   // 외부 클릭 감지 함수
  //   const handleOutSideClick = (e)=>{
  //     if(navbarIsOpen && navRef.current && !navRef.current.contains(e.target)){
  //       // console.log(e.target);
  //       // 이때 e.target은 클릭된 객체를 의미. ex) footer 클릭했을때 <div class="footer"></div> 이런식으로 찍힘.
  //       setNavbarIsOpen(false)
  //     }
  //   }
  //   if(navbarIsOpen){
  //     // 이벤트리스너는 매개변수 붙이지 않아도 자동으로 이벤트객체를 전달한다)
  //     document.addEventListener("click", handleOutSideClick);
  //   }
  //   // return의 역할 : navbarIsOpen의 true/false 여부와 상관없이 useEffect 실행전에 이전 이벤트제거를 실행한다.
  //   return ()=>{
  //     console.log("이전 이벤트 제거");
  //     document.removeEventListener('click', handleOutSideClick)
  //   }
  // },[navbarIsOpen])

  const location = useLocation();
  // 경로 이동되면 닫히게.
  useEffect(()=>{
    setNavbarIsOpen(false);
    setInfoTabIsOpen(false);
    setLoginTabIsOpen(false);
  },[location.pathname])


  // 외부클릭 감지
  // useEffect(()=>{
  //   const handleOutSideClick = (e)=>{
  //     const navEl = navRef.current;
  //     const infoEl = infoRef.current;
  //     const loginEl = loginRef.current;

  //     if(navbarIsOpen && navEl && !navEl.contains(e.target)){
  //       setNavbarIsOpen(false);
  //       setInfoTabIsOpen(false);
  //       setLoginTabIsOpen(false);
  //     }

  //     if(infoTabIsOpen && infoEl && !infoEl.contains(e.target)){
  //       setInfoTabIsOpen(false);
  //     }

  //     if(loginTabIsOpen && loginEl && !loginEl.contains(e.target)){
  //       setLoginTabIsOpen(false);
  //     }
      
  //     document.addEventListener('click', handleOutSideClick)

  //     return ()=>{
  //       document.removeEventListener('click', handleOutSideClick)
  //     }

  //   }
  // },[navbarIsOpen, infoTabIsOpen, loginTabIsOpen])

  useEffect(() => {
  const handleOutSideClick = (e) => {
    const navEl = navRef.current;
    const infoEl = infoRef.current;
    const loginEl = loginRef.current;

    if (navbarIsOpen && navEl && !navEl.contains(e.target)) {
      setNavbarIsOpen(false);
      setInfoTabIsOpen(false);
      setLoginTabIsOpen(false);
    }

    if (infoTabIsOpen && infoEl && !infoEl.contains(e.target)) {
      setInfoTabIsOpen(false);
    }

    if (loginTabIsOpen && loginEl && !loginEl.contains(e.target)) {
      setLoginTabIsOpen(false);
    }
  };

  document.addEventListener('click', handleOutSideClick);
  return () => document.removeEventListener('click', handleOutSideClick);
}, [navbarIsOpen, infoTabIsOpen, loginTabIsOpen]);





  



  const navBarList = [
    { name: 'About', path:'/about'},
    { name: 'All', path:'/products'},
    { name: 'New Arrival', path:'/newarrival'},
    { name: 'Best', path:'/best'},
    { name: 'Look Book', path:'/lookbook'},
  ]

  const InfoTabList = [

  ]

  const LogInTabList = [

  ]


  return (
    <div>
      <div className='header'>
        <FontAwesomeIcon onClick={(e)=>{e.stopPropagation(); setNavbarIsOpen(!navbarIsOpen)}} className = 'header-icon' icon={faBars} style={{color: "#ffffff",}} />
        <img onClick={()=>{navigate('/')}} className='logo-img' src={logo}/>
        <div className='header-right'>
          <FontAwesomeIcon onClick={()=>{navigate('/mypage')}} className = 'header-icon' icon={faUser} style={{color: "#ffffff",}} />
          <FontAwesomeIcon onClick={()=>{navigate('/cart')}} className = 'header-icon' icon={faCartShopping} style={{color: "#ffffff",}} />
        </div>
      </div>

      <div ref={navRef} className={`navBar ${navbarIsOpen?"open":""}`}>
        <ul>
          {navBarList.map((item, index)=>(
            <li key={index} onClick={()=>{navigate(`${item.path}`); setNavbarIsOpen(false)}}>{item.name}</li>
          ))}

          <li ref={infoRef} className='header-detail-tab' onClick={(e)=>{
            e.stopPropagation();
            setInfoTabIsOpen(!infoTabIsOpen);
            setLoginTabIsOpen(false);
            // console.log(infoTabIsOpen)
          }}>
            <div className='header-detail-wrapper'>
              <div>Info</div>
              <div className={`detail-tab-icon ${infoTabIsOpen?"open":""}`}>{infoTabIsOpen?'-':'+'}</div>
            </div>
            <ul className={`detail-tab-wrap ${infoTabIsOpen?"open":""}`} onClick={(e)=>{e.stopPropagation()}}>
              <li onClick={()=>{
                navigate('/notice');
                setInfoTabIsOpen(false);
                setNavbarIsOpen(false);
              }}>Notice</li>
              <li>About</li>
            </ul>
          </li>

          <li ref={loginRef} className='header-detail-tab' onClick={(e)=>{
            e.stopPropagation();
            setLoginTabIsOpen(!loginTabIsOpen);
            setInfoTabIsOpen(false);
            // console.log(loginTabIsOpen)

          // user? logout(): navigate('/login');
          // setNavbarIsOpen(false)
          }}>
            <div className='header-detail-wrapper' >
              <div>LogIn</div>
              <div className={`detail-tab-icon ${loginTabIsOpen?"open":""}`}>{loginTabIsOpen?'-':'+'}</div>
            </div>
            <ul className={`detail-tab-wrap ${loginTabIsOpen?"open":""}`} onClick={(e)=>{e.stopPropagation()}}>
              <li onClick={()=>{
                if(user){
                  logout();
                  navigate('/');
                  setNavbarIsOpen(false);
                  setLoginTabIsOpen(false);
                } else{
                  navigate('/login');
                  setNavbarIsOpen(false);
                  setLoginTabIsOpen(false);
                }}}>{user?'Logout':'Login'}</li>
              <li>Register</li>
              <li onClick={()=>{navigate('/mypage'); setNavbarIsOpen(false); setLoginTabIsOpen(false)}}>My page</li>
            </ul>
            
          </li>
        </ul>
        
      </div> 
    </div>
  )
}

export default Header

// 외부클릭감지 로직 구현시 stopPropagation 이거 안써줬을때 햄버거바 눌러도 아예 navBar가 내려오질 않았음.
// 버블링 현상때문! stopPropagation 써서 막아줌.