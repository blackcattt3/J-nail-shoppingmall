import React, {useContext} from 'react'
import './AllProductPage.css'
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductContext } from '../contexts/ProductContext';

const AllProductPage = () => {
  const {productList} = useContext(ProductContext)
  console.log(productList)

  return (
    <div className='all-product-wrapper'>
      <h1>All products</h1>
      <div className='product-wrapper'>
        {productList.map((product)=>(
          <ProductCard product={product}/>
        ))}
      </div>
      
    </div>
  )
}

export default AllProductPage
