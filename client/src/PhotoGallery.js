import React from 'react';
import './PhotoGallery.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ImageMagnifier from './ImageMagnifier.js';


class PhotoGallery extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showPopup: false
        };
        this.outsideImage = this.outsideImage.bind(this);
        this.showExpanded = this.showExpanded.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.outsideClick);
    }

    outsideImage = (event) => {
        if (event.target.className === "expandedCarousel")
            this.setState({
                showPopup: false
            })
    }
    // Renders Expanded Image View
    showExpanded(event) {
        event.preventDefault();
        if ((event.target.alt === "img") || (event.target.className === "center")) {
            this.setState({
                showPopup: !this.state.showPopup
            });
        }

        else if ((event.target.className !== "left") || (event.target.className !== "right")) {
            this.setState({
                showPopup: false
            });
        }
    }

    render() {
        
        const expandView = this.state.showPopup;

        // expanded Product Image Carousel/View
        if (expandView) {
            return (
                <div className="expandedCarousel" onClick={this.outsideImage}>
                    <div
                        className="expandedCarouselInner"
                        style={{ backgroundImage: `url(${this.props.imageList[this.props.firstIndex]})` }}
                    >
                        <div className="left" >
                            <ArrowCircleLeftOutlinedIcon onClick={this.props.leftArrow} style={{ fontSize: 60, color: "black", cursor: 'pointer' }} />
                        </div>
                        <div className="center" onClick={this.showExpanded}>

                        </div>
                        <div className="right" >
                            <ArrowCircleRightOutlinedIcon onClick={this.props.rightArrow} style={{ fontSize: 60, color: "black", cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
            )
        } else {
            // normal product image carousel/view
            return (
                <div className="carousel" ref={this.outside}>
                    <div
                        className="carouselInner"

                    >
                        <div className="left" >
                            <ArrowBackIosIcon onClick={this.props.leftArrow} style={{ cursor: 'pointer' }}/>
                        </div>
                        <div className="center" onClick={this.showExpanded} style={{ backgroundImage: `url(${this.props.imageList[this.props.firstIndex]})` }} >
                            <ImageMagnifier image={`${this.props.imageList[this.props.firstIndex]}`} />
                        </div>
                        <div className="right" >
                            <ArrowForwardIosIcon onClick={this.props.rightArrow} style={{ cursor: 'pointer' }}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default PhotoGallery;


// Outside click method that might be implemented later

// this.outside = React.createRef();
        // this.outsideClick = this.outsideClick.bind(this);


    // outsideClick = (event) => {
    //     console.log(event)
    //     if (this.outside && !this.outside.current.contains(event.target)) {
    //         console.log('clicked outside')
    //         this.setState({
    //             showPopup: false
    //         })
    //     }
    // }