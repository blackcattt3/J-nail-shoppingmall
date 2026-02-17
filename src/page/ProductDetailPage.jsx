import React, { useEffect, useState, useContext } from 'react'
import './ProductDetailPage.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ProductContext} from '../contexts/ProductContext'

const ProductDetailPage = () => {

    useEffect(() => {
        console.log("✅ ProductDetailPage mounted");
        return () => console.log("❌ ProductDetailPage unmounted");
    }, []);

    const {productList} = useContext(ProductContext)
    const navigate = useNavigate();
    const {id} = useParams()
    // console.log('상품id: ', id);
    const [status, setStatus] = useState('loading')
    const [product, setProduct] = useState(null)
    const [currentImg, setCurrentImg] = useState(0);    // 1,2,3
    const [qty, setQty] = useState(1)
    // console.log(product, "product")

    // const getProductDetail = async()=>{
    //     // let response = await fetch('http://localhost:4000/products/${id}');
    //     // let data = await response.json();
    //     try{
    //         setStatus('loading');
    //         const response = await axios.get(`http://localhost:4000/products/${id}`)
    //         setProduct(response.data);
    //         setStatus('success')
    //         console.log(response.data)
    //     } catch (error){
    //         const status = error?.response?.status;
    //         console.log(error);
    //         if (status === 404)
    //             {setStatus('notFound')}
    //         else {setStatus('error')};
    //     }
    // }

    // useEffect(()=>{
    //     getProductDetail()
    // }, [id])

    useEffect(() => {
        setStatus('loading');

        // productList가 아직 준비 전이면 로딩 유지
        if (!productList || productList.length === 0) return;

        const found = productList.find((p) => String(p.id) === String(id));

        if (!found) {
            setStatus('notFound');
            setProduct(null);
            return;
        }

        setProduct(found);
        setStatus('success');
        setCurrentImg(0);
        setQty(1);
    }, [id, productList]);


    const name = product?.name;
    const description = product?.description;
    const stock = product?.stock;
    const price = product?.price
    const totalPrice = (price*qty).toLocaleString();
    const CART_KEY = 'cartItems';

    const handleDecrease = ()=>{
        setQty(prev=> Math.max(1, prev-1))
    }
    const handleIncrease = ()=>{
        setQty(prev=> Math.min(stock, prev+1))
    }
    
    
    const getCartItems = ()=>{
        return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    };
    const saveCartItems = (items)=>{
        localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
    const handleAddToCart = ()=>{
        const cartItems = getCartItems();
        const existingItem = cartItems.find((item)=>{
            return item.id === product.id
        })
        if (existingItem){
            const updatedCart = cartItems.map((item=>{
                return item.id === product.id? {...item, qty:item.qty+qty}
                : item
            }))
            saveCartItems(updatedCart);
            toast.info('수량이 추가되었습니다');
        } else{
            const newItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img[0],
                qty: qty
            };

            saveCartItems([...cartItems, newItem])
            toast.success('장바구니에 담겼습니다 🛒');
            console.log("cart")
        }
    }

    const handleBuyNow = ()=>{
        if(stock === 0){
            toast.error('‼️ 품절된 상품입니다')
            return;
        }
        navigate('/checkout', {
            state: {
                items: [
                    {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        img: product.img[0],
                        qty
                    }
                ]
            }
        })
        console.log('buy now')
    }


    // if (status === 'loading') {
    //     return <div className="loading-screen"><h2>상품 정보를 불러오는 중...</h2></div>;
    // }

    if (status === 'notFound') {
        return <div className="loading-screen"><h2>상품이 존재하지 않습니다 😭</h2></div>;
    }

    if (status === 'error') {
        return <div className="loading-screen"><h2>‼️ 서버 오류가 발생했습니다. 다시 시도해주세요 ‼️</h2></div>;
    }

    const isLoading = !product;
    const imgLength = product?.img?.length || 3;
    console.log(imgLength)

  return (
    <div className='detail-wrapper'>
        <div className='detail-container'>
            {status==='loading' ? <div className='product-detail-skeleton'></div>: <img className='detail-img' src={product?.img?.[currentImg]}/>}
            
            <div className='thumbs'>
                {status==='loading'? Array.from({ length: 2 }).map((_, i) => (
                        <div key={i} className="product-details-skeleton" />
                    ))
                : product?.img?.map((img, i)=>(
                    <img className={`detail-img-list ${i==currentImg?'current':''}`} src={img} onClick={()=>{setCurrentImg(i);}}/>
                ))}
                {/* {product?.img?.map((img, i)=>(
                    <img className={`detail-img-list ${i==currentImg?'current':''}`} src={img} onClick={()=>{setCurrentImg(i);}}/>
                ))} */}
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
                <div className='buy-btn' onClick={handleBuyNow}>Buy Now</div>
                <div className='cart-btn' onClick={handleAddToCart}>Add to cart</div>
            </div>
        </div>
    </div>
  )
}


export default ProductDetailPage
