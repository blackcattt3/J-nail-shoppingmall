import React from 'react'

const ExampleCarouselImage = () => {
  return (
    <img className='product-img' src='../../public/productImg/apple1.jpeg'
    style={{
        width: "100%",
        height: "100%", // 부모 높이에 맞춤
        objectFit: "cover",
      }}/>
  )
}

export default ExampleCarouselImage
