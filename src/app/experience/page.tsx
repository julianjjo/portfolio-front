"use client"

import React from 'react';
import Navbar from '../components/navbar';
import { usePathname } from 'next/navigation'

import ExperienceCards from './components/experienceCards';


export default function Experience() {
  const pathname = usePathname();
  return (
    <main className="flex flex-col" role='main'>
      <Navbar pathUrl={pathname}/>
      <div className='container mx-auto'>
        <ExperienceCards />
      </div>
    </main>
  );
}