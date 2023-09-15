import React from 'react'
//styles
import './productReview.scss'
import ItemReview from './ItemReview'
//components
const reviewsArr = [
  {id:1,name:'Maria Florencia',text:'Este vino transporta tus sentidos a las profundidades del cosmos. Con un bouquet celestial de frutas rojas maduras y un toque de vainilla cósmica, el Vino Escarlata Estelar es una experiencia intergaláctica en cada sorbo. Perfecto para acompañar una cena bajo las estrellas.'},
  {id:2,name:'Ivan',text:'La Viña Nebulosa Delirante ofrece un viaje sensorial único. Sus notas de melocotón maduro y canela te envuelven en un remolino de sabores. Cada copa es como un paseo por una nebulosa distante, dejando una impresión duradera en tu paladar.'},
  {id:3,name:'Marcos',text:'Este vino es tan misterioso como la luz de la luna en una noche despejada. Con su aroma a ciruelas negras y sabor a chocolate negro, el Elixir de Luna Azul es la elección perfecta para aquellos que buscan una experiencia nocturna única.'},
  {id:4,name:'Nicolás',text:'Si alguna vez te has preguntado cómo sería beber una carcajada, este vino te acerca a esa experiencia. Con sus notas frescas de fresas y un toque de euforia cítrica, el Río de Risas Rosadas es como un día soleado en una copa.'},
]
const ProductReview = () => {
  return (
    <section className='productReview__main'>
      <h2 >Reviews</h2>
      <ul>
        {reviewsArr.map(review=><ItemReview key={review.id} review={review}/>)}
      </ul>
    </section>
  )
}

export default ProductReview
