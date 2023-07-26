import React from 'react'
import { FaGithub } from 'react-icons/fa';
import logo from "../../assets/logo.jpeg";
import Arrow from "../../assets/Home/Arrow.svg";
import CompC from "../../assets/Home/CompC.jpg";
import CompCBoys from "../../assets/Home/CompCBoys.png";
import '../../css/footer.css';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-start gap-10 py-5 px-18 md:flex-row md:gap-14 md:text-left xl:gap-40 md:py-20">
      <div className="py-4 pl-4 self-stretch flex flex-col items-start flex-[1_0_0] md:pl-32">
        <div className="py-4 flex flex-col items-start gap-4 md:py-0 pl-4">
          <div className="flex py-1 px-2 items-start gap-2.5 rounded-[2.3125rem] border-2 border-blue-500 bg-white">
            <p className="font-normal pl-2"><div className="homeLinks"><a href="/achievements">Achievements</a></div></p>
            <img src={Arrow} />
          </div>
          <h1 className="font-semibold text-4xl leading-[3rem] tracking-[-0.06rem] md:leading-[3.75rem] 2xl:leading-[4.5rem] 2xl:text-6xl md:text-5xl">Discover the Achievements of SE Comp-C Students</h1>
          <p className="text-slate-600 font-normal"><i>COMP-C</i> brings to you a platform where <i>Code Meets Creativity</i>. This website also provides the resources and opportunities needed for our academic growth.</p>
        </div>
        <div className="flex flex-row gap-4 py-1 pl-4 md:py-4">
          <button className="py-2.5 px-5 rounded-lg bg-[#FCFCFD] border border-[#D0D5DD]"><a href="https://www.github.com/Alstudd/SE-COMP-C-Website" target='_blank'><div className='flex gap-3'><div className='zoom-in'><figure className='pt-1'><FaGithub /></figure></div><div>Contribute</div></div></a></button>
          <button className="py-2.5 px-5 rounded-lg bg-blue-500 text-[#FCFCFD]"><a href="/contact">Contact Us</a></button>
        </div>
      </div>
      <div className='w-[20rem] h-[20rem] xs:w-[25rem] xs:h-[25rem] m-auto md:ml-0 md:mb-0 md:mt-0 md:mr-40 sm:w-[30rem] sm:h-[30rem] overflow-hidden rounded-[5rem] border-solid border-[8px] border-blue-500'>
        <div className='zoom-in'>
          <figure><img className='w-full h-full' src={logo} alt="" /></figure>
        </div>
      </div>
      {/* <img class="mr-10 lg:h-[30rem] lg:w-[36rem] 2xl:h-[30rem] 2xl:w-[36rem] md:h-[30rem] md:w-[28rem]" src={CompC} alt="Main-img" /> */}
    </div>
  )
}
