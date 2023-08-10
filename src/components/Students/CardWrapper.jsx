import React, { useState } from 'react'
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
        sAchievements={detail.sAchievements}
        imgCover={detail.imgCover}
    />;
}

export default function CardWrapper() {

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

    const [name, setName] = useState("")
    const stuName = document.querySelectorAll('[data-name]')
    const stuCard = document.querySelectorAll('[data-sCard]')

    function handleSubmit(e) {
        e.preventDefault()
        for (let i = 0; i < studentDetails.length; i++) {
            let isVisible = stuName[i].innerHTML.toLowerCase().includes(name)
            if (!isVisible) {
                stuCard[i].style.display = "none"
            } else {
                stuCard[i].style.display = ""
            }
        }
    }

    function handleInput(e) {
        setName(e.target.value.toLowerCase())
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
                <div >
                    <form onSubmit={handleSubmit} autoComplete='off' className='mt-4 flex justify-center mb-2'>
                    <input onChange={handleInput} id='studentSearch' className=' selection:bg-blue-500 py-2 pl-3 outline-none text-white caret-white bg-blue-400 placeholder:text-white rounded-tl-[10px] rounded-bl-[10px]' type='text' placeholder='Search by name' value={name} data-search></input>
                    <div className="bg-blue-400 rounded-tr-[10px] rounded-br-[10px]">
                        <button type="submit"><FaSearch className='text-white w-6 h-6 mt-2 pr-2 ' /></button>
                    </div>
                    </form>
                </div>
                {/* Container  */}
                <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center mb-2 relative" data-sContainer>
                    {studentDetails.map(createCard)}
                </div>
            </section>
        </div>
    )
}
