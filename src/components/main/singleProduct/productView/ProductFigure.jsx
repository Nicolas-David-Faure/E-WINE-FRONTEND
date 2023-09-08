import React from 'react'
//styles
import './scss/productFigure.scss'

const ProductFigure = ( { wine } ) => {
  return (
    <figure className='productFigure__main'>
      <div className='singleProduct__cont_img'>
        <img src={ wine.image } alt={ wine.description } />
      </div>

      <figcaption >
        <h2>{ wine.name }</h2>
        <p>${ wine.price }.00</p>
        <p>{ wine.description }</p>
      </figcaption>
  </figure>
  )
}

export default ProductFigure
