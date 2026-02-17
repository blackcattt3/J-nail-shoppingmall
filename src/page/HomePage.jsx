import React, {useContext, useEffect} from 'react'
import { ProductContext } from '../contexts/ProductContext';
import './HomePage.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import mainFontImg from '../assets/img/main_font.png'
import ProductCard from '../components/ProductCard/ProductCard';

const HomePage = () => {
    const { productList } = useContext(ProductContext);

    const product = productList?.[0]
    const firstImg = productList?.[0]?.img[0];
    const secondImg = productList?.[1]?.img[0];
    const thirdImg = productList?.[2]?.img[0];
    // console.log(product)
    // console.log('img', img)
    

  return (
    <div className='homepage'>
      {/* <h1>HomePage</h1>
      <img className='product-img' src={productList?.[0]?.img}/> */}
        <Carousel
            prevIcon={<span className="custom-prev">❮</span>}
            nextIcon={<span className="custom-next">❯</span>}>
            <Carousel.Item interval={3000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage img={firstImg} priority alt="Main banner"/>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage img={secondImg}/>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage img={thirdImg}/>
                </div>
            </Carousel.Item>
        </Carousel>
        <span className='section-divider'></span>
        <img className='product-img' src={mainFontImg}/>
        <ProductCard product={product}/>
    </div>
  )
}

export default HomePage
