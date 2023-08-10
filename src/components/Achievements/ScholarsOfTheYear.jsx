import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import ScholarsOfTheYearDetails from '../../data/ScholarsOfTheYearDetails'
import { sliderSettings } from '../../data/sliderSettings'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function ScholarsOfTheYear() {
    return (
        <div className='relative'>
            <Swiper {...sliderSettings}>
                <SliderButtons />
                {
                    ScholarsOfTheYearDetails.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="before:md: card mt-10 w-[250px] h-[250px] mx-auto relative rounded-[50%] hover:rounded-xl bg-yellow-300">
                                <img src={card.image} className="w-[100%] h-[100%] object-center object-contain rounded-[50%] z-[-5]" />
                                <div className="detail absolute bottom-0 text-center w-[100%] pb-4 duration-500">
                                    <h2 className="text-[1.2rem] font-semibold">{card.name}</h2>
                                    {/* <p className="text-[0.75rem] font-[100] text-[#333]">{card.type}</p> */}
                                </div>
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
        <div className='flex justify-center gap-[1rem] pt-10'>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded-[5px] bg-blue-100 cursor-pointer' onClick={() => swiper.slidePrev()}><FaArrowLeft /></button>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded-[5px] bg-blue-100 cursor-pointer' onClick={() => swiper.slideNext()}><FaArrowRight /></button>
        </div>
    )
}