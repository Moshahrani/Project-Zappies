import React from 'react';
import ReactDom from 'react-dom';
import ProductDetail from './ProductDetail.jsx'
import './PhotoGallery.css';

class PhotoGallery extends React.Component {
    constructor(props) {
        super();

        this.state = {
            imageList: [],
            currentItemPhotos: [],
            currentIndex: 0
        };
    }

    

    // rightArrowClick = (event) => {

    // }

    // leftArrowClick = (event) => {

    // }


    render() {
        let images = [];
        let firstIndex = 0;
        let lastIndex = null;
        if(this.props.imageList) {
          images = [...this.props.imageList]
          lastIndex = this.props.imageList.length - 1;
        }
       console.log(images[this.state.currentIndex])
        let image = images[this.state.currentIndex]
        
        return (<div className="carousel">
            <div 
            className="carouselInner" 
            style={{ backgroundImage: `url(${image})` }}
            >
            </div>
            </div> 
        ) 
    }
}
export default PhotoGallery;


{/* <div 
            className="carouselInner">
                <img id="img" src={images[this.state.currentIndex]} ></img>
            </div>
            </div> */}