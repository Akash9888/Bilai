import React from "react";
import Carousel from "../Carousel/Carousel";
// import HeroSection from "../HeroSection/HeroSection";
import Feauture from "../AtAGlance/Feauture";
// import Blog from "../Blog/Blog";
import SampleBlog from "../AtAGlance/SampleBlog";
import TestomonialSlide from "../AtAGlance/Testmonial/TestomonialSlide";

const Banner = () => {
    return (
        <div>
            <Carousel></Carousel>
            {/* <HeroSection /> */}
            <Feauture />
            <SampleBlog />
            <TestomonialSlide />
        </div>
    );
};

export default Banner;
