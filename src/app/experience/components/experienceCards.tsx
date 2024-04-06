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

const ExperienceCards = () => {
    const experiences = [
        { key: 'city-hall', title: 'Fusagasuga City Hall', time: '9 months', description: 'Full stack developer with Symfony, CSS, HTML. Developed an open data platform.', logos: [<SymfonyIcon width="50" height="50"/>, <PhpIcon width="50" height="50"/>,<PostgreSqlIcon width="50" height="50"/>, <HtmlIcon width="50" height="50"/>, <CssIcon width="50" height="50"/>, <JsIcon width="50" height="50"/>] },
        { key: 'ministry', title: 'Ministry of Environment and Sustainable Development of Colombia', time: '1 year', description: 'Developed new functionalities for an LMS platform using PHP and MySQL.', logos: [<PhpIcon width="50" height="50"/>, <MySqlIcon width="50" height="50"/>, <HtmlIcon width="50" height="50"/>, <CssIcon width="50" height="50"/>, <JsIcon width="50" height="50"/>]},
        { key: 'eltiempo', title: 'ElTiempo', time: '3 years', description: 'Full stack developer using Angular and Symfony. Improved and added new functionalities to their news website.', logos: [<SymfonyIcon width="50" height="50"/>, <PhpIcon width="50" height="50"/>, <MySqlIcon width="50" height="50"/>, <HtmlIcon width="50" height="50"/>, <CssIcon width="50" height="50"/>, <JsIcon width="50" height="50"/>]},
        { key: 'sophos', title: 'Sophos Solutions', time: '2 years', description: 'Developed a platform for creating automated tests using Java with Spring Boot and Angular, targeting testers without Automation experience.', logos: [<JavaIcon width="50" height="50"/>, <PostgreSqlIcon width="50" height="50"/>, <AngularIcon width="50" height="50"/>, <HtmlIcon width="50" height="50"/>, <CssIcon width="50" height="50"/>, <TsIcon width="50" height="50"/>, <AwsIcon width="50" height="50"/>]},
        { key: 'farmatodo', title: 'Farmatodo', time: 'Currently, 2 years', description: 'Backend developer in Spring Boot, developing new functionalities for microservices, working with OracleDB and PostgreSQL.', logos: [<JavaIcon width="50" height="50"/>, <SpringBootIcon width="50" height="50"/>, <OracleIcon width="50" height="50"/>, <PostgreSqlIcon width="50" height="50"/>, <GoogleCloudIcon width="50" height="50"/>]},
    ];

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 grid-rows-2 gap-4 m-4 mt-20">
            {experiences.map((experience, index) => (
                <div key={index} className="bg-white shadow-xl shadow-lg shadow-gray-800 border-1 rounded-3xl md:m-9">
                    <div className=' h-52 bg-slate-200 rounded-t-3xl'>
                        <div className='pt-8'>
                            <span className="text-justify rounded-full shadow-md bg-teal-200 ml-10 text-sm border-spacing-3 border-2 border-teal-300 p-1 text-teal-600">{experience.time}</span>
                        </div>
                        <div><h3 className="text-lg font-semibold text-zinc-800 p-8">{experience.title}</h3></div>
                    </div>
                    <div className='pt-8 pb-8'>
                        <p className="text-sm text-zinc-700 p-8">{experience.description}</p>
                    </div>
                    <div className='object-left'>
                        <div className='grid grid-rows-2 grid-cols-4 md:grid-rows-2 md:grid-cols-5 m-6'>
                            {experience.logos.map((logo) => (
                                <div className='md:m-2'>{logo}</div>
                            ))} 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default ExperienceCards;