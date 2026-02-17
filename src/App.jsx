import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import axios from 'axios'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './page/HomePage'
import LoginPage from './page/LoginPage';
import AboutPage from './page/AboutPage';
import NewArrivalPage from './page/NewArrivalPage';
import BestPage from './page/BestPage';
import LookBookPage from './page/LookBookPage';
import PrivateRoute from './route/PrivateRoute';
import MyPage from './page/MyPage';
import CartPage from './page/CartPage';
import AllProductPage from './page/AllProductPage';
import NoticePage from './page/NoticePage';
import { UserContext } from './contexts/UserContext'
import { ProductContext } from './contexts/ProductContext';
import ProductDetailPage from './page/ProductDetailPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './page/CheckoutPage';
import OrderPage from './page/OrderPage';
import productsData from "./data/products.json";
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [productList, setProductList] = useState([]);
  const [authenticate, setAuthenticate] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  // const getProductData = async ()=>{
  //   let url = new URL('http://localhost:4000/products');
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setProductList(data);
  //   console.log(data);
  // }

  // const getProductData = async ()=>{
  //   try{
  //     const response = await axios.get('http://localhost:4000/products');
  //     setProductList(response.data);
  //     // console.log(response.data);
  //   } catch (error){
  //     console.error("데이터 받기 실패", error)
  //   }
  // }

  const getProductData = async () => {
    try {
      setProductList(productsData);
    } catch (error) {
      console.error("데이터 받기 실패", error);
    }
  };


  useEffect(()=>{
    getProductData();
  },[])

  useEffect(()=>{
    const savedUser = localStorage.getItem('user');
    if(savedUser){
      setUser(JSON.parse(savedUser));
    }
  },[])

  const logout = ()=>{
    localStorage.removeItem('user');
    setUser(null);
    alert('로그아웃 되었습니다')
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      <ProductContext.Provider value={{productList}}>
        <div className='app-container'>
          <Header/>
          <div className='main'>
            {/* <button onClick={logout}>로그아웃</button> */}
            <ScrollToTop/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/notice' element={<NoticePage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/products' element={<AllProductPage/>}/>
              <Route path='/products/:id' element={<ProductDetailPage/>}/>
              <Route path='/checkout' element={<CheckoutPage/>}/>
              <Route path='/order' element={<OrderPage/>}/>
              <Route path='/newarrival' element={<NewArrivalPage/>}/>
              <Route path='/best' element={<BestPage/>}/>
              <Route path='/lookbook' element={<LookBookPage/>}/>
              <Route path='/mypage' element={<PrivateRoute>
                <MyPage/>
              </PrivateRoute>}/>
              <Route path='/cart' element={<CartPage/>}/>
            </Routes>
          </div>
          <Footer/>
          <ToastContainer/>
        </div>
      </ProductContext.Provider>
    </UserContext.Provider>
    
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
