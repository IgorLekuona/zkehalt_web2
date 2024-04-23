import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';

import "../App.css";

const VerticalImgDisplay = (imgSources) => {

    const [imgArray, setImgArray] = useState(imgSources.imgSources);
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    return(
        <div className="desc-vertical-img-container">
            {imgArray?.map((element, index) => {
                return (
                    // <div className="img-box" style={{background: `url(/assets/${element})`, backgroundSize: "cover", backgroundPosition: "center"}} key={`img-box-${index}`}> 
                    <div className="gallery-panel" key={`gallery-panel-${index}`}>
                        <img 
                            className="d-block car-img"
                            src={require(`../assets/${String(element.src).split("/")[2]}`)}
                            alt="Image One"
                            onClick={() => setLightboxIndex(index)}
                        />
                    </div>
                );
            })}
            <Lightbox
                plugins={[Fullscreen, Zoom]}
                open={lightboxIndex >= 0}
                close={() => setLightboxIndex(-1)}
                // index={lightboxIndex}
                slides={[{src: "/src/assets/Zarautz-Altxa-2023_1.jpg"}]}
            />
        </div>
    );
}

export default VerticalImgDisplay;