import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

function RatingBar(props) {

  let ratings = props.ratings;
  let totalRatings = 0;
 
  for (let i in ratings) {
      let num = Number(ratings[i]);
      ratings[i] = num;
      totalRatings += num;
  }

  for (let i in ratings) {
       ratings[i] = String(100 * (ratings[i] / totalRatings)) + '%';
  }
  console.log(ratings)
  
  let percent = '50%';

    return (

        <div className="container">
            Ratings
            <div className="bar">
                <div className="bar-inner" style={{width : ratings[5]}} />
                <div className="bar-inner" style={{width : ratings[4]}} />
                <div className="bar-inner" style={{width : ratings[3]}} />
                <div className="bar-inner" style={{width : ratings[2]}} />
                <div className="bar-inner" style={{width : ratings[1]}} />
            </div>
            
        </div>
    );
}

export default RatingBar;
