import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = ({ setNotification }) => {
    const formData = useRef()

const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm("service_aqx7txs","template_b73wqpq",formData.current,"Lga0r8FWYcdGg9rzL").then(
        ()=>{
        setNotification("Message sent Successfully!")
        setTimeout(()=> setNotification(''),3000);
        formData.current.reset();
    },
    
    (error)=>{
        setNotification("Failed to send message!")
        setTimeout(()=> setNotification(''),3000);
        console.error(error.text)
    }
)
}

    return (
        <main className='bg-white p-7 max-w-2xl border-2 border-zinc-300 rounded-lg shadow-lg'>
            {/* Form Heading  */}
            <div className='text-center mb-8'>
                <h1 className='text-4xl text-zinc-800 mb-2 font-bold'>Get In Touch</h1>
                <p className='text-md text-zinc-500'>
                    We're here to help. Send us a message and we'll get back to you as soon as possible.
                </p>
            </div>

            {/* Form  */}
            <form autoComplete='off' ref={formData} onSubmit={sendEmail}>
                <div className='flex items-center gap-5'>
                    <div className='flex-1'>
                        <label htmlFor="user-name" className='text-zinc-800'>Name</label>
                        <input type="text" name="user-name" id="user-name" placeholder='Name' required className='border-2 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 mt-2 text-sm focus:outline-blue-600 rounded-lg' />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="user-email" className='text-zinc-800'>E-Mail</label>
                        <input type="email" name="user-email" id="user-email" placeholder='E-mail' required  className='border-2 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 mt-2 text-sm focus:outline-blue-600 rounded-lg' />
                    </div>
                </div>

                <div className='mt-3'>
                    <label htmlFor="user-subject" className='text-zinc-800'>Subject</label>
                    <input type="text" name="user-subject" id="user-subject" placeholder='Subject'
                    required  className='border-2 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 mt-2 text-sm focus:outline-blue-600 rounded-lg' />
                </div>

                {/* Message  */}
                
                <div className='mt-3'>
                    <label htmlFor="message" className='text-zinc-800'>Message</label>
                    <textarea name="message" id="message" rows={5} placeholder='Type your message here...' required  className='border-2 border-zinc-300 w-full bg-zinc-100  p-3 mt-2 text-sm focus:outline-blue-600 rounded-lg resize-none'>
                    </textarea>
                </div>

                <div className='mt-8'>
                    <button type="submit"
                    className='w-full py-3 bg-blue-600 text-white rounded-lg active:bg-blue-700'>
                        Send Message
                        </button>
                </div>



            </form>
        </main>
    )
}

export default ContactForm