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
    <main className="flex flex-col" role='main'>
      <Navbar />
      <div className='container mx-auto'>
        <ExperienceCards />
      </div>
    </main>
  );
}