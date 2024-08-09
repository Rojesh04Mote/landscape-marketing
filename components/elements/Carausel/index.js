import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '../Typography';

const ImageCarousel = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index}`} style={{ borderRadius: 8, width: '100%', height: 100 }} />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;
