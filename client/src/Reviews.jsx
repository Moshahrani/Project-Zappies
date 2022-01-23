import React from 'react';
import ReactDom from 'react-dom';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Reviews(props) {

    let reviewMostVotes = props.reviews.reviewWithMostVotes;
    let reviewLeastVotes = props.reviews.reviewWithLeastVotes;
    console.log(reviewLeastVotes);
    console.log(reviewMostVotes);


    return (
        <div className="reviews" >
            <div>
                Review With Most Votes
                <p>
                    {reviewMostVotes.summary}
                </p>
                <p>
                    Comfort Rating : {reviewMostVotes.comfortRating}
                </p>
                <p>
                    Overall Rating : {reviewMostVotes.overallRating}
                </p>
                <p> Sizing : {reviewMostVotes.shoeSize}
                </p> 
                <p>
                    Width : {reviewMostVotes.shoeWidth}
                </p>
                <div>
                    Upvotes : {reviewMostVotes.upVotes}
                </div>
                <div className="upvoteArrow" >
                    <ArrowUpwardIcon  />
                </div>
            </div>
            <div>
                Review with Least Votes
                <p>
                    {reviewLeastVotes.summary}
                </p>
                <p>
                    Comfort Rating : {reviewLeastVotes.comfortRating}
                </p>
                <p>
                    Overall Rating : {reviewMostVotes.overallRating}
                </p>
                <p> Sizing : {reviewLeastVotes.shoeSize}
                </p> 
                <p>
                    Width : {reviewLeastVotes.shoeWidth}
                </p>
                <div>
                    <p>
                        Upvotes : {reviewLeastVotes.upVotes}
                    </p>
                    <div className="upvoteArrow" >
                    <ArrowUpwardIcon  />
                </div>
                </div>
            </div>

        </div>
    );

}
export default Reviews;

