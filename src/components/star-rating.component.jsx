import { useCallback, useState } from "react";

import "./start-rating.styles.css";
import { hover } from "@testing-library/user-event/dist/hover";

const StartRating = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = useCallback((rating) => {
    setCurrentRating((prevRating) => {
      return prevRating === rating ? 0 : rating;
    });
  }, []);

  const handleHoverStart = () => {};

  return (
    <div className="star-rating-container">
      current rating: {currentRating}
      {Array.from({ length: 5 }, (_, idx) => {
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
