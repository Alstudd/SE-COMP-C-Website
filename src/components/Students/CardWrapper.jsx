import React from 'react'
import Card from './Card'
import studentDetails from '../../data/studentDetails'
import '../../css/contact.css'
import '../../css/animations.css'
import { FaSearch } from 'react-icons/fa'

function createCard(detail, i) {
    return <Card
        key={i}
        id={i}
        rollNo={detail.rollNo}
        image={detail.image}
        name={detail.name}
        designation={detail.designation}
        description={detail.description}
        twitter={detail.twitter}
        instagram={detail.instagram}
        linkedin={detail.linkedin}
        github={detail.github}
        sAchievements = {detail.sAchievements}
    />;
}

export default function CardWrapper() {
    // window.onload = function() {
    //     for (let i = 0; i < studentDetails.length; i++) {
    //         let sName = document.querySelectorAll('[data-name]')[i];
    //         sName.innerHTML = "Alston";
    //     }
    // }

    let users = []

    window.onload = function () {
        const searchInput = document.querySelector('[data-search]')
        const sName = document.querySelectorAll('[data-name]')
        const sCard = document.querySelectorAll('[data-sCard]')
        const sContainer = document.querySelector('[data-sContainer]')

        searchInput.addEventListener("input", (e) => {
            const value = e.target.value.toLowerCase()
            for (let i = 0; i < studentDetails.length; i++) {
                let isVisible = sName[i].innerHTML.toLowerCase().includes(value)
                if (!isVisible) {
                    sCard[i].style.display = "none"
                } else {
                    sCard[i].style.display = ""
                    // sContainer.style = "gap: 0;"
                }
            }
        })
    }

    return (
        //  Wrapper 
        <div className="bg-blue-300">
            <section id="contact" className="contact pb-2">
                <header className="section-header">
                    <h2>Students Info</h2>
                    <p>Meet The Students</p>
                </header>
                {/* Search Box */}
                <div className='mt-4 flex justify-center mb-2'>
                    <input id='studentSearch' className='py-2 pl-3 outline-none text-white caret-white bg-blue-400 placeholder:text-white rounded-tl-[10px] rounded-bl-[10px]' type='text' placeholder='Search by name' data-search></input>
                    <div className="bg-blue-400 rounded-tr-[10px] rounded-br-[10px]">
                        <FaSearch className='text-white w-6 h-6 mt-2 pr-2 ' />
                    </div>
                </div>
                {/* Container  */}
                <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center mb-2 relative" data-sContainer>
                    {studentDetails.map(createCard)}
                </div>
            </section>
        </div>
    )
}
