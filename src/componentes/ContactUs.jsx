import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_oufqs7a', 'template_c5zi38m', form.current, {
                publicKey: 't5Qs1IxbJI84LBH7D',
            })
            .then(
                () => {
                    alert('enviado con exito!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className='h-auto w-full max-w-md bg-gray-700 border-2 rounded-lg p-6'>
            <form className='flex flex-col text-white justify-center bg-gray-700' ref={form} onSubmit={sendEmail}>
            <label className=' bg-gray-700'>Titulo</label>
            <input className='border-b-2 border-white bg-transparent focus:outline-none mb-4' type="text" name="title" />
            <label className=' bg-gray-700'>Name</label>
            <input className='border-b-2 border-white bg-transparent focus:outline-none mb-4' type="text" name="user_name" />
            <label className=' bg-gray-700'>Email</label>
            <input className='border-b-2 border-white bg-transparent focus:outline-none mb-4' type="email" name="user_email" />
            <label className=' bg-gray-700'>Message</label>
            <textarea className='border-2 border-white bg-transparent focus:outline-none mb-4  w-full max-w-md max-h-40' name="message" />
            <input className='w-16 border-2 border-white ml-40 cursor-pointer' type="submit" value="Send" />
        </form> 
        </div>
       
    );
};