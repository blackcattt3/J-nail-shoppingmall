import React from 'react'
import './ProductCard.css';

const ProductCard = ({productList}) => {
  const img = productList?.[0]?.img;
  console.log(img)
  return (
    <div className='product-card-wrapper'>
      <div>
        <img className='product-card-img' src={img}/>
      </div>
    </div>
  )
}

export default ProductCard
