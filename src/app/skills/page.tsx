import React from 'react';
import Navbar from '../components/navbar/navbar';
import { Metadata } from "next";
import JavaIcon from '../experience/Icons/javaIcon';
import JsIcon from '../experience/Icons/jsIcon';
import TsIcon from '../experience/Icons/tsIcon';
import PythonIcon from '../experience/Icons/pythonIcon';
import PhpIcon from '../experience/Icons/phpIcon';
import HtmlIcon from '../experience/Icons/htmlIcon';
import CssIcon from '../experience/Icons/cssIcon';
import SpringBootIcon from '../experience/Icons/springBootIcon';
import NestJsIcon from '../experience/Icons/nestjsIcon';
import NodeJsIcon from '../experience/Icons/nodeJsIcon';
import AngularIcon from '../experience/Icons/angularIcon';
import SymfonyIcon from '../experience/Icons/symfonyIcon';
import OracleIcon from '../experience/Icons/oracleBootIcon';
import PostgreSqlIcon from '../experience/Icons/postgreSqlIcon';
import MySqlIcon from '../experience/Icons/mySqlIcon';
import AwsIcon from '../experience/Icons/awsIcon';
import GoogleCloudIcon from '../experience/Icons/googleCloudIcon';

export const metadata: Metadata = {
    title: "Skills",
    description: "The languages, frameworks, databases, and cloud platforms Julian works with as a Backend and Full Stack Developer.",
};

const ICON_SIZE = "30";

export default function Skills() {
    const groups = [
        {
            key: 'languages',
            title: 'Languages',
            skills: [
                { name: 'Java', icon: <JavaIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'JavaScript', icon: <JsIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'TypeScript', icon: <TsIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'Python', icon: <PythonIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'PHP', icon: <PhpIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'HTML', icon: <HtmlIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'CSS', icon: <CssIcon width={ICON_SIZE} height={ICON_SIZE} /> },
            ],
        },
        {
            key: 'frameworks',
            title: 'Frameworks & Runtimes',
            skills: [
                { name: 'Spring Boot', icon: <SpringBootIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'NestJS', icon: <NestJsIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'Node.js', icon: <NodeJsIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'Angular', icon: <AngularIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'Symfony', icon: <SymfonyIcon width={ICON_SIZE} height={ICON_SIZE} /> },
            ],
        },
        {
            key: 'databases',
            title: 'Databases',
            skills: [
                { name: 'OracleDB', icon: <OracleIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'PostgreSQL', icon: <PostgreSqlIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'MySQL', icon: <MySqlIcon width={ICON_SIZE} height={ICON_SIZE} /> },
            ],
        },
        {
            key: 'cloud',
            title: 'Cloud',
            skills: [
                { name: 'AWS', icon: <AwsIcon width={ICON_SIZE} height={ICON_SIZE} /> },
                { name: 'Google Cloud', icon: <GoogleCloudIcon width={ICON_SIZE} height={ICON_SIZE} /> },
            ],
        },
    ];

    return (
        <main className="page-veil flex min-h-screen flex-col" role='main'>
            <Navbar />
            <div className='container mx-auto max-w-6xl px-4 sm:px-6'>
                <header className='py-14 text-center sm:py-16'>
                    <p className='font-mono text-xs uppercase tracking-[0.35em] text-slate-400'>Toolbox</p>
                    <h1 className='mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>Skills</h1>
                    <p className='mt-4 font-mono text-sm text-slate-400'>What I build with, from the JVM to the cloud</p>
                </header>
                <div className='grid gap-6 pb-20 sm:grid-cols-2'>
                    {groups.map((group) => (
                        <section key={group.key} aria-labelledby={`skills-${group.key}`} className='glass rounded-2xl p-8'>
                            <h2 id={`skills-${group.key}`} className='font-mono text-xs uppercase tracking-[0.3em] text-slate-400'>{group.title}</h2>
                            <ul className='mt-6 flex flex-wrap gap-3'>
                                {group.skills.map((skill) => (
                                    <li key={skill.name} className='flex items-center gap-3 rounded-full border border-slate-500/30 py-1.5 pl-1.5 pr-4'>
                                        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-100/95'>{skill.icon}</span>
                                        <span className='text-sm font-medium text-slate-200'>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
