import React, {useContext} from 'react'
import './AllProductPage.css'
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductContext } from '../contexts/ProductContext';

const AllProductPage = () => {
  const {productList} = useContext(ProductContext)
  console.log(productList)
  const isLoading = !productList || productList.length === 0;
  const SKELETON_COUNT = 12;

  return (
    <div className='all-product-wrapper'>
      <h1>All products</h1>

      <div className='product-wrapper'>
        {isLoading ? Array.from({length: SKELETON_COUNT}).map((_,i)=>(
          <div key={i} className='product-skeleton'/>
        )) : productList.map((product)=>(
              <ProductCard key={product.id} product={product}/>
            ))
      }
      </div>
      
    </div>
  )
}

export default AllProductPage
