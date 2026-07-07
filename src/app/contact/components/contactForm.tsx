"use client"

import React, { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const inputClasses = "block w-full rounded-lg border-0 bg-white/5 py-2 text-slate-100 shadow-sm ring-1 ring-inset ring-slate-400/25 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-cyan-300/70 sm:text-sm sm:leading-6";

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact_me', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, subject, message }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            setStatus('sent');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className='mx-auto w-full max-w-2xl px-4 pb-20 sm:px-6'>
            <header className='py-14 text-center sm:py-16'>
                <p className='font-mono text-xs uppercase tracking-[0.35em] text-slate-400'>Contact</p>
                <h1 className='mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>Contact Me</h1>
                <p className='mt-4 font-mono text-sm text-slate-400'>Tell me about your project, I read everything</p>
            </header>
            <form onSubmit={handleSubmit} className='glass rounded-2xl p-8 sm:p-10'>
                <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2">
                    <div>
                        <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-slate-400">Email</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required
                                className={inputClasses}
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-widest text-slate-400">Subject</label>
                        <div className="mt-2">
                            <input type="text" name="subject" id="subject" required
                                className={inputClasses}
                                value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-slate-400">Message</label>
                        <div className="mt-2">
                            <textarea id="message" name="message" rows={6} required
                                className={inputClasses}
                                value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                    <div aria-live="polite" className="text-sm">
                        {status === 'sent' && (
                            <p role="status" className="text-emerald-300">Message sent. I&apos;ll get back to you soon.</p>
                        )}
                        {status === 'error' && (
                            <p role="alert" className="text-rose-300">Your message didn&apos;t go through. Please try again.</p>
                        )}
                    </div>
                    <button type="submit" disabled={status === 'sending'}
                        className="neon-drift neon-button shrink-0 rounded-full px-6 py-2.5 text-sm font-semibold">
                        {status === 'sending' ? 'Sending…' : 'Send message'}
                    </button>
                </div>
            </form>
        </div>
    );
}
