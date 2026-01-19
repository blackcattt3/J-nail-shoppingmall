import React, {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CART_KEY = 'cartItems';

const OrderPage = () => {

    const {state} = useLocation();
    const navigate = useNavigate();

    const items = state?.items || [];
    const total = items.reduce((sum, item)=>sum+item.price*item.qty, 0)

    useEffect(()=>{
        if(items.length > 0){
            localStorage.removeItem(CART_KEY);
        }
        
    }, [items.length]);

    if (items.length === 0) {
        return (
        <div>
            <h1>주문 정보가 없습니다.</h1>
            <button onClick={() => navigate('/products')}>상품 보러가기</button>
        </div>
        );
    }

  return (
    <div>
      <h1>order</h1>
      {items.map((item) => (
        <div key={item.id} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom:'20px'}}>
          <img src={item.img} width={60} />
          <div>
            <div>{item.name}</div>
            <div>{item.qty}개</div>
            <div>₩{(item.price * item.qty).toLocaleString()}</div>
          </div>
        </div>
      ))}
      <h3>총액: ₩{total.toLocaleString()}</h3>

      <button onClick={() => navigate('/products')}>쇼핑 계속하기</button>
    </div>
  )
}

export default OrderPage
