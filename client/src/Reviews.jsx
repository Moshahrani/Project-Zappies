import React from 'react';
import ReactDom from 'react-dom';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Reviews(props) {

    let reviewMostVotes = props.reviews.reviewWithMostVotes;
    let reviewLeastVotes = props.reviews.reviewWithLeastVotes;

    return (

        <div className="reviews" >
            <div className="mostVotes">
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
                    Upvotes : {props.mostVotes}
                </div>
                <div className="upvoteArrow" >
                    <ArrowUpwardIcon onClick={props.mostUpVote} />
                </div>
            </div>
            <div className="leastVotes">
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
                        Upvotes : {props.leastVotes}
                    </p>
                    <div className="upvoteArrow" >
                        <ArrowUpwardIcon onClick={props.leastUpVote} />
                    </div>
                </div>
            </div>

        </div>
    );

}
export default Reviews;

