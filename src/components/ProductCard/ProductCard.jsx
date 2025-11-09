import React from 'react'
import './ProductCard.css';

const ProductCard = ({product}) => {
  const img = product?.img;
  const price = product?.price;
  // console.log(img)
  return (
    <div className='product-card-wrapper'>
      <div>
        <img className='product-card-img' src={img}/>
        <div>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
