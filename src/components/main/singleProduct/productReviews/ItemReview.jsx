import React from 'react'

const ItemReview = ( { review }) => {
  return (
    <li>
      <p>{review.name}</p>
      <p>{review.review}</p>
    </li>
  )
}

export default ItemReview
