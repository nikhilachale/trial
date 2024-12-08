// src/components/ReviewForm.jsx

import React, { useState } from "react";

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && review && rating > 0) {
      onSubmit({ name, review, rating });
      setName("");
      setReview("");
      setRating(0);
    }
  };

  return (
    <div className="bg-blue-950 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300">Your Name:</label>
          <input
            type="text"
            id="name"
            className="w-full text-black p-2 mt-2 rounded-lg"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-300">Your Review:</label>
          <textarea
            id="review"
            className="w-full text-black p-2 mt-2 rounded-lg"
            placeholder="Enter your review"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Rating:</label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-${star <= rating ? "yellow" : "gray"}-400`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-blue-600 px-4 py-2 text-white rounded-lg">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;