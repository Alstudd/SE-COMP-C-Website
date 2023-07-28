import React from 'react'
import Card from './Card'
import studentDetails from '../../data/studentDetails'
import '../../css/contact.css'

function createCard(detail) {
    return <Card
        key={detail.id}
        id={detail.id}
        rollNo={detail.rollNo}
        image={detail.image}
        name={detail.name}
        designation={detail.designation}
        description={detail.description}
        twitter={detail.twitter}
        instagram={detail.instagram}
        linkedin={detail.linkedin}
        github={detail.github}
    />;
}

export default function CardWrapper() {
    return (
        //  Wrapper 
        <div className="overflow-x-hidden bg-blue-300 box-border">
            <section id="contact" className="contact pb-2">
                <header className="section-header">
                    <h2>Students Info</h2>
                    <p>Meet The Students</p>
                </header>
                {/* Container  */}
                <div className="flex flex-wrap gap-12 justify-center items-center pt-10 pb-10">
                    {studentDetails.map(createCard)}
                </div>
            </section>
        </div>
    )
}
