import React from 'react';
import ReactDom from 'react-dom';
import ProductDetail from './ProductDetail.jsx'
import './PhotoGallery.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class PhotoGallery extends React.Component {
    constructor(props) {
        super();

        this.state = {
            imageList: []

        };
    }


    // leftArrowClick = (event) => {
    //     if (this.state.currentIndex === 0) {
    //         this.setState({ 
    //             currentIndex: this.props.lastImageIndex
    //         })
    //     } else (
    //         this.setState({
    //             currentIndex: currentIndex - 1
    //         })
    //     )
    // }

    // rightArrowClick = (event) => {
    //     if (this.state.currentIndex === this.props.lastImageIndex) {
    //         this.setState({ 
    //             currentIndex: 0
    //         })
    //     } else (
    //         this.setState({
    //             currentIndex: currentIndex + 1
    //         })
    //     )
    // }



    render() {
        //     let images = [];
        //     //let firstIndex = 0;
        //     //let lastIndex = null;
        //     if(this.props.imageList) {
        //       images = [...this.props.imageList]
        //       //lastIndex = this.props.imageList.length - 1;
        //     }
        //    //console.log(images[this.state.currentIndex])
        //     //let image = images[this.state.currentIndex]
        //     //console.log(this.props.imageList)
        // let image = this.props.imageList[this.r]
        // console.log(this.props.imageList)
        return (<div className="carousel">
            <div
                className="carouselInner"
                style={{ backgroundImage: `url(${this.props.imageList[this.props.firstIndex]})` }}
            >
                <div className="left" >
                    <ArrowBackIosIcon onClick={this.props.leftArrow} />
                </div>
                <div className="center"></div>
                <div className="right" >
                    <ArrowForwardIosIcon onClick={this.props.rightArrow} />
                </div>
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