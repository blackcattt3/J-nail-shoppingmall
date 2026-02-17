import React from 'react'

const ExampleCarouselImage = ({img, priority=false, alt=""}) => {
    if(!img) return null;

  return (
    <img
      className='product-img'
      src={img}
      alt={alt}
      loading={priority? "eager":"lazy"}
      decoding="async"
      fetchPriority={priority? "high":"auto"}
      style={{
          width: "100%",
          height: "100%", // 부모 높이에 맞춤
          objectFit: "cover",
      }}/>
  )
}

export default ExampleCarouselImage

// '../../public/productImg/apple1.jpeg'