import React from 'react'
import { FaPhone, FaClock, FaAddressBook, FaEnvelope } from 'react-icons/fa'

export default function InfoBoxes() {
    return (
        <div className='ss:flex-row ss:justify-center xs:w-[400px] ss:w-auto ss:items-center flex-col flex gap-10'>
            <div className="flex flex-col gap-10">
                <div className="info-box">
                    <FaAddressBook className='text-blue-500 text-4xl' />
                    <h3>Address</h3>
                    <p>TCET, Kandivali (E),<br />Classroom 608, MUM-101</p>
                </div>
                <div className="info-box">
                    <FaPhone className='text-blue-500 text-4xl' />
                    <h3>Call Us</h3>
                    <p>+91 75068 06734</p>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="info-box">
                    <FaEnvelope className='text-blue-500 text-4xl' />
                    <h3>Email Us</h3>
                    <p>alstonsoares17@gmail.com</p>
                </div>
                <div className="info-box">
                    <FaClock className='text-blue-500 text-4xl' />
                    <h3>Open Hours</h3>
                    <p>Monday - Friday<br />24/7</p>
                </div>
            </div>
        </div>
    )
}
