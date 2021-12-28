import React, { useEffect, useState } from 'react';
import style from './toggle.module.css';

const ThemeSwitcher: React.FC = () => {
    const [checked, setChecked] = useState(false);
  
    const setUserTheme = (curTheme: string) => {
        const checkbox: HTMLInputElement | null = document.querySelector('#toggleTheme');
        if (checkbox) {
           checkbox.checked = (curTheme === 'light' ? false : true);
           setChecked(curTheme === 'light' ? false : true) 
        }
        localStorage.setItem('theme', curTheme);
        if(curTheme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }

    const changeUserTheme = () => {
        const curTheme = checkUserTheme();
        if(curTheme === 'light') {
            setUserTheme('dark');
            setChecked(true);
        } else {
            setUserTheme('light');
            setChecked(false);
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

    function transitionListener(e: any) {
        e.stopPropagation();
        setTimeout(function() {
            unhide();
        }, 3000);
    }

    const unhide = () => {
        console.log("trying to unhide");
        const checkboxContainer = document.querySelector('#checkboxContainer');
        checkboxContainer?.classList.remove('opacity-0');
    }

    useEffect(() => {
        const checkboxContainer = document.querySelector('#checkboxContainer');
        if(checked) {
            checkboxContainer?.addEventListener('transitionend', transitionListener);
            setUserTheme(checkUserTheme());
            checkboxContainer?.removeEventListener('transitionend', transitionListener);
        } else {
            setUserTheme(checkUserTheme());
            unhide();
        }
    });

    return (
        <div className="flex justify-end" aria-label="click to toggle light and dark themes">
            <label htmlFor="toggleTheme" className="flex items-center cursor-pointer">
                {/*toggle*/}
                <div id="checkboxContainer" className="relative opacity-0">
                    <input type="checkbox" defaultChecked={checked} id="toggleTheme" className="sr-only" onChange={changeUserTheme}></input>
                    {/*line*/}
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    {/*dot*/}
                    <div id="dot" className={style.dot + " " + style.icon + " absolute left-1 top-1 bg-yellow-300 w-6 h-6 rounded-full transition"}></div>
                </div>
                {/* <div id="fauxCheckboxContainerMoon" className={(checked ? '' : 'hidden') + " relative"}>
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <div className={style['faux-dot'] + " " + style['faux-moon'] + " absolute left-1 top-1 w-6 h-6 rounded-full"}></div>
                </div>
                <div id="fauxCheckboxContainerSun" className={(checked ? 'hidden' : '') + " relative"}>
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <div className={style['faux-sun'] + " absolute left-1 top-1 bg-yellow-300 w-6 h-6 rounded-full"}></div>
                </div> */}
            </label>
        </div>
    );
}

export default ThemeSwitcher