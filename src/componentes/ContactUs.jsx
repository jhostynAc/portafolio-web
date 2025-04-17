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
        <div className="w-full px-4 sm:px-6 md:px-0 flex justify-center">
            <div className="w-full max-w-md bg-gray-700 border-2 rounded-lg p-6">
                <form
                    className="flex flex-col text-white justify-center bg-gray-700"
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <label className="mb-1 bg-gray-700">Título</label>
                    <input
                        className="border-b-2 border-white bg-transparent focus:outline-none mb-4 px-2 py-1"
                        type="text"
                        name="title"
                    />

                    <label className="mb-1 bg-gray-700">Nombre</label>
                    <input
                        className="border-b-2 border-white bg-transparent focus:outline-none mb-4 px-2 py-1"
                        type="text"
                        name="user_name"
                    />

                    <label className="mb-1 bg-gray-700">Email</label>
                    <input
                        className="border-b-2 border-white bg-transparent focus:outline-none mb-4 px-2 py-1"
                        type="email"
                        name="user_email"
                    />

                    <label className="mb-1 bg-gray-700">Mensaje</label>
                    <textarea
                        className="border-2 border-white bg-transparent focus:outline-none mb-4 px-2 py-1 w-full max-h-40 resize-none"
                        name="message"
                    />

                    <input
                        className="self-center mt-2 px-4 py-1 border-2 border-white cursor-pointer rounded-md hover:bg-white hover:text-gray-700 transition"
                        type="submit"
                        value="Enviar"
                    />
                </form>
            </div>
        </div>


    );
};