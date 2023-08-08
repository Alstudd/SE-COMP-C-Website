import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { clubCoreMemberSliderSettings } from '../../data/clubCoreMemberSliderSettings'
import clubCoreMemberDetails from '../../data/clubCoreMemberDetails'

export default function ClubCoreMember() {
    return (
        <div className='relative'>
            <Swiper {...clubCoreMemberSliderSettings}>
                <SliderButtons />
                {
                    clubCoreMemberDetails.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="ss:w-[600px] xs:w-[400px] w-[350px] mt-10 mx-auto bg-[#26235C] p-5 text-blue-300 rounded-lg border-l-[25px] border-yellow-300 
                        flex items-center gap-3">
                                <img src={card.imgUrl}
                                    className="ss:w-[250px] w-[100px] h-[150px] ss:h-[250px] object-contain rounded-lg border-2 border-solid border-white bg-yellow-300" />
                                <div>
                                    <h3 className="p-2 xs:text-3xl text-2xl font-bold">
                                        {card.name}
                                    </h3>
                                    <p className="p-2 xs:text-[20px] text-[15px]">
                                        {card.position}
                                    </p>
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
        <div className='flex justify-center gap-[1rem] pt-4'>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded-[5px] bg-blue-100 cursor-pointer' onClick={() => swiper.slidePrev()}>❰</button>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded-[5px] bg-blue-100 cursor-pointer' onClick={() => swiper.slideNext()}>❱</button>
        </div>
    )
}
