"use client"

import React, { useState } from 'react';

export default function ContactForm() {
    // Estados para los campos del formulario
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Manejador del envío del formulario
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Datos del formulario
        const formData = {
            email,
            subject,
            message,
        };

        // Llamar a la API
        try {
            const response = await fetch('/api/contact_me', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log(result); // Maneja la respuesta de la API
        } catch (error) {
            console.error(error); // Maneja posibles errores
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="flex flex-col m-16">
                    <h2 className="text-2xl font-semibold leading-7 text-slate-300">Contact Me</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* Campos del formulario actualizados para manejar estado */}
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="subject" className="block text-sm font-medium leading-6 text-slate-100">Subject</label>
                            <div className="mt-2">
                                <input type="text" name="subject" id="subject" autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                                    value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-slate-100">Message</label>
                            <div className="mt-2">
                                <textarea id="about" name="about" rows={6}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pr-14 pb-10 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </div>
        </form>
    );
}
