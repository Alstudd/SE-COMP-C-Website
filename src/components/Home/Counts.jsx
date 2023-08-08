import React, { useState } from 'react'
import '../../css/animations.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export default function Counts(props) {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className='w-[14.2rem] flex gap-5 bg-blue-100 rounded-2xl p-5'>
            {props.image}
            <div className='flex flex-col'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <h1 className='text-[2.5rem] text-[#012970] font-bold'>
                        {counterOn && <CountUp start={0} end={props.number} duration={4} delay={0} />}
                    </h1>
                </ScrollTrigger>
                <p className='text-[0.9rem] font-semibold'>{props.title}</p>
            </div>
        </div>
    )
}
