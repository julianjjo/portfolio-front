import Navbar from "./components/navbar/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Julian, a seasoned Backend and Full Stack Developer with 8 years of experience.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Julian",
    "jobTitle": "Backend & Full Stack Developer",
    "url": "https://julianjjo.github.io/",
    "sameAs": [
      "https://github.com/julianjjo",
      // Add LinkedIn if available
    ],
    "knowsAbout": ["Java", "JavaScript", "Python", "PHP", "TypeScript", "Microservices", "Cloud Computing"]
  };

  return (
    <main className="flex min flex-col h-full md:h-screen bg-gray-800 bg-opacity-75">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="flex flex-col items-center justify-center md:h-full">
        <div>
          <div className="text-center p-20">
            <h1 className="text-7xl font-bold items-center" role="heading">About Me</h1>
          </div>
          <div className="text-center p-8 text-xl">
            <p>I am a seasoned Backend Developer with 8 years of experience specializing in creating robust, scalable solutions using <span className="font-bold">Java</span>, <span className="font-bold">JavaScript</span>, <span className="font-bold">Python</span>, and <span className="font-bold">PHP</span>. My expertise extends to Full Stack development, proficiently using <span className="font-bold">JavaScript</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">CSS</span>, and <span className="font-bold">HTML</span> to deliver dynamic and responsive user interfaces.</p>
          </div>
          <div className="text-center pb-20 italic">
            <p>My journey in tech has also embraced cloud technologies, managing high-quality technical implementations on AWS and Google Cloud. Whether working on microservices or monolithic architectures, I prioritize clean code, technical excellence, and clean architecture principles to drive efficient and effective solutions.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
