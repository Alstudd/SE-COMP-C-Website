import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { FaSmile } from "react-icons/fa"

function ContactForm() {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_CONTACT_KEY);
    if (state.succeeded) {
        return <div className="info-box flex flex-col justify-center items-center">
            <FaSmile className='text-blue-500 text-4xl' />
            <h3>Contact Form Submitted!</h3>
            </div>;
    }
    return (
        <form onSubmit={handleSubmit} className="email-form">
            <div className="">
                {/* <div className="w-full flex gap-5"> */}
                <div className="pb-5">
                    <input id="name" type="text" name="name" className='w-full' placeholder="Your Name" required />
                </div>

                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <input id="email" type="email" name="email" className='w-full' placeholder="Your Email" required />
                </div>
                {/* </div> */}

                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <input id="subject" type="text" name="subject" className='w-full' placeholder="Subject" required />
                </div>

                <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <textarea id="message" name="message" rows="6" className='w-full' placeholder="Message" required></textarea>
                </div>

                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <button className='bg-blue-500 ml-[8%] xs:ml-[25%] ss:ml-[30%]' type="submit" disabled={state.submitting}>Send Message</button>

            </div>
        </form>
    );
}

export default function EmailForm() {
    return (
        <div className="xs:w-[400px] ss:w-[500px]">
            <ContactForm />
        </div>
    )
}
