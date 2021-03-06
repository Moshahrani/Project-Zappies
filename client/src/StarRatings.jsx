import React from 'react';
import './styles.css';

function StarRatings(props) {
  let rating = Number(props.rating);
  let quarterPiece = 0;

  let percent = 0;
  while (rating >= 1) {
    rating = rating - 1;
    percent += 20;
  }
  // logic for Range of 0 - 5 stars 

  if (rating > .12 && rating <= .38) {
    quarterPiece += 5;
  } else if (rating > .38 && rating <= .62) {
    quarterPiece += 10;
  } else if (rating > .62 && rating <= .88) {
    quarterPiece += 15
  } else if (rating > .88) {
    quarterPiece += 20;
  }
  // total will be used to predict overall star rating score;

  const total = (quarterPiece + percent).toString();

  return (
    <div>
      <div className="stars" data-percent={total} />
    </div>
  );
}

export default StarRatings;

