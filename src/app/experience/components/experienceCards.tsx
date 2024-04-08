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


const ExperienceCards = () => {
    const experiences = [
        { key: 'farmatodo', title: 'Farmatodo', time: 'Currently, 2 years', description: 'Backend developer in <span class="font-bold">Spring Boot</span> and <span class="font-bold">NestJS</span>, developing new functionalities for microservices, working with <span class="font-bold">OracleDB</span> and <span class="font-bold">PostgreSQL</span>. Additionally, I excel in crafting <span class="font-bold">Python</span> scripts for automation and data manipulation, further enhancing operational efficiency and system integration.', logos: [{key: 0, svg: <JavaIcon width="50" height="50"/>}, {key: 1, svg: <NodeJsIcon width="50" height="50"/>}, {key: 2, svg: <PythonIcon width="50" height="50"/>}, {key: 3, svg: <SpringBootIcon width="50" height="50"/>}, {key: 4, svg: <NestJsIcon width="50" height="50"/>}, {key: 5, svg: <OracleIcon width="50" height="50"/>}, {key: 6, svg: <PostgreSqlIcon width="50" height="50"/>}, {key: 7, svg: <GoogleCloudIcon width="50" height="50"/>}]},
        { key: 'sophos', title: 'Sophos Solutions', time: '2 years', description: 'Developed a platform for creating automated tests using <span class="font-bold">Java</span> with <span class="font-bold">Spring Boot</span> and <span class="font-bold">Angular</span>, targeting testers without Automation experience.', logos: [{key: 0, svg: <JavaIcon width="50" height="50"/>}, {key: 1, svg: <PostgreSqlIcon width="50" height="50"/>}, {key: 2, svg: <AngularIcon width="50" height="50"/>}, {key: 3, svg: <HtmlIcon width="50" height="50"/>}, {key: 4, svg: <CssIcon width="50" height="50"/>}, {key: 5, svg: <TsIcon width="50" height="50"/>}, {key: 6, svg: <AwsIcon width="50" height="50"/>}]},
        { key: 'eltiempo', title: 'ElTiempo', time: '3 years', description: 'Full stack developer using <span class="font-bold">Angular</span> and <span class="font-bold">Symfony</span>. Improved and added new functionalities to their news website.', logos: [{key: 0, svg: <SymfonyIcon width="50" height="50"/>}, {key: 1, svg: <PhpIcon width="50" height="50"/>}, {key: 2, svg: <MySqlIcon width="50" height="50"/>}, {key: 3, svg: <HtmlIcon width="50" height="50"/>}, {key: 4, svg: <CssIcon width="50" height="50"/>}, {key: 5, svg: <JsIcon width="50" height="50"/>}]},
        { key: 'ministry', title: 'Ministry of Environment and Sustainable Development of Colombia', time: '1 year', description: 'Developed new functionalities for an LMS platform using <span class="font-bold">PHP</span> and <span class="font-bold">MySQL</span>.', logos: [{key: 0, svg: <PhpIcon width="50" height="50"/>}, {key: 1, svg: <MySqlIcon width="65" height="65"/>}, {key: 2, svg: <HtmlIcon width="50" height="50"/>}, {key: 3, svg: <CssIcon width="50" height="50"/>}, {key: 4, svg: <JsIcon width="50" height="50"/>}]},
        { key: 'city-hall', title: 'Fusagasuga City Hall', time: '9 months', description: 'Full stack developer with <span class="font-bold">Symfony</span>, <span class="font-bold">CSS</span>, <span class="font-bold">HTML</span>. Developed an open data platform.', logos: [{key: 0, svg: <SymfonyIcon width="50" height="50"/>}, {key: 1, svg: <PhpIcon width="50" height="50"/>},{key: 2, svg: <PostgreSqlIcon width="50" height="50"/>}, {key: 3, svg: <HtmlIcon width="50" height="50"/>}, {key: 4, svg: <CssIcon width="50" height="50"/>}, {key: 5, svg: <JsIcon width="50" height="50"/>}] },
    ];


    experiences.forEach((experience) => {
        experience.description = DOMPurify.sanitize(experience.description);
    });
    
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 grid-rows-2 gap-4">
            {experiences.map((experience, index) => (
                <div key={index} className="bg-white bg-opacity-80 shadow-md shadow-gray-800 rounded-3xl md:m-9 scale-90 md:hover:scale-100 md:transition md:duration-300 md:ease-in-out">
                    <div className='h-64 bg-gray-800 rounded-t-3xl'>
                        <div className='pt-8'>
                            <span className="text-center rounded-full shadow-sm bg-gray-300 ml-10 text-sm p-2 text-gray-900 shadow-gray-500">{experience.time}</span>
                        </div>
                        <div><h3 className="text-2xl font-semibold text-white p-8">{experience.title}</h3></div>
                    </div>
                    <div className='pt-8 pb-8'>
                        <p className="text-lg text-zinc-700 pl-8 pt-8" dangerouslySetInnerHTML={{__html: experience.description}}></p>
                    </div>
                    <div className='object-left'>
                        <div className='grid grid-rows-2 grid-cols-4 md:grid-rows-2 md:grid-cols-5 m-6'>
                            {experience.logos.map((logo) => (
                                <div key={logo.key} className='md:m-2'>{logo.svg}</div>
                            ))} 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceCards;