import React from 'react'
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate = useNavigate();

  const img = product?.img[0];
  const price = product?.price;
  const name = product?.name;
  // console.log(img)

  return (
    <div className='product-card-wrapper' onClick={()=>navigate(`/products/${product.id}`)}>
      <div>
        <img className='product-card-img' src={img}/>
        <ul>
          <li>{name}</li>
          <li>{price}</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductCard
