import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Carousel from '../components/Home/Carousel';
import Counts from '../components/Home/Counts';
import VisitCount from '../components/Home/VisitCount';
import OurServices from '../components/Home/OurServices';
import CompC from "../assets/Home/CompC.jpg";
import CompCGirls from "../assets/Home/CompCGirls.jpg";
import CompCBoys from "../assets/Home/CompCBoys.png";
import groupPic from "../assets/Home/groupPic.jpg";
import purvaKhushi from "../assets/Home/purvaKhushi.jpg";
import APIday from "../assets/Home/APIday.jpeg";
import MulticonPythonFirst from "../assets/Home/MulticonPythonFirst.jpeg";
import { FaSmile, FaBook, FaBookReader, FaCode } from 'react-icons/fa';

export default function Home() {
  const slides = [
    { image: CompC},
    { image: CompCGirls},
    { image: CompCBoys},
    { image: groupPic},
    { image: purvaKhushi},
    { image: APIday}
  ];
  const containerStyles = {
    // width: '500px',
    // height: '280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '100px'
  };
  const countCards =  [
    { image: <FaBook className='m-auto w-10 h-10 text-blue-500' />, number: 6, title: "Sem-1 10 pointers"},
    { image: <FaCode className='m-auto w-10 h-10 text-blue-500' />, number: 7, title: "Open Source Contributors"},
    { image: <FaBookReader className='m-auto w-10 h-10 text-blue-500' />, number: 2, title: "Sem-2 10 pointers"},
    { image: <FaSmile className='m-auto w-10 h-10 text-blue-500' />, number: 63, title: "COMP-C Students"}
  ]
  return (
    <div>
      <HeroSection />
      <div className='w-[350px] h-[190px] xs:w-[450px] xs:h-[250px] sm:w-[500px] sm:h-[280px] lg:w-[1210px] md:h-[620px] md:w-[1020px] mt-5' style={containerStyles}>
        <Carousel slides={slides} />
      </div>
      <OurServices />
      <div className='justify-center flex flex-wrap gap-10 pb-10 mt-10'>
        {countCards.map((card, i) => {
          return <Counts 
          key={i}
          image={card.image}
          number={card.number}
          title={card.title}
          />;
        })}
        {/* <VisitCount /> */}
      </div>
    </div>
  );
};
