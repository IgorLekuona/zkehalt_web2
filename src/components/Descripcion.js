
import ImageCarousel from "../utils/ImageCarousel";
import "../App.css";
import { useState } from "react";
import VerticalImgDisplay from "../utils/VerticalImgDisplay";

const Descripcion = (width) => {

    const images = [
        {src: "../assets/Zarautz-Altxa-2023_1.jpg"},
        {src: "../assets/Zarautz-Altxa-2023_2.jpg"},
        {src: "../assets/Zarautz-Altxa-2023_3.jpg"},
        {src: "../assets/Zarautz-Altxa-2023_4.jpg"},
        {src: "../assets/Zarautz-Altxa-2023_1.jpg"},
        {src: "../assets/Zarautz-Altxa-2023_2.jpg"},
        {src: "../assets/Zarautz-Altxa-2023_3.jpg"},
        {src: "../assets/Zarautz-Altxa-2023_4.jpg"},
        //{src: "https://drive.google.com/uc?export=view&id=1qQxisns8W-8jMB0eeV-IWqePwXY3ez77"},
        //{src: "https://drive.google.com/file/d/1qQxisns8W-8jMB0eeV-IWqePwXY3ez77/view?usp=sharing"}
    ]

    return (
        <div className="desc-container">
            {width.width > 1024 ?
                <>
                    <div className="desc-texto">
                        <h2>ENTRENAMENTUA</h2>
                        <h5>ZKE HALTEROFILIA</h5>
                        <div >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non auctor enim, ac pharetra odio. Mauris tempor justo sed lobortis malesuada. Donec mattis urna neque, sit amet dictum sem ornare non. Donec augue lacus, elementum tincidunt rhoncus at, cursus quis nibh. Morbi nisl nisi, elementum ac faucibus nec, varius facilisis nisi. Sed blandit quis mauris nec pellentesque. Aenean lorem orci, hendrerit id mi quis, maximus pulvinar lacus. Nulla eu ultricies leo. Phasellus dapibus libero risus, ut finibus odio aliquet eu. Ut eu tempor mi, et consectetur lorem. Etiam lobortis lacus eget erat ultricies, vel pretium velit egestas. Pellentesque nec egestas quam. Quisque ornare sapien magna, vitae congue tortor auctor sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                                Fusce felis massa, luctus non blandit eget, laoreet sit amet sapien. Vestibulum ullamcorper pulvinar aliquam. Donec vitae aliquet odio, eget aliquam turpis. Nunc convallis a dui et vulputate. Proin non risus tellus. Aliquam blandit purus et vehicula aliquet. Donec nisi leo, congue vel imperdiet vel, tempor sit amet tortor. Donec nec euismod lorem. Donec rutrum, orci sed commodo hendrerit, leo orci aliquet lectus, sit amet commodo ex erat at libero. Pellentesque ac arcu porta ante faucibus hendrerit. Cras laoreet lacus ultrices nulla gravida ornare. Sed interdum eros cursus felis ultrices, id congue enim sodales.

                                Sed eu orci id metus accumsan consequat. Aenean quam quam, aliquam et iaculis ut, cursus quis quam. Curabitur euismod purus sed tortor tincidunt elementum. Etiam pellentesque feugiat libero a tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eget sollicitudin dolor, non varius lectus. Integer vel velit in odio rutrum molestie. Morbi erat enim, tempus id felis in, porttitor lacinia lorem. Nam cursus orci est.
                            </p>
                        </div>
                    </div>
                    <VerticalImgDisplay imgSources={images} />
                </>
            :
                <>
                    <h2>ENTRENAMENTUA</h2>
                    <h5>ZKE HALTEROFILIA</h5>
                    <div >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non auctor enim, ac pharetra odio. Mauris tempor justo sed lobortis malesuada. Donec mattis urna neque, sit amet dictum sem ornare non. Donec augue lacus, elementum tincidunt rhoncus at, cursus quis nibh. Morbi nisl nisi, elementum ac faucibus nec, varius facilisis nisi. Sed blandit quis mauris nec pellentesque. Aenean lorem orci, hendrerit id mi quis, maximus pulvinar lacus. Nulla eu ultricies leo. Phasellus dapibus libero risus, ut finibus odio aliquet eu. Ut eu tempor mi, et consectetur lorem. Etiam lobortis lacus eget erat ultricies, vel pretium velit egestas. Pellentesque nec egestas quam. Quisque ornare sapien magna, vitae congue tortor auctor sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                            Fusce felis massa, luctus non blandit eget, laoreet sit amet sapien. Vestibulum ullamcorper pulvinar aliquam. Donec vitae aliquet odio, eget aliquam turpis. Nunc convallis a dui et vulputate. Proin non risus tellus. Aliquam blandit purus et vehicula aliquet. Donec nisi leo, congue vel imperdiet vel, tempor sit amet tortor. Donec nec euismod lorem. Donec rutrum, orci sed commodo hendrerit, leo orci aliquet lectus, sit amet commodo ex erat at libero. Pellentesque ac arcu porta ante faucibus hendrerit. Cras laoreet lacus ultrices nulla gravida ornare. Sed interdum eros cursus felis ultrices, id congue enim sodales.

                            Sed eu orci id metus accumsan consequat. Aenean quam quam, aliquam et iaculis ut, cursus quis quam. Curabitur euismod purus sed tortor tincidunt elementum. Etiam pellentesque feugiat libero a tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eget sollicitudin dolor, non varius lectus. Integer vel velit in odio rutrum molestie. Morbi erat enim, tempus id felis in, porttitor lacinia lorem. Nam cursus orci est.
                        </p>
                    </div>
                    <ImageCarousel imgSources={images}/>
                </>
            }
        </div>
    );
}

export default Descripcion;