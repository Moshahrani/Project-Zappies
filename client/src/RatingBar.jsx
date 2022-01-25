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
        ratings[i] = String(Math.round(100 * (ratings[i] / totalRatings))) + '%';
    }
    
    return (

        <div className="bar-ratings">
            Ratings
            <div className="ratings-graph ratings-graph-horizontal ratings-graph-one">
                <div className="ratings-one" >
                    <span class="rating">5</span>
                    <div class="ratings" numOfReviews={ratings[5]} style={{ width: ratings[5] }}></div>
                </div>
                <div className="ratings-two" >
                    <span class="rating">4</span>
                    <div class="ratings" numOfReviews={ratings[4]} style={{ width: ratings[4] }}></div>
                </div>
                <div className="ratings-three" >
                    <span class="rating">3</span>
                    <div class="ratings" numOfReviews={ratings[3]} style={{ width: ratings[3] }}></div>
                </div>
                <div className="ratings-four" >
                    <span class="rating">2</span>
                    <div class="ratings" numOfReviews={ratings[2]} style={{ width: ratings[2] }}></div>
                </div>
                <div className="ratings-four" >
                    <span class="rating">1</span>
                    <div class="ratings" numOfReviews={ratings[1]} style={{ width: ratings[1] }}></div>
                </div>
            </div>
        </div>

    );
}

export default RatingBar;

//style={{ width: ratings[5] }}