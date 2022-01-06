import React from 'react';

interface cardContent {
    skill: string,
    index: number
}

const SkillCard: React.FC<cardContent> = (cardContent) => {

    let theme: string | null;
    let progressBarColor: string;
    if(localStorage) {
        theme = localStorage.getItem('theme');
        if(theme === 'light') {
            progressBarColor = "#555";
        } else {
            progressBarColor = "#FFF";
        }
    } else {
        progressBarColor = "#777";
    }

    let gradientString = "";
    if (cardContent.skill.includes("Novice")) {
        gradientString = `linear-gradient(to right, ${progressBarColor} 25%, transparent 25%)`;
    } else if (cardContent.skill.includes("Intermediate")) {
        gradientString = `linear-gradient(to right, ${progressBarColor} 50%, transparent 50%)`;
    } else if (cardContent.skill.includes("Advanced")) {
        gradientString = `linear-gradient(to right, ${progressBarColor} 75%, transparent 75%)`;
    } else if (cardContent.skill.includes("Expert")) {
        gradientString = `linear-gradient(to right, ${progressBarColor} 100%)`;
    }

    const progressBar: HTMLDivElement | null = document.querySelector(`.proficiency-bar${cardContent.index}`);
    console.log(gradientString);
    if(progressBar !== null) {
            progressBar.style.backgroundImage = gradientString;
    }

    return (
        <li className="relative text-center shadow-lg mb-2 sm:mr-4 rounded-xl p-4 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600">
            <span>{cardContent.skill.substring(0, cardContent.skill.indexOf(' -'))}</span>
            <div className={`proficiency-bar${cardContent.index} py-2 border-2 border-black rounded-xl`} aria-label="proficiency progress bar"></div>
            <ul className="pt-2 flex flex-row justify-between text-xs md:text-sm lg:text-xs xl:text-sm">
                <li {...cardContent.skill.includes("None") ? "aria-label='Current Skill Level'" : ""}>None</li>
                <li {...cardContent.skill.includes("Novice") ? "aria-label='Current Skill Level'" : ""}>Novice</li>
                <li {...cardContent.skill.includes("Intermediate") ? "aria-label='Current Skill Level'" : ""}>Intermediate</li>
                <li {...cardContent.skill.includes("Advanced") ? "aria-label='Current Skill Level'" : ""}>Advanced</li>
                <li {...cardContent.skill.includes("Expert") ? "aria-label='Current Skill Level'" : ""}>Expert</li>
            </ul>
        </li>
    );
}

export default SkillCard;