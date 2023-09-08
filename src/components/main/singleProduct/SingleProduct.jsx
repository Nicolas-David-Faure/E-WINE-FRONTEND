import React, { useEffect, useState } from 'react'
//router
import { useLocation } from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './singleProduct.scss'
//components
import ProductReview from './productReviews/ProductReview'
import ProductView from './productView/ProductView'

const SingleProduct = ( ) => {

  const [ wine , setWine  ] = useState(null)
 
  const location = useLocation()
  let id =  parseInt(location.pathname.split('/').at(-1))
  
 
  useEffect(()=>{
    axios(`/api/wines/${id}`)
    .then(({ data : wine })=>{
      setWine(wine)
    })
    .catch(err=>{
      console.error(err)
    })
  },[])
 
  return (
    <article className='singleProduct__main'>

      {
        wine &&
        <>
          <ProductView wine={ wine } />
          <ProductReview />
        </>
      }
    </article>
  )
}

export default SingleProduct
