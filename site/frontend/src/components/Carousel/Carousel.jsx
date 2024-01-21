import React from 'react';
import Slider from 'react-slick';
import Hero01 from './Slider/Hero1';
import NextArrow from './Arrows/NextArrow';
import PrevArrow from './Arrows/PrevArrow';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots",
        autoplay: true,
        autoplaySpeed: 3000,
        swapeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div>
                <ul style={{ marginBottom: "40px" }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <div>
            <Slider {...settings}>
                <Hero01 />
            </Slider>
        </div>
    );
};

export default Carousel;