import React from 'react';
import SymfonyIcon from '../Icons/symfonyIcon';
import PhpIcon from '../Icons/phpIcon';
import HtmlIcon from '../Icons/htmlIcon';
import MySqlIcon from '../Icons/mySqlIcon';
import JavaIcon from '../Icons/javaIcon';
import AngularIcon from '../Icons/angularIcon';
import CssIcon from '../Icons/cssIcon';
import JsIcon from '../Icons/jsIcon';
import TsIcon from '../Icons/tsIcon';
import AwsIcon from '../Icons/awsIcon';
import PostgreSqlIcon from '../Icons/postgreSqlIcon';
import SpringBootIcon from '../Icons/springBootIcon';
import OracleIcon from '../Icons/oracleBootIcon';
import GoogleCloudIcon from '../Icons/googleCloudIcon';
import DOMPurify from "isomorphic-dompurify";
import NestJsIcon from '../Icons/nestjsIcon';
import PythonIcon from '../Icons/pythonIcon';
import NodeJsIcon from '../Icons/nodeJsIcon';


const ICON_SIZE = "34";

const ExperienceCards = () => {
    const experiences = [
        { key: 'farmatodo', title: 'Farmatodo', time: 'Currently, 2 years', description: 'Backend developer in <span class="font-bold">Spring Boot</span> and <span class="font-bold">NestJS</span>, developing new functionalities for microservices, working with <span class="font-bold">OracleDB</span> and <span class="font-bold">PostgreSQL</span>. Additionally, I excel in crafting <span class="font-bold">Python</span> scripts for automation and data manipulation, further enhancing operational efficiency and system integration.', logos: [{key: 0, name: 'Java', svg: <JavaIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 1, name: 'Node.js', svg: <NodeJsIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 2, name: 'Python', svg: <PythonIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 3, name: 'Spring Boot', svg: <SpringBootIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 4, name: 'NestJS', svg: <NestJsIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 5, name: 'OracleDB', svg: <OracleIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 6, name: 'PostgreSQL', svg: <PostgreSqlIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 7, name: 'Google Cloud', svg: <GoogleCloudIcon width={ICON_SIZE} height={ICON_SIZE}/>}]},
        { key: 'sophos', title: 'Sophos Solutions', time: '2 years', description: 'Developed a platform for creating automated tests using <span class="font-bold">Java</span> with <span class="font-bold">Spring Boot</span> and <span class="font-bold">Angular</span>, targeting testers without Automation experience.', logos: [{key: 0, name: 'Java', svg: <JavaIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 1, name: 'PostgreSQL', svg: <PostgreSqlIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 2, name: 'Angular', svg: <AngularIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 3, name: 'HTML', svg: <HtmlIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 4, name: 'CSS', svg: <CssIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 5, name: 'TypeScript', svg: <TsIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 6, name: 'AWS', svg: <AwsIcon width={ICON_SIZE} height={ICON_SIZE}/>}]},
        { key: 'eltiempo', title: 'ElTiempo', time: '3 years', description: 'Full stack developer using <span class="font-bold">Angular</span> and <span class="font-bold">Symfony</span>. Improved and added new functionalities to their news website.', logos: [{key: 0, name: 'Symfony', svg: <SymfonyIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 1, name: 'PHP', svg: <PhpIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 2, name: 'MySQL', svg: <MySqlIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 3, name: 'HTML', svg: <HtmlIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 4, name: 'CSS', svg: <CssIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 5, name: 'JavaScript', svg: <JsIcon width={ICON_SIZE} height={ICON_SIZE}/>}]},
        { key: 'ministry', title: 'Ministry of Environment and Sustainable Development of Colombia', time: '1 year', description: 'Developed new functionalities for an LMS platform using <span class="font-bold">PHP</span> and <span class="font-bold">MySQL</span>.', logos: [{key: 0, name: 'PHP', svg: <PhpIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 1, name: 'MySQL', svg: <MySqlIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 2, name: 'HTML', svg: <HtmlIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 3, name: 'CSS', svg: <CssIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 4, name: 'JavaScript', svg: <JsIcon width={ICON_SIZE} height={ICON_SIZE}/>}]},
        { key: 'city-hall', title: 'Fusagasuga City Hall', time: '9 months', description: 'Full stack developer with <span class="font-bold">Symfony</span>, <span class="font-bold">CSS</span>, <span class="font-bold">HTML</span>. Developed an open data platform.', logos: [{key: 0, name: 'Symfony', svg: <SymfonyIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 1, name: 'PHP', svg: <PhpIcon width={ICON_SIZE} height={ICON_SIZE}/>},{key: 2, name: 'PostgreSQL', svg: <PostgreSqlIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 3, name: 'HTML', svg: <HtmlIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 4, name: 'CSS', svg: <CssIcon width={ICON_SIZE} height={ICON_SIZE}/>}, {key: 5, name: 'JavaScript', svg: <JsIcon width={ICON_SIZE} height={ICON_SIZE}/>}] },
    ];


    experiences.forEach((experience) => {
        experience.description = DOMPurify.sanitize(experience.description);
    });

    return (
        <div className="grid gap-6 pb-20 sm:grid-cols-2">
            {experiences.map((experience) => (
                <article key={experience.key} className="glass rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-400/40">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                        <h2 className="text-2xl font-bold text-white">{experience.title}</h2>
                        <span className="whitespace-nowrap rounded-full border border-slate-500/30 px-3 py-1 font-mono text-xs text-slate-300">{experience.time}</span>
                    </div>
                    <p className="mt-5 leading-relaxed text-slate-300" dangerouslySetInnerHTML={{__html: experience.description}}></p>
                    <div className="mt-7 flex flex-wrap gap-2">
                        {experience.logos.map((logo) => (
                            <div key={logo.key} title={logo.name} className="rounded-xl bg-slate-100/95 p-2 shadow-sm">{logo.svg}</div>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
};

export default ExperienceCards;
