import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

function RatingBar(props) {

  
    return (

        <div className="container">
            <div className="bar">
                <div className="bar-inner" style={{width : '50%'}} />
                <div className="bar-inner" style={{width : '30%'}} />
                <div className="bar-inner" style={{width : '20%'}} />
            </div>
            
        </div>
    );
}

export default RatingBar;
