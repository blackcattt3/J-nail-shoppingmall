import React, {useContext} from 'react'
import './AllProductPage.css'
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductContext } from '../contexts/ProductContext';

const AllProductPage = () => {
  const {productList} = useContext(ProductContext)
  console.log(productList)

  return (
    <div>
      <h1>All products</h1>
      {productList.map((product)=>(
        <ProductCard product={product}/>
      ))}
    </div>
  )
}

export default AllProductPage
