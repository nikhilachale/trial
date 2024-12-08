// src/components/ReviewsList.jsx

import React from "react";

const ReviewsList = ({ reviews }) => {
  return (
    <div className="bg-blue-950 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-300">No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="mb-6">
              {/* Name */}
              <div className="flex items-center">
                <span className="text-gray-300">{review.name}</span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-${i < review.rating ? "yellow" : "gray"}-400`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Description */}
              <p className="text-gray-300 mt-2">{review.review}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsList;