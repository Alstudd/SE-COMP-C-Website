import React, { useState } from 'react'
import close from "../../assets/Navbar/close.svg";
import '../../css/animations.css'

export default function Card(props) {
    const [popup, setPopup] = useState(false);
    function handleMouseEnter() {
        document.querySelectorAll('.my-card')[props.id - 1].classList.add('profileHover');
    }
    function handleMouseLeave() {
        document.querySelectorAll('.my-card')[props.id - 1].classList.remove('profileHover');
    }

    const handlePopupClick = () => {
        setPopup(!popup);
    }

    return (
        <div>
            {/* Card Container  */}
            <div className="m-6 z-10 h-[28rem] w-[20rem] bg-white relative flex flex-col justify-center items-center rounded-[3.125rem]" data-sCard>
                {
                    popup &&
                    <div className="z-20 h-full w-full bg-white absolute top-0 left-0 rounded-t-[3.125rem] rounded-b-[20px] border-b-[20px] border-b-[#012970]">
                        <div className='flex justify-between pt-3 pb-2 bg-[#012970] rounded-t-[3.125rem]'>
                            <img className='bg-white w-[50px] h-[50px] object-contain rounded-[50%] mt-1 ml-4' src={props.image} alt='profile' />
                            <h1 className='text-2xl text-white font-bold pt-4'>Achievements</h1>
                            <div className="zoom-in">
                                <figure>
                                    <img onClick={handlePopupClick} className='bg-white rounded-[50%] mr-4 cursor-pointer my-3' width={35} height={35} src={close} alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <ul className='relative bg-white'>
                                {props.sAchievements.map((element, i) => {
                                    return <li className='h-18 flex gap-4 items-center liAnimate hover:bg-blue-300 list-none p-[10px] w-full bg-white'>
                                    <span className="bg-[#012970] relative p-3 text-white inline-block rounded-[50%] text-[12px] font-bold spanAnimate">
                                        <span className="absolute top-[2px] left-[9px]">{i+1}</span>
                                    </span>
                                    {element}
                                </li>
                                })}
                            </ul>
                        </div>
                    </div>
                }
                <div className='card-elements flex items-center justify-center absolute top-5 left-5 w-7 h-6 rounded-[50%] border-[1px] border-blue-500 bg-[#26235C]'>
                    <span className='text-white'>{props.rollNo}</span>
                </div>
                {/* Profile Image and Ellipse SVG  */}
                <div className="relative pt-6">
                    <div className="students-zoom-in">
                        <figure onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <img className={props.imgCover ? "w-[7rem] h-[7rem] object-cover rounded-[50%]" : "w-[7rem] h-[7rem] object-contain rounded-[50%]"} src={props.image} alt="" />
                            <svg className="h-[8rem] w-[8rem] absolute bottom-[-8px] right-[-25px]" width="169" height="225" viewBox="0 0 169 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Ellipse" d="M1.54123 17.5866C17.8648 8.14696 36.3545 3.08639 55.2177 2.89552C74.081 2.70465 92.6777 7.38997 109.205 16.4972C125.732 25.6045 139.629 38.8247 149.549 54.8761C159.468 70.9275 165.074 89.2655 165.821 108.112C166.569 126.959 162.434 145.675 153.817 162.445C145.199 179.216 132.393 193.472 116.638 203.832C100.883 214.192 82.7143 220.304 63.8939 221.575C45.0736 222.846 26.2397 219.234 9.21848 211.088" stroke="#F7DF1E" strokeWidth="5" />
                            </svg>
                        </figure>
                    </div>

                </div>
                {/* Name and Profession Container  */}
                <div className="card-elements pt-3 text-center">
                    <h2 id="studentName" className="w-[12rem] h-[1..75rem] text-[1.25rem]" data-name>{props.name}</h2>
                    <h3 className="text-[0.75rem] text-[#26235C]">{props.designation}</h3>
                </div>
                {/* Description, Button and Links Container  */}
                <div className="card-elements flex flex-col justify-center items-center w-[15rem] gap-3">
                    {/* Description  */}
                    <p className="pt-3 text-center font-[400] text-[0.65rem]">
                        {props.description}
                    </p>
                    {/* Button  */}
                    <button onClick={handlePopupClick} className="w-[9rem] h-[1.85rem] rounded-[0.625rem] bg-[#26235C] text-white font-[400] text-[0.85rem] text-center hover:font-bold hover:scale-[1.1] transition-all duration-300">
                        Know More
                    </button>
                    {/* Links Container  */}
                    <div className="w-[12rem] flex justify-center gap-10 items-center pb-12">
                        <div className="zoom-in">
                            <figure>
                                <a href={props.instagram} target="_blank">
                                    <i className="fa-brands fa-instagram insta-icon text-[1.25rem] text-[#26235C] hover:text-blue-500"></i>
                                </a>
                            </figure>
                        </div>
                        <div className="zoom-in">
                            <figure>
                                <a href={props.linkedin} target="_blank">
                                    <i className="fa-brands fa-linkedin linkedin-icon text-[1.25rem] text-[#26235C] hover:text-blue-500"></i>
                                </a>
                            </figure>
                        </div>
                        <div className="zoom-in">
                            <figure>
                                <a href={props.github} target="_blank">
                                    <i className="fa-brands fa-github github-icon text-[1.25rem] text-[#26235C] hover:text-blue-500"></i>
                                </a>
                            </figure>
                        </div>
                    </div>

                </div>
                <svg className="card-elements absolute bottom-0 w-[20rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 541 79" fill="none">
                    <path d="M541 39.5V4.5C541 2.01472 538.985 0 536.5 0C534.015 0 532 2.01472 532 4.5V27.3565C532 35.3778 528.479 42.9951 522.37 48.1927L512.508 56.5829C503.465 64.2757 491.981 68.5 480.109 68.5H59.9912C47.4564 68.5 35.3789 63.7919 26.1512 55.3084L18.4838 48.2593C12.7584 42.9956 9.5 35.5739 9.5 27.7965V4.75C9.5 2.12665 7.37335 0 4.75 0C2.12665 0 0 2.12665 0 4.75V39.5C0 61.3152 17.6848 79 39.5 79H501.5C523.315 79 541 61.3152 541 39.5Z" fill="#26235C" />
                </svg>

            </div>
        </div>
    )
}
