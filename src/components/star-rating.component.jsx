import { useCallback, useEffect, useState } from "react";

import "./start-rating.styles.css";

const StartRating = ({ maxRating = 5, onRatingChange }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = useCallback((rating) => {
    setCurrentRating((prevRating) => {
      return prevRating === rating ? 0 : rating;
    });
  }, []);

  useEffect(() => {
    onRatingChange(currentRating);
  }, [currentRating, onRatingChange]);

  return (
    <div className="star-rating-container">
      {Array.from({ length: maxRating }, (_, idx) => {
        const ratingValue = idx + 1;
        return (
          <p
            key={idx}
            className={`star-rating ${
              ratingValue <= (hoverRating || currentRating) ? "active" : ""
            }`}
            onClick={() => handleStarClick(ratingValue)}
            onMouseEnter={() => setHoverRating(ratingValue)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {ratingValue}
          </p>
        );
      })}
    </div>
  );
};

export default StartRating;
