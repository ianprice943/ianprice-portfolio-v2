import React from 'react';

interface cardContent {
    skill: string
}

const SkillCard: React.FC<cardContent> = (cardContent) => {
    return (
        <li className="text-center sm:text-left shadow-lg mb-2 rounded-xl p-2 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600">
            {cardContent.skill}
        </li>
    );
}

export default SkillCard;