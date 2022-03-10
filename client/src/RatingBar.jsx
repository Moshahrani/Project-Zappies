import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';


function RatingBar(props) {

    let ratings = props.ratings;

    let reviewCount = {}
    let totalRatings = 0;
    let numRatings = [];
    
    for (let i in ratings) {
        let num = Number(ratings[i]);
        ratings[i] = num;
        reviewCount[i] = num;
        totalRatings += num;
        numRatings.push(num)
    }
    

     
    for (let i in ratings) {
        ratings[i] = String(Math.round(100 * (ratings[i] / totalRatings)));
    }
    let number = props.ratings

    return (

        <div className="bar-ratings">
            <div className="ratings-graph ratings-graph-horizontal ratings-graph-one">
                < span className="wordRating">Ratings</span>
                <span className="numOfRatings"> Total Ratings</span>
                <div className="ratings-one" >
                    <span className="rating">5</span>
                    <span className="totalRatings">{props.ratings[5]}</span>
                    <div className="ratings" style={{ width: (ratings[5] + "%")}}></div>
                </div>
                <div className="ratings-two" >
                    <span className="rating">4</span>
                    <span className="totalRatings">{reviewCount[4]}</span>
                    <div className="ratings" style={{ width: (ratings[4] + "%")}}></div>
                </div>
                <div className="ratings-three" >
                    <span className="rating">3</span>
                    <span className="totalRatings">{reviewCount[3]}</span>
                    <div className="ratings" style={{ width: (ratings[3] + "%")}}></div>
                </div>
                <div className="ratings-four" >
                    <span className="rating">2</span>
                    <span className="totalRatings">{reviewCount[2]}</span>
                    <div className="ratings" style={{ width: (ratings[2] + "%")}}></div>
                </div>
                <div className="ratings-five" >
                    <span className="rating">1</span>
                    <span className="totalRatings">{reviewCount[1]}</span>
                    <div className="ratings" style={{ width: (ratings[1] + "%")}}></div>
                </div>
            </div>
        </div>

    );
}

export default RatingBar;


// class RatingBar extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             numRatings: {}
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             numRatings: this.props.ratings
//         })
//     }
//     render() {
    
    
//     let ratings = this.state.numRatings;
//     let reviewCount = {}
//     let totalRatings = 0;
//     let numRatings = [];

//     for (let i in ratings) {
//         let num = Number(ratings[i]);
//         ratings[i] = num;
//         reviewCount[i] = num;
//         totalRatings += num;
//         numRatings.push(num)
//     }

     
//     for (let i in ratings) {
//         ratings[i] = String(Math.round(100 * (ratings[i] / totalRatings))) + '%';
//     }
    
//     return (

//         <div className="bar-ratings">
//             <div className="ratings-graph ratings-graph-horizontal ratings-graph-one">
//                 < span className="wordRating">Ratings</span>
//                 <span className="numOfRatings"> Total Ratings</span>
//                 <div className="ratings-one" >
//                     <span className="rating">5</span>
//                     <span className="totalRatings">{this.state.numRatings[5]}</span>
//                     <div className="ratings" style={{ width: numRatings[5] }}></div>
//                 </div>
//                 <div className="ratings-two" >
//                     <span className="rating">4</span>
//                     <span className="totalRatings">{reviewCount[4]}</span>
//                     <div className="ratings" style={{ width: numRatings[4] }}></div>
//                 </div>
//                 <div className="ratings-three" >
//                     <span className="rating">3</span>
//                     <span className="totalRatings">{reviewCount[3]}</span>
//                     <div className="ratings" style={{ width: numRatings[3] }}></div>
//                 </div>
//                 <div className="ratings-four" >
//                     <span className="rating">2</span>
//                     <span className="totalRatings">{reviewCount[2]}</span>
//                     <div className="ratings" style={{ width: numRatings[2] }}></div>
//                 </div>
//                 <div className="ratings-five" >
//                     <span className="rating">1</span>
//                     <span className="totalRatings">{reviewCount[1]}</span>
//                     <div className="ratings" style={{ width: numRatings[1] }}></div>
//                 </div>
//             </div>
//         </div>

//     );
// }
// }

// export default RatingBar;