import React, { useState } from 'react'
import { FaSmile } from 'react-icons/fa';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

export default function VisitCount() {
    const [counterOn, setCounterOn] = useState(false);
    var visitCount = localStorage.getItem("page_view");
    window.onload = function counter() {
        var counterContainer = document.querySelector("#website-counter");
        var resetButton = document.querySelector("#reset");

        if (visitCount) {
            visitCount = Number(visitCount) + 1;
            localStorage.setItem("page_view", visitCount);
        } else {
            visitCount = 1;
            localStorage.setItem("page_view", 1);
        }
        counterContainer.innerHTML = visitCount;

        resetButton.addEventListener("click", () => {
            visitCount = 1;
            localStorage.setItem("page_view", 1);
            counterContainer.innerHTML = visitCount;
        });
        console.log(visitCount);
    }
    return (
        <div>
            <button className='hidden' id="reset">Reset</button>
            <div className='w-[14.3rem] flex gap-5 bg-blue-100 rounded-2xl p-5'>
                <FaSmile className='m-auto w-10 h-10 text-blue-500' />
                <div className='flex flex-col'>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <h1 className='text-[2.5rem] text-[#012970] font-bold'>
                            {counterOn && <CountUp start={0} end={visitCount} duration={4} delay={0} />}
                        </h1>
                    </ScrollTrigger>
                    <p className='text-[0.9rem] font-semibold'>Real-time &nbsp;&nbsp;&nbsp;&nbsp; Website Visitors</p>
                </div>
            </div>
        </div>
    )
}
