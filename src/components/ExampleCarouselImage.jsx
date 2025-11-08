import React from 'react'

const ExampleCarouselImage = ({img}) => {
  return (
    <img className='product-img' src={img}
    style={{
        width: "100%",
        height: "100%", // 부모 높이에 맞춤
        objectFit: "cover",
      }}/>
  )
}

export default ExampleCarouselImage

// '../../public/productImg/apple1.jpeg'