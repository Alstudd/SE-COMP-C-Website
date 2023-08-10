import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import achievementDetails from '../../data/achievementDetails'
import "../../css/animations.css"
import "../../css/contact.css"
import { sliderSettings } from '../../data/achievementSliderSettings'
import AchievementPopup from './AchievementPopup'

export default function Recent() {
    
    return (
        <div className='relative'>
            <Swiper {...sliderSettings}>
                <SliderButtons />
                {
                    achievementDetails.map((card, i) => (
                        <SwiperSlide key={i}>
                            
                            <div className='opp-card hover:scale-[1.025] hover:cursor-pointer flex gap-[0.6rem] flex-col justify-center items-center px-[1rem] pb-[1rem] m-auto'>
                                <AchievementPopup names={card.names} imgUrl={card.imgUrl} />
                                <a href={card.link} target='_blank'><img className='w-[38rem] h-[25rem] rounded-[5%]' src={card.imgUrl} alt="cardImg" /></a>
                                <p className='text-[1.5rem] text-[#012970] font-bold'>{card.title}</p>
                                <span className='font-bold text-[1.2rem]'>
                                    <span>{card.desc}</span>
                                </span>
                                {/* <span className='text-[0.9rem] w-[15rem] font-semibold'>{card.names}</span> */}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flex justify-center gap-[1rem] pt-4'>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded-[5px] bg-blue-100 cursor-pointer' onClick={() => swiper.slidePrev()}>❰</button>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded-[5px] bg-blue-100 cursor-pointer' onClick={() => swiper.slideNext()}>❱</button>
        </div>
    )
}


// import "../../css/achievements.css"
{/* <div className="recent-achi mt-4 lg:w-[95%]  w-[100%] lg:h-[30rem] md:h-[20rem] h-[15rem] mx-auto bg-[url(/logo.jpeg)] bg-cover lg:p-5 text-white rounded-lg border-l-[25px] border-yellow-300 
                        hover:scale-[1.05] transition-all duration-500 hover:text-yellow-300 flex justify-between items-center gap-3">
            <div>
                <h3 className="lg:text-3xl p-2 sm:text-2xl text-xl">
                    Title
                </h3>
                <p className="p-2 lg:text-[20px] text-[10px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo porro incidunt maxime assumenda dolor, quae velit illum quis nulla reprehenderit totam dolore molestiae id expedita rerum vel rem esse sint.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, consectetur at error cumque dignissimos deserunt voluptatem in totam neque placeat dolores architecto vero magni, velit repellendus voluptatibus quaerat quod ab.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum ratione ea voluptate, porro vitae voluptates. Itaque excepturi similique odit fuga fugit optio id harum ad, minima rerum quaerat consequatur.
                </p>
            </div>
        </div> */}
