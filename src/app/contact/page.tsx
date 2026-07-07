import React from 'react';
import Navbar from '../components/navbar/navbar';
import ContactForm from './components/contactForm';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Julian for backend development, full stack solutions, or project collaborations.",
};

export default function ContactPage() {
    return (
        <main className="page-veil flex min-h-screen flex-col" role='main'>
            <Navbar />
            <div className='container mx-auto'>
                <ContactForm />
            </div>
        </main>
    );
}
