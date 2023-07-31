import React from 'react'
import '../../css/animations.css'

export default function Counts(props) {
    
    return (
        <div className='w-[14.2rem] flex gap-5 bg-blue-100 rounded-2xl p-5'>
            {props.image}
            <div className='flex flex-col'>
                <h1 className='text-[2.5rem] text-[#012970] font-bold'>{props.number}</h1>
                <p className='text-[0.9rem] font-semibold'>{props.title}</p>
            </div>
        </div>
    )
}
