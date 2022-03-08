import React from 'react';
import ReactDom from 'react-dom';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Reviews(props) {

    let reviewMostVotes = props.reviews.reviewWithMostVotes;
    let reviewLeastVotes = props.reviews.reviewWithLeastVotes;

    return (

        <div className="reviews" >
            <div className="positiveReview">
                <p id="reviewTitle">Top Positive Review</p>
                <p className="reviewSummary">
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
                    <ArrowUpwardIcon onClick={props.mostUpVote} style={{ opacity: .75, fontSize: "40px", paddingTop: "20px" }}/>
                </div>
            </div>
            <div className="reviewDivider" ></div>
            <div className="criticalReview">
                <p id="reviewTitle">Top Critical Review</p>
                <p className="reviewSummary">
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
                        <ArrowUpwardIcon onClick={props.leastUpVote} style={{ opacity: .75, fontSize: "40px", paddingTop: "5px"  }}/>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default Reviews;

