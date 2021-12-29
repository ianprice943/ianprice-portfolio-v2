import React, { useEffect } from 'react';
import style from '../styles/toggle.module.css';

const ThemeSwitcher: React.FC = () => {
    

    const setUserTheme = (curTheme: string) => {
        localStorage.setItem('theme', curTheme);
        if(curTheme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }

    const checkUserTheme = () => {
        if (typeof window !== undefined) {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                return 'dark';
            } else {
                return 'light';
            }
        } else {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            } else {
                return 'light';
            }
        }
    }

    const blurButtonIfScreenLarge = (buttonID: string) => {
        const button: HTMLButtonElement | null = document.querySelector(`#${buttonID}`);
        if(button && window.innerWidth >= 1280) {
            button.blur();
        }
    }

    useEffect(() => {
        setUserTheme(checkUserTheme());
    });

    return (
        <div className="flex justify-end">
            <button id={style.sun} onClick={() => {setUserTheme('light'); blurButtonIfScreenLarge(style.sun);}} className="outline-2px border-0 border-black bg-yellow-300 w-10 h-10 sm:w-8 sm:h-8 rounded-xl my-auto mr-1 hover:bg-yellow-100 transform xl:hover:scale-125 xl:focus-within:scale-125" aria-label="activate light theme"></button>
            <button id={style.moon} onClick={() => {setUserTheme('dark'); blurButtonIfScreenLarge(style.moon);}} className="outline-2px border-0 border-black bg-gray-300 w-10 h-10 sm:w-8 sm:h-8 rounded-xl my-auto hover:bg-gray-500 transform xl:hover:scale-125 xl:focus-within:scale-125" aria-label="activate dark theme"></button>
        </div>
    );
}

export default ThemeSwitcher;