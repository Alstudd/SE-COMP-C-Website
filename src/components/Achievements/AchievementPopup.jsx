import React, { useState } from 'react'
import close from "../../assets/Navbar/close.svg";
import studentDetails from '../../data/studentDetails';

export default function AchievementPopup(props) {
    const [popup, setPopup] = useState(false);
    const handlePopupClick = () => {
        setPopup(!popup);
    }
    return (
        <div className='relative'>
            {
                popup &&
                <div className="z-20 ss:w-[38rem] ss:h-[25rem] w-[22rem] h-[15rem] bg-white absolute top-[9.5px] ss:left-[-304px] left-[-170px] rounded-t-[9%] rounded-b-[5%] border-b-[20px] border-b-[#012970]">
                    <div className='flex justify-between pt-3 pb-2 bg-[#012970] rounded-t-[1.4rem]'>
                        <img className='bg-white w-[50px] h-[50px] object-contain rounded-[50%] mt-1 ml-4' src={props.imgUrl} alt='profile' />
                        <h1 className='text-2xl text-white font-bold pt-4'>COMP-C Students</h1>
                        <div className="zoom-in">
                            <figure>
                                <img onClick={handlePopupClick} className='bg-white rounded-[50%] mr-4 cursor-pointer my-3' width={35} height={35} src={close} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <ul className='relative bg-white'>
                            {props.names.map((element, i) => {
                                return <li className='h-[54px] flex gap-4 items-center liAnimate hover:bg-blue-300 list-none p-[10px] w-full bg-white'>
                                    <span className="bg-[#012970] h-7 relative px-4 pt-1 text-white inline-block rounded-[30%] text-[12px] font-bold spanAnimate">
                                        {studentDetails.map(student => {
                                            if (student.name === element) {
                                                return <span className="flex justify-center">{student.rollNo}</span>
                                            }
                                        })}
                                    </span>
                                    {element}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            }
            <button onClick={handlePopupClick} className="absolute ss:top-[22px] ss:left-64 top-4 left-[125px] w-8 h-8 rounded-[50%] bg-white text-black font-bold text-[1rem] text-center hover:font-bold hover:scale-[1.1] transition-all duration-300">
                i
            </button>
        </div>
    )
}
