import React from 'react'
import { FaSmileWink } from 'react-icons/fa'

export default function Resources() {
  return (
    <div className='bg-blue-300'>
      <header className="text-center pt-10 pb-5">
        <h2 className='text-[13px] tracking-[1px] font-bold m-0 text-[#4154f1] uppercase'>resources</h2>
        <p className='mt-[10px] mx-0 mb-0 p-0 sm:text-[38px] sm:leading-[42px] font-bold text-[#012970] text-[28px] leading-[32px]'>Resources</p>
      </header>
      <section>
        <div className='bg-white flex items-center justify-center gap-2'>
            <FaSmileWink className='text-[#012970] text-[28px] sm:text-[38px]' />
            <p className='mx-0 mb-0 p-4 sm:text-[38px] sm:leading-[42px] font-bold text-[#012970] text-[28px] leading-[32px]'>Coming Soon!</p>
        </div>
      </section>
    </div>
  )
}
