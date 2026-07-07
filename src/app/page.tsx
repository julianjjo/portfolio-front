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
    "url": "https://julian-dev.dev/",
    "sameAs": [
      "https://github.com/julianjjo",
      // Add LinkedIn if available
    ],
    "knowsAbout": ["Java", "JavaScript", "Python", "PHP", "TypeScript", "Microservices", "Cloud Computing"]
  };

  return (
    <main className="page-veil flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-slate-400 sm:text-sm">
          Backend &amp; Full Stack Developer
        </p>
        <h1 className="mt-6 text-6xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl">
          <span className="neon-drift neon-glow">Julian</span>
        </h1>
        <p className="mt-5 font-mono text-sm text-slate-400">
          8+ years building robust, scalable systems
        </p>
        <div className="mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-slate-300">
          <p>I am a seasoned Backend Developer with 8 years of experience specializing in creating robust, scalable solutions using <span className="font-bold text-slate-100">Java</span>, <span className="font-bold text-slate-100">JavaScript</span>, <span className="font-bold text-slate-100">Python</span>, and <span className="font-bold text-slate-100">PHP</span>. My expertise extends to Full Stack development, proficiently using <span className="font-bold text-slate-100">JavaScript</span>, <span className="font-bold text-slate-100">TypeScript</span>, <span className="font-bold text-slate-100">CSS</span>, and <span className="font-bold text-slate-100">HTML</span> to deliver dynamic and responsive user interfaces.</p>
          <p className="italic text-slate-400">My journey in tech has also embraced cloud technologies, managing high-quality technical implementations on AWS and Google Cloud. Whether working on microservices or monolithic architectures, I prioritize clean code, technical excellence, and clean architecture principles to drive efficient and effective solutions.</p>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="neon-drift neon-button rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            Get in touch
          </a>
          <a
            href="/experience"
            className="rounded-full border border-slate-500/40 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-300/60 hover:text-white"
          >
            View experience
          </a>
          <a
            href="https://github.com/julianjjo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-slate-400 underline-offset-4 transition-colors hover:text-slate-200 hover:underline"
          >
            github.com/julianjjo
          </a>
        </div>
      </section>
    </main>
  );
}
