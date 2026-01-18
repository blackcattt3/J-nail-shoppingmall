import React, { useEffect, useState } from 'react'
import './ProductDetailPage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const ProductDetailPage = () => {
    const {id} = useParams()
    // console.log('상품id: ', id);
    const [product, setProduct] = useState(null)
    const [currentImg, setCurrentImg] = useState(0);    // 1,2,3
    const [qty, setQty] = useState(1)

    const getProductDetail = async()=>{
        // let response = await fetch('http://localhost:4000/products/${id}');
        // let data = await response.json();
        try{
            const response = await axios.get(`http://localhost:4000/products/${id}`)
            setProduct(response.data);
            console.log(response.data)
        } catch (error){
            console.log(error);
            setProduct(undefined)
        }
    }

    useEffect(()=>{
        getProductDetail()
    }, [id])

    const name = product?.name;
    const description = product?.description;
    const stock = product?.stock;
    const price = product?.price
    const totalPrice = (price*qty).toLocaleString();

    const handleDecrease = ()=>{
        setQty(prev=> Math.max(1, prev-1))
    }
    const handleIncrease = ()=>{
        setQty(prev=> Math.min(stock, prev+1))
    }
    const handleAddToCart = ()=>{
        toast.success('장바구니에 담겼습니다 🛒');
        console.log("cart")
    }

    if(product === null){

    }
    if(!product){
        return <div className='loading-screen'>
            <h2>상품이 존재하지 않습니다 😭</h2>
        </div>
    }

  return (
    <div className='detail-wrapper'>
        <div className='detail-container'>
            <img className='detail-img' src={product?.img[currentImg]}/>
            <div>
                {product.img.map((img, i)=>(
                    <img className={`detail-img-list ${i==currentImg?'current':''}`} src={img} onClick={()=>{setCurrentImg(i);}}/>
                ))}
            </div>
            <p style={{color:'#999999', fontSize:'14px', margin:'20px 0px 0px 0px'}}>{description}</p>
            <h5>{name}</h5>
            <div className='quantity-wrapper'>
                수량
                <div className='quantity'>
                    <div className={`qty-btn ${qty === 1? 'disabled':''}`} onClick={handleDecrease}>
                        <span className='qty-symbol'>-</span>
                    </div>
                    <div>{qty}</div>
                    <div className={`qty-btn ${qty === stock? 'disabled':''}`} onClick={handleIncrease}>
                        <span className='qty-symbol'>+</span>
                    </div>
                </div>
            </div>
            <div>total : ₩{totalPrice} ({qty}개)</div>
            <div className='order-btn-wrapper'>
                <div className='buy-btn'>Buy Now</div>
                <div className='cart-btn' onClick={handleAddToCart}>Add to cart</div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailPage
