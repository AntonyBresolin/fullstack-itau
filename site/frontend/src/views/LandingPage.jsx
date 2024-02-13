import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import HeaderLp from '../components/Header/HeaderLp';
import CopyFooter from '../components/Footer/CopyFooter';
import AboutUs from '../components/About/AboutUs';
import Services from '../components/Service/Service';
import Participation from '../components/Participation/Participation';

const LandingPage = () => {
  return (
    <>
      <HeaderLp />
      <Carousel />
      <Services />
      <AboutUs />
      <Participation />
      <CopyFooter />
    </>
  );
};

export default LandingPage;
