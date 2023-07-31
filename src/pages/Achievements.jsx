import React from 'react'
import Recent from '../components/Achievements/Recent'

export default function Achievements() {
  return (
    <div className='bg-blue-300'>
      <header className="text-center py-10">
      <h2 className='text-[13px] tracking-[1px] font-bold m-0 text-[#4154f1] uppercase'>comp-c</h2>
      <p className='mt-[10px] mx-0 mb-0 p-0 sm:text-[38px] sm:leading-[42px] font-bold text-[#012970] text-[28px] leading-[32px]'>Achievements</p>
      </header>
      <Recent />
    </div>
  )
}
