// src/components/ReviewsPage.jsx

import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewList";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="bg-blue-950 min-h-screen p-6">
      <h1 className="text-white text-4xl font-semibold mb-8">TheCabBro Reviews</h1>
      <ReviewForm onSubmit={handleReviewSubmit} />
      <ReviewsList reviews={reviews} />
    </div>
  );
};

export default ReviewsPage;