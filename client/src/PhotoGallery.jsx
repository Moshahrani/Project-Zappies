import React from 'react';
import ReactDom from 'react-dom';
import ProductDetail from './ProductDetail.jsx'

class PhotoGallery extends React.Component {
    constructor(props) {
        super();

        this.state = {
            imageList: [],
            currentItemPhotos: [],
            currentIndex: 0
        };
    }

    
    render() {
        let images = [];
        if(this.props.imageList) {
          images = [...this.props.imageList]
        }

        
        return ( <div className="currentImage">
                <img id="img" src={images[this.state.currentIndex]} ></img>
    
            </div>
        ) 
    }
}
export default PhotoGallery;

