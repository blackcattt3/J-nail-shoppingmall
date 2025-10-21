import React from 'react'
import './HomePage.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';

const HomePage = ({productList}) => {

  return (
    <div className='homepage'>
      <h1>HomePage</h1>
      <img className='product-img' src={productList?.[0]?.img}/>
        <Carousel>
            <Carousel.Item interval={3000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage/>
                </div>
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage/>
                </div>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item pause='hover'>
                <div className="carousel-item-wrapper">
                    <ExampleCarouselImage/>
                </div>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    <div className='homepage-line'></div>
    </div>
  )
}

export default HomePage
