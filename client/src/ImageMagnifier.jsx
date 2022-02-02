import React, { useState } from 'react';
 import ReactDom from 'react-dom';
 function ImageMagnifier(props) {
    let src = props.image;
    const width = '100%';
    const height = '100%';
    const magnifierHeight = 100;
    const magnifieWidth = 100;
    const zoomLevel = 1.75;
  
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    
    return (
      <div
        style={{
          position: "relative",
          height: height,
          width: width
        }}
      >
        <img
          src={src}
          style={{ height: height, width: width }}
          onClick={props.imageClick}
          onMouseEnter={(e) => {
            // updates image size and turns on magnifier
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            // updates cursor position
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();
  
            // calculates cursor position on the image
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            // closes magnifier
            setShowMagnifier(false);
          }}
          alt={"img"}
        />
  
        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",
  
            // blocks the mouse moving event of img
            pointerEvents: "none",
            // setting size of magnifier
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,
            // centers elemnt to pos of cursor
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifieWidth / 2}px`,
            opacity: "1",
            border: "3px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            // don't repeat background Image
            backgroundRepeat: "no-repeat",
  
            //calculates zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,
  
            //calculates position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
          }}
        ></div>
      </div>
    );
  }

  export default ImageMagnifier;