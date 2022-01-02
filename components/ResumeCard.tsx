import React from 'react';

interface cardContent {
    str: string[]
}

const ResumeCard: React.FC<cardContent> = (cardContent) => {
    return (
        <li>
            {cardContent.str}
        </li>
    );
}

export default ResumeCard;