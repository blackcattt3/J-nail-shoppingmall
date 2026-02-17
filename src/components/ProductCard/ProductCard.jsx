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
      <div className='product-thumb-wrap'>
        <img
          className='product-card-img'
          src={img}
          alt={name || "product name"}
          loading="lazy"
          decoding="async"/>
      </div>

      <ul className="product-card-info">
        <li>{name}</li>
        <li>{price}</li>
      </ul>
        
    </div>
  )
}

export default ProductCard
