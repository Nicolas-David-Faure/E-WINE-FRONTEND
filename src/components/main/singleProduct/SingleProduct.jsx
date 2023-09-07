import React from 'react'
//styles
import './singleProduct.scss'
//components
import ProductReview from './productReviews/ProductReview'
import ProductView from './productView/ProductView'

const fakeData = {
  id: 1,
  title: "Vino Tinto",
  description: "Un vino tinto delicioso.",
  price: "$20.00",
  imageUrl:
    "https://www.gustoargentino.com/cdn/shop/products/estancia-mendoza-vino-tinto-merlot-malbec-1.jpg?v=1598603578&width=840",
}

const SingleProduct = ( {  wine = fakeData} ) => {

  return (
    <article className='singleProduct__main'>
        <ProductView wine={ wine } />
        <ProductReview />
    </article>
  )
}

export default SingleProduct
