import React, { useState } from 'react';

const StarRating = ({ totalStars, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div>
      <div className='pharagraph' style={{maxWidth:"200px"}}>
        <h3>
        How would you rate our HR managers' attitudes?
        </h3>
      </div>
      <div className='ratingheart1'>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index + 1)}
          style={{
            cursor: 'pointer',
            color: index < rating ? 'gold' : 'gray',
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
    </div>
  );
};

// Example usage
const Rating = () => {
  const handleRatingChange = (newRating) => {
    console.log(`Selected rating: ${newRating}`);
    // You can handle the new rating value as needed, e.g., send it to a server.
  };

  return (
      
      <div>
       <StarRating totalStars={5} onRatingChange={handleRatingChange} />
     </div>

  );
};

export default Rating;
