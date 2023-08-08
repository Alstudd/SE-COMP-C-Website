import React from 'react'
import Recent from '../components/Achievements/Recent'
import CrOfTheYear from '../components/Achievements/CrOfTheYear'
import ClubCoreMember from '../components/Achievements/ClubCoreMember'
import ScholarsOfTheYear from '../components/Achievements/ScholarsOfTheYear'
import "../css/achievements.css"
import clubCoreMemberDetails from '../data/clubCoreMemberDetails'

export default function Achievements() {
  return (
    <div className='bg-blue-300'>
      <header className="text-center pt-10 pb-5">
        <h2 className='text-[13px] tracking-[1px] font-bold m-0 text-[#4154f1] uppercase'>comp-c</h2>
        <p className='mt-[10px] mx-0 mb-0 p-0 sm:text-[38px] sm:leading-[42px] font-bold text-[#012970] text-[28px] leading-[32px]'>Achievements</p>
      </header>
      <section className="">
        {/* <h2 className="text-center text-[35px] text-[#26235C] mt-2 font-bold mx-auto">
                        Recent Achievements
                      </h2> */}
        <Recent />
      </section>
      {
      (clubCoreMemberDetails.length > 0) && 
      <section className="pt-[100px]">
        <h2 className="text-center text-[35px] text-[#26235C] mt-2 font-bold mx-auto">
          Club Core Members
        </h2>
        <ClubCoreMember />
      </section>
      }
      <section className="pt-[100px]">
        <h2 className="text-center text-[35px] text-[#26235C] mt-2 mb-8 font-bold mx-auto">
          Cr's Of The Year
        </h2>
        <CrOfTheYear />
      </section>
      <section className="py-[100px]">
        <h2 className="text-center text-[35px] text-[#26235C] mt-2 mb-8 font-bold mx-auto">
          10 Pointers Of The Year
        </h2>
        <ScholarsOfTheYear />
      </section>
    </div>
  )
}
