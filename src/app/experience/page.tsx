import React from 'react';
import Navbar from '../components/navbar/navbar';
import ExperienceCards from './components/experienceCards';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Explore the professional journey and technical expertise of Julian, featuring 8 years of backend development.",
};

export default function Experience() {
  return (
    <main className="page-veil flex min-h-screen flex-col" role='main'>
      <Navbar />
      <div className='container mx-auto max-w-6xl px-4 sm:px-6'>
        <header className='py-14 text-center sm:py-16'>
          <p className='font-mono text-xs uppercase tracking-[0.35em] text-slate-400'>Career</p>
          <h1 className='mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>Experience</h1>
          <p className='mt-4 font-mono text-sm text-slate-400'>5 roles &middot; 8+ years &middot; backend first</p>
        </header>
        <ExperienceCards />
      </div>
    </main>
  );
}
