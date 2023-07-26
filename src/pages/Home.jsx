import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Carousel from '../components/Home/Carousel';
import CompC from "../assets/Home/CompC.jpg";
import CompCBoys from "../assets/Home/CompCBoys.png";

export default function Home() {
  const slides = [
    { image: CompC, title: "Hotel" },
    { image: CompCBoys, title: "Beach" },
    { image: CompC, title: "Forest" },
    { image: CompCBoys, title: "City" },
    { image: CompC, title: "India" }
  ];
  const containerStyles = {
    // width: '500px',
    // height: '280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '100px'
  };
  return (
    <div>
      <HeroSection />
      <div className='w-[350px] h-[190px] xs:w-[450px] xs:h-[250px] sm:w-[500px] sm:h-[280px] lg:w-[1210px] md:h-[620px] md:w-[1020px]' style={containerStyles}>
        <Carousel slides={slides} />
      </div>
    </div>
  );
};
