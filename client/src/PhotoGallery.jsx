import React from 'react';
import ReactDom from 'react-dom';
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
        this.imageClick = this.imageClick.bind(this);
        this.showExpanded = this.showExpanded.bind(this);
        //this.closeExpanded = this.closeExpanded.bind(this);

    }
    
    imageClick =  (event) => {
        this.setState({
            showPopup: true
        })

    }

    showExpanded(event) {
        event.preventDefault();
        console.log(typeof event.target)
        console.log(event.target)
      
    
        this.setState({ showPopup: true }, () => {
          document.addEventListener('click', this.showExpanded);
        });
      }
    
    //   closeExpanded() {
    //     this.setState({ showPopup: false }, () => {
    //       document.removeEventListener('click', this.closeExpanded);
    //     });
    //   }



    render() {
        const expandView = this.state.showPopup;

        if (expandView) {
            return (
                <div className="expandedCarousel">
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
                <div className="carousel">
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

