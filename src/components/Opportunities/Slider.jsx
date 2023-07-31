import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import opportunityDetails from '../../data/opportunityDetails'
import "../../css/animations.css"
import "../../css/contact.css"
import { sliderSettings } from '../../data/sliderSettings'

export default function Slider() {
  return (
    <div className='relative'>
        <Swiper {...sliderSettings}>
            <SliderButtons />
            {
                opportunityDetails.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className='opp-card hover:bg-blue-100 hover:scale-[1.025] hover:cursor-pointer flex flex-col items-start gap-[0.6rem] px-[1rem] pb-[1rem] pt-[1.3rem] max-w-max m-auto'>
                            <a href={card.link} target='_blank'><img className='w-full max-w-[15rem] rounded-[10%]' src={card.imgUrl} alt="cardImg" /></a>
                            <span className='font-bold text-[1.2rem]'>
                                <span>{card.date}</span>
                            </span>
                            <p className='text-[1.5rem] text-[#012970] font-bold'>{card.title}</p>
                            <span className='text-[0.9rem] w-[15rem] font-semibold'>{card.desc}</span>
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