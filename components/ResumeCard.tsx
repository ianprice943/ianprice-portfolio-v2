import React from 'react';
import { JobData } from 'ResumeTypes';

interface cardContent {
    job: JobData
}

const ResumeCard: React.FC<cardContent> = (cardContent) => {
    return (
        <article className="h-72 overflow-y-auto sm:h-48 md:h-64 lg:h-48 lg:overflow-y-hidden lg:hover:overflow-y-auto shadow-lg mb-2 md:mr-4 rounded-xl p-2 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600">
            <h3 className="text-xl">{cardContent.job.companyName}</h3>
            <p>{cardContent.job.companyTitle}</p>
            <p>{cardContent.job.experienceTime}</p>
            <p>{cardContent.job.responsibilities[0]}</p>
            <ul className="list-disc pl-6">
                {cardContent.job.responsibilities.slice(1).map((responsibility, i) => {
                   return <li className="" key={i}>{responsibility}</li> 
                })}
            </ul>
        </article>
    );
}

export default ResumeCard;