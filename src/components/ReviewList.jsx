import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter';
import reviewsData from '../reviews_data.json';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  const renderStars = (rating, outOf) => {
    const stars = [];
    for (let i = 1; i <= outOf; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Customer Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src={review.source.icon}
                alt={review.source.name}
                className="w-12 h-12 rounded-full border-2 border-gray-200 mr-4"
              />
              <div>
                <span className="text-gray-900 font-semibold text-lg">{review.reviewer_name}</span>
                <span className="text-gray-500 text-sm ml-2">{review.date}</span>
              </div>
            </div>
            <ReviewHighlighter review={review} />
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center">
                <span className="text-gray-900 font-semibold mr-2">Rating:</span>
                <div className="flex items-center">
                  {renderStars(review.rating_review_score, review.out_of)}
                  <span className="text-gray-600 ml-2 text-sm">
                    {review.rating_review_score} / {review.out_of}
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={review.source.icon}
                  alt={review.source.name}
                  className="w-10 h-10 rounded-full border-2 border-gray-200"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;