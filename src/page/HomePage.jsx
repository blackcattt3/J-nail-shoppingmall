import React from 'react'
import './HomePage.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import mainFontImg from '../assets/img/main_font.png'

const HomePage = ({productList}) => {

  return (
    <div className='homepage'>
      {/* <h1>HomePage</h1>
      <img className='product-img' src={productList?.[0]?.img}/> */}
        <Carousel
            prevIcon={<span className="custom-prev">❮</span>}
            nextIcon={<span className="custom-next">❯</span>}>
            <Carousel.Item interval={2000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage/>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage/>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage/>
                </div>
            </Carousel.Item>
        </Carousel>
        <span className='section-divider'></span>
        <img className='product-img' src={mainFontImg}/>
    </div>
  )
}

export default HomePage
