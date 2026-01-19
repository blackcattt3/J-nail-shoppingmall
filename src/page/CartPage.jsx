import React, { useState, useEffect } from 'react'
import './CartPage.css'
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate()
  const CART_KEY = 'cartItems';

  const [cartItems, setCartItems] = useState([]);
  
  const getCartItems = ()=>{
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]')
  }
  useEffect(()=>{
    setCartItems(getCartItems())
  }, [])

  const updateQty = (id, newQty)=>{
    const updated = cartItems.map((item)=>{
      return item.id === id?{...item, qty:newQty}:item
    })
    setCartItems(updated);
    localStorage.setItem(CART_KEY, JSON.stringify(updated))
  }

  const removeItem = (id)=>{
    const updated = cartItems.filter((item)=>(
      item.id !== id
    ));
    setCartItems(updated);
    localStorage.setItem(CART_KEY, JSON.stringify(updated));
  }

  const total = cartItems.reduce((sum, item)=>sum+item.qty*item.price, 0)
  
  const goToCheckOut = ()=>{
    navigate('/checkout', {
      state: {
        items: cartItems
      }
    })
  }

  return (
    <div>
      <h1>cart page</h1>
      {cartItems.map((item)=>(
        <div key={item.id}>
          <img src={item.img} width={60} />
          <div>{item.name}</div>
          <div style={{display:'flex'}}>
            <div className='qty-btn' onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>
              <span className='qty-symbol'>-</span>
            </div>
            <div>{item.qty}개</div>
            <div className='qty-btn' onClick={() => updateQty(item.id, item.qty + 1)}>
              <span className='qty-symbol'>+</span>
            </div>
          </div>
          
          <div>₩{(item.price * item.qty).toLocaleString()}</div>
          <button onClick={()=>{removeItem(item.id)}}>delete</button>
        </div>
      ))}
      <h3>TOTAL : {total}원</h3>
      <button onClick={goToCheckOut}>주문하기</button>
    </div>
  )
}

export default CartPage
