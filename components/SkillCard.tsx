import React from 'react';
import { useThemeContext } from './ThemeContext';

interface cardContent {
    skill: string,
    index: number
}

const SkillCard: React.FC<cardContent> = (cardContent) => {

    const { theme } = useThemeContext();
    let progressBarColor: string;
    if(theme === 'light') {
        progressBarColor = "#555";
    } else {
        progressBarColor = "#FFF";
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

    const applyProgressBar = () => {
        const progressBar: HTMLDivElement | null = document.querySelector(`.proficiency-bar${cardContent.index}`);
        if (progressBar !== null) {
            progressBar.style.backgroundImage = gradientString;
            let percentFull = "0";
            if (gradientString.includes('25%')) {
                percentFull = "25";
            } else if (gradientString.includes('50%')) {
                percentFull = "50";
            } else if (gradientString.includes('75%')) {
                percentFull = "75";
            } else if (gradientString.includes('100%')) {
                percentFull = "100";
            }
            progressBar.setAttribute("aria-valuenow", percentFull);
            progressBar.setAttribute("aria-valuemin", "0");
            progressBar.setAttribute("aria-valuemax", "100");
        }
    }

    const progressCheck = setInterval(() => {
        if (typeof window !== "undefined") {
            const progressBar: HTMLDivElement | null = document.querySelector(`.proficiency-bar${cardContent.index}`);
    
            if(progressBar !== null) {
                applyProgressBar();
                clearInterval(progressCheck);
            }
        }
    }, 100);

    return (
        <li className="text-center shadow-lg mb-2 sm:mr-4 rounded-xl p-4 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600">
            <span>{cardContent.skill.substring(0, cardContent.skill.indexOf(' -'))}</span>
            <div className={`proficiency-bar${cardContent.index} py-2 border-2 border-black rounded-xl`} role="progressbar"></div>
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