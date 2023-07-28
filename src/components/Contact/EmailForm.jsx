import React from 'react'
import '../../css/contact.css'

export default function EmailForm() {
    return (
        <div className="xs:w-[400px] ss:w-[500px]">
            <form action="/thanks" method="post" className="email-form">
                <div className="">
                    {/* <div className="w-full flex gap-5"> */}
                    <div className="pb-5">
                        <input type="text" name="name" className='w-full' placeholder="Your Name" required />
                    </div>

                    <div className="pb-5">
                        <input type="email" name="email" className='w-full' placeholder="Your Email" required />
                    </div>
                    {/* </div> */}

                    <div className="pb-5">
                        <input type="text" name="subject" className='w-full' placeholder="Subject" required />
                    </div>

                    <div className="pb-5">
                        <textarea name="message" rows="6" className='w-full' placeholder="Message" required></textarea>
                    </div>
                    <button className='bg-blue-500 ml-[8%] xs:ml-[25%] ss:ml-[30%] ' type="submit">Send Message</button>

                </div>
            </form>

        </div>
    )
}
