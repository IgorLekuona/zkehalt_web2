import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

const ImageCarousel = (imgSources) => {

    const [imgArray, setImgArray] = useState(imgSources.imgSources);

    return (
        <div style={{ display: "block", width: "100%", padding: 0 }}>
            <Carousel>
                {imgArray?.map((element, index) => {
                    console.log(element);
                    return(
                        <Carousel.Item key={`car-item-${index}`} interval={1500}> 
                            <img 
                                className="d-block car-img"
                                src={require(`../assets/${element}`)}
                                alt="Image One"
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel> 
        </div>
    );
}

export default ImageCarousel;