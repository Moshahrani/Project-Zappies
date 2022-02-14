import React from 'react';
import ReactDom, { flushSync } from 'react-dom';
import ProductDetail from './ProductDetail.jsx'
import './PhotoGallery.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImageMagnifier from './ImageMagnifier.jsx';

class PhotoGallery extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showPopup: false
        };
        this.outsideImage = this.outsideImage.bind(this);
        this.showExpanded = this.showExpanded.bind(this);
        // this.outside = React.createRef();
        // this.outsideClick = this.outsideClick.bind(this);

    }
    componentDidMount() {
        document.addEventListener('mousedown', this.outsideClick);
    }
    
    // outsideClick = (event) => {
    //     console.log(event)
    //     if (this.outside && !this.outside.current.contains(event.target)) {
    //         console.log('clicked outside')
    //         this.setState({
    //             showPopup: false
    //         })
    //     }
    // }


    outsideImage = (event) => {
        console.log(event.target)
        if(event.target.className === "expandedCarousel")
        this.setState({
            showPopup: false
        })

    }

    showExpanded(event) {
        event.preventDefault();
        console.log(event.target.alt)
        console.log(event.target)
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

        if (expandView) {
            return (
                <div className="expandedCarousel" onClick={this.outsideImage}>
                    <div
                        className="expandedCarouselInner"
                        style={{ backgroundImage: `url(${this.props.imageList[this.props.firstIndex]})` }}
                    >
                        <div className="left" >
                            <ArrowBackIosIcon onClick={this.props.leftArrow} />
                        </div>
                        <div className="center" onClick={this.showExpanded}>

                        </div>
                        <div className="right" >
                            <ArrowForwardIosIcon onClick={this.props.rightArrow} />
                        </div>
                    </div>
                </div>

            )
        } else {

            return (
                <div className="carousel" ref={this.outside}>
                    <div
                        className="carouselInner"

                    >
                        <div className="left" >
                            <ArrowBackIosIcon onClick={this.props.leftArrow} />
                        </div>
                        <div className="center" onClick={this.showExpanded} style={{ backgroundImage: `url(${this.props.imageList[this.props.firstIndex]})` }} >
                            <ImageMagnifier image={`${this.props.imageList[this.props.firstIndex]}`} />
                        </div>
                        <div className="right" >
                            <ArrowForwardIosIcon onClick={this.props.rightArrow} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default PhotoGallery;

