import React from 'react';

interface cardContent {
    skill: string
}

const SkillCard: React.FC<cardContent> = (cardContent) => {
    return (
        <li className="text-center sm:text-left shadow-lg mb-2 rounded-xl p-4 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600">
            <span>{cardContent.skill}</span>
            <ul className="progress-bar">
                <li className={cardContent.skill.includes("None") ? "stop" : ""}></li>
                <li className={cardContent.skill.includes("Novice") ? "stop" : ""}></li>
                <li className={cardContent.skill.includes("Intermediate") ? "stop" : ""}></li>
                <li className={cardContent.skill.includes("Advanced") ? "stop" : ""}></li>
                <li className={cardContent.skill.includes("Expert") ? "stop" : ""}></li>
            </ul>
        </li>
    );
}

export default SkillCard;