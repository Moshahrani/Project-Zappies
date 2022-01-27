import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

function RatingBar(props) {

    let ratings = props.ratings;
    let reviewCount = {}
    let totalRatings = 0;

    for (let i in ratings) {
        let num = Number(ratings[i]);
        ratings[i] = num;
        reviewCount[i] = num;
        totalRatings += num;
    }


    for (let i in ratings) {
        ratings[i] = String(Math.round(100 * (ratings[i] / totalRatings))) + '%';
    }

    return (

        <div className="bar-ratings">
            Ratings      
            <div className="ratings-graph ratings-graph-horizontal ratings-graph-one">
                <span className="numOfRatings"> # of Ratings</span>
                <div className="ratings-one" >
                    <span className="rating">5</span>
                    <span className="totalRatings">{reviewCount[5]}</span>
                    <div className="ratings" style={{ width: ratings[5] }}></div>
                </div>
                <div className="ratings-two" >
                    <span className="rating">4</span>
                    <span className="totalRatings">{reviewCount[4]}</span>
                    <div className="ratings" style={{ width: ratings[4] }}></div>
                </div>
                <div className="ratings-three" >
                    <span className="rating">3</span>
                    <span className="totalRatings">{reviewCount[3]}</span>
                    <div className="ratings" style={{ width: ratings[3] }}></div>
                </div>
                <div className="ratings-four" >
                    <span className="rating">2</span>
                    <span className="totalRatings">{reviewCount[2]}</span>
                    <div className="ratings" style={{ width: ratings[2] }}></div>
                </div>
                <div className="ratings-five" >
                    <span className="rating">1</span>
                    <span className="totalRatings">{reviewCount[1]}</span>
                    <div className="ratings" style={{ width: ratings[1] }}></div>
                </div>
            </div>
        </div>

    );
}

export default RatingBar;

//style={{ width: ratings[5] }}