import React from 'react'
import Slider from '../components/Opportunities/Slider'
import "../css/contact.css"

export default function Opportunities() {
    return (
        <div className='bg-blue-300'>
            <section id="contact" className="contact flex justify-center">

                <div className="container">

                    <header className="section-header pb-[40px]">
                        <h2>Opportunities</h2>
                        <p>Upcoming Events</p>
                    </header>
                    <Slider />
                </div>

            </section>
        </div>
    )
}
