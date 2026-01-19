import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CheckoutPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const items = state?.items || [];
    const total = items.reduce((sum, item)=>sum+item.price*item.qty, 0)
    
    if (items.length === 0){
        return <div>주문할 상품이 없습니다.</div>
    }
  
  
    return (
    <div>
      <h1>주문하기</h1>
      {items.map((item)=>(
        <div key={item.id} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <img src={item.img} width={60} />
          <div>
            <div>{item.name}</div>
            <div>{item.qty}개</div>
            <div>₩{(item.price * item.qty).toLocaleString()}</div>
          </div>
        </div>
      ))}
      <h3>총액: ₩{total.toLocaleString()}</h3>
      <button onClick={()=>{navigate('/order', {state:{items}})}}>주문 확정</button>
    </div>
  )
}

export default CheckoutPage
