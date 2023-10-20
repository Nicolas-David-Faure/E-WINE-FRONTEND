import React, { useEffect, useState } from "react";
//styles
import "./productReview.scss";
import ItemReview from "./ItemReview";
import axios from "axios";
//components

const ProductReview = ({ id }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    axios(`/api/review/${id}`).then(({ data }) => {
     
      setReviews(data);
    });
  }, []);


  return (
    <section className="productReview__main">
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <ItemReview key={review.id_review} review={review} />
        ))}
      </ul>
    </section>
  );
};

export default ProductReview;
