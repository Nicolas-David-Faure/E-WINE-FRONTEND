import React from 'react'
//styles
import './scss/productView.scss'
import ProductFigure from './ProductFigure'
import ShoppingMenu from './ShoppingMenu'
//compoenets
const ProductView = ( { wine } ) => {

  return (
    <div className='productView__main'>
      <ProductFigure wine={ wine }/>
      <ShoppingMenu wine={ wine } />
    </div>
  )
}

export default ProductView
