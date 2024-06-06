import React, { useState } from 'react';

const ReviewHighlighter = ({ review }) => {
  const [tooltip, setTooltip] = useState(null);

  const handleMouseEnter = (topic) => {
    setTooltip(topic);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'Positive':
        return 'bg-green-200';
      case 'Negative':
        return 'bg-red-200';
      case 'Mixed':
        return 'bg-yellow-200';
      case 'Neutral':
        return 'bg-blue-200';
      default:
        return '';
    }
  };

  return (
    <div className="relative">
      <p className="text-gray-700">
        {review.content.split(' ').map((word, i) => {
          const analytics = review.analytics.find((analytic) =>
            analytic.highlight_indices?.some(
              (indices) =>
                i >= indices[0] && i < indices[1] && indices[2] === analytic.sentiment
            )
          );

          if (analytics) {
            const { topic, sentiment } = analytics;
            const highlightIndices = analytics.highlight_indices || [];
            const startIndex = highlightIndices.find((indices) =>
              indices.some((index) => i >= index[0] && i < index[1])
            )?.[0];
            const endIndex = highlightIndices.find((indices) =>
              indices.some((index) => i >= index[0] && i < index[1])
            )?.[1];

            if (startIndex !== undefined && i === startIndex) {
              return (
                <span
                  key={i}
                  className={`${getSentimentColor(sentiment)} rounded px-1 mr-1`}
                  onMouseEnter={() => handleMouseEnter(topic)}
                  onMouseLeave={handleMouseLeave}
                >
                  {word}
                </span>
              );
            } else if (endIndex !== undefined && i > startIndex && i < endIndex) {
              return (
                <span key={i} className={`${getSentimentColor(sentiment)} rounded px-1 mr-1`}>
                  {word}
                </span>
              );
            } else if (endIndex !== undefined && i === endIndex) {
              return (
                <span
                  key={i}
                  className={`${getSentimentColor(sentiment)} rounded px-1 mr-1`}
                  onMouseEnter={() => handleMouseEnter(topic)}
                  onMouseLeave={handleMouseLeave}
                >
                  {word}
                </span>
              );
            }
          }

          return <span key={i}>{word} </span>;
        })}
      </p>
      {tooltip && (
        <div className="absolute bg-gray-700 text-white py-1 px-2 rounded mt-2">
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default ReviewHighlighter;