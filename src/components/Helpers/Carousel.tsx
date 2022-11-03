import React from 'react'
import Carousel from 'better-react-carousel'

type Props = {}



const CarouselComp = () => {
  return (
    <div style={{top:"17rem",width:"80%",height:"90%",left:"-9rem"}}>
    <Carousel cols={1} rows={1} gap={10} loop showDots={true} autoplay={1000}>
      <Carousel.Item>
        <img width="100%" src="https://img.freepik.com/premium-photo/modern-korean-girl-shopping-holding-store-bag-talking-mobile-phone-smiling-standing-white-background_1258-102632.jpg?w=4000" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://img.freepik.com/premium-photo/stylish-asian-girl-shopper-wears-sunglasses-holding-shopping-bag-smartphone-going-discounts-stores-standing-white-background_1258-100753.jpg?w=4000" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://img.freepik.com/free-photo/image-stylish-asian-girl-shopper-holding-smartphone-shopping-bag-without-store-logo-wearing-medical-face-mask-from-covid19-white-background_1258-99219.jpg?w=4000&t=st=1667457498~exp=1667458098~hmac=027a1d0e2a0aa7dcd3c3a8eb668d7900157d71aead864761745b6ca5f015697b" />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselComp;