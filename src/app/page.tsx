"use client"

import Navbar from "./components/navbar";
import { usePathname } from 'next/navigation'


export default function Home() {
  const pathname = usePathname();
  return (
    <main className="flex min flex-col justify-between">
      <Navbar pathUrl={pathname} />
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-center pb-20">
            <h1 className="text-7xl font-bold items-center">About Me</h1>
          </div>
          <div className="text-center pb-8 text-xl">
            <p>I am a seasoned Backend Developer with 7 years of experience specializing in creating robust, scalable solutions using Java, Python, and PHP. My expertise extends to Full Stack development, proficiently using JavaScript, TypeScript, CSS, and HTML to deliver dynamic and responsive user interfaces.</p>
          </div>
          <div className="text-center italic">
            <p>My journey in tech has also embraced cloud technologies, managing high-quality technical implementations on AWS and Google Cloud. Whether working on microservices or monolithic architectures, I prioritize clean code, technical excellence, and clean architecture principles to drive efficient and effective solutions.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
