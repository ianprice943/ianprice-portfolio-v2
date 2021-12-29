import React, { useEffect } from 'react';
import style from './toggle.module.css';

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

    useEffect(() => {
        setUserTheme(checkUserTheme());
    });

    return (
        <div className="flex justify-end">
            <button id={style.sun} onClick={() => setUserTheme('light')} className="outline-2px border-0 border-black bg-yellow-300 w-8 h-8 rounded-xl my-auto mr-1 hover:bg-yellow-100 transform hover:scale-125 focus-within:scale-125" aria-label="activate light theme"></button>
            <button id={style.moon} onClick={() => setUserTheme('dark')} className="outline-2px border-0 border-black bg-gray-300 w-8 h-8 rounded-xl my-auto hover:bg-gray-500 transform hover:scale-125 focus-within:scale-125" aria-label="activate dark theme"></button>
        </div>
    );
}

export default ThemeSwitcher