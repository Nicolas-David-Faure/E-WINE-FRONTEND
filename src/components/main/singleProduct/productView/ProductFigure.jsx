import React from 'react'
//styles
import './scss/productFigure.scss'

const ProductFigure = ( { wine } ) => {
  return (
    <figure className='productFigure__main'>
      <div className='singleProduct__cont_img'>

        <img src={wine.imageUrl} alt={wine.description} />
      </div>

      <figcaption >

        <h2>{wine.title}</h2>

        <p>{wine.description}</p>

        <p>{wine.price}</p>
      </figcaption>
  </figure>
  )
}

export default ProductFigure
