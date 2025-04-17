import React, { useState, useEffect } from 'react';
import { StarWrapper, Star } from './styles';

interface RatingProps {
  initialRating?: number;
  onRatingChange: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    setRating(initialRating); 
  }, [initialRating]);

  const handleStarClick = (rating: number) => {
    setRating(rating);
    onRatingChange(rating);
  };

  return (
    <StarWrapper>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
          onClick={() => handleStarClick(star)}
        >
          ★
        </Star>
      ))}
    </StarWrapper>
  );
};

export default Rating;
