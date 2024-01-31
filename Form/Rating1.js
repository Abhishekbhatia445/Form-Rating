import React, { useState } from 'react';

  const HeartRating = ({ totalHearts, onRatingChange }) => {
    const [rating, setRating] = useState(0);

    const handleHeartClick = (selectedRating) => {
      setRating(selectedRating);
      onRatingChange(selectedRating);
    };

    return (
      <div>
        <div className='pharagraph' style={{maxWidth:"200px"}}>
        <h3>
          How would you rate your supervisor's attitude towards you and the rest of the team?
        </h3>
      </div>
      <div className='ratingheart'>
        {[...Array(totalHearts)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleHeartClick(index + 1)}
            style={{
              cursor: 'pointer',
              color: index < rating ? 'red' : 'gray',
            }}
          >
            &#10084;{/* Heart symbol */}
          </span>
        ))}
        </div>
      </div>
    );
  };

  // Example usage
  const MyComponent = () => {
    const handleRatingChange = (newRating) => {
      console.log(`Selected rating: ${newRating}`);
      // You can handle the new rating value as needed, e.g., send it to a server.
    };

    return (
      <div>
    
        <HeartRating totalHearts={5} onRatingChange={handleRatingChange} />
      </div>

  );
};


export default MyComponent;
