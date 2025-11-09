import React, {useContext} from 'react'
import { ProductContext } from '../contexts/ProductContext';
import './HomePage.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import mainFontImg from '../assets/img/main_font.png'
import ProductCard from '../components/ProductCard/ProductCard';

const HomePage = () => {
    const { productList } = useContext(ProductContext);

    const product = productList[0]
    const img = productList?.[0]?.img;
    // console.log(product)
    // console.log('img', img)
  return (
    <div className='homepage'>
      {/* <h1>HomePage</h1>
      <img className='product-img' src={productList?.[0]?.img}/> */}
        <Carousel
            prevIcon={<span className="custom-prev">❮</span>}
            nextIcon={<span className="custom-next">❯</span>}>
            <Carousel.Item interval={2000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage img={img}/>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage img={img}/>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage img={img}/>
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
