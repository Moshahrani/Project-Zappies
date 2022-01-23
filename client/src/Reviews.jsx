import React from 'react';
import ReactDom from 'react-dom';

function Reviews(props) {

    let reviewMostVotes = props.reviews.reviewWithMostVotes;
    let reviewLeastVotes = props.reviews.reviewWithLeastVotes;
    console.log(props.reviews)
    console.log(reviewMostVotes);


    return (
        <div>
            <div>
                Review With Most Votes
                <p>
                    {reviewMostVotes.summary}
                    Upvotes : {reviewMostVotes.upVotes}
                </p>
            </div>
            <div>
                Review with Least Votes
                <p>
                    {reviewLeastVotes.summary}
                </p>
                <p>
                    Upvotes : {reviewLeastVotes.upVotes}
                </p>
            </div>

        </div>
    );

}
export default Reviews;

