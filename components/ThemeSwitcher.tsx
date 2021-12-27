import React, { useEffect } from 'react'
import style from './toggle.module.css';

const ThemeSwitcher: React.FC = () => {
  useEffect(() => {
      setUserTheme(checkUserTheme());
  }, [])

  return (
    <div className="flex justify-end" aria-label="click to toggle light and dark themes">
        <label htmlFor="toggleTheme" className="flex items-center cursor-pointer">
            {/*toggle*/}
            <div className="relative">
                <input type="checkbox" id="toggleTheme" className="sr-only" onClick={changeUserTheme}></input>
                {/*line*/}
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                {/*dot*/}
                <div className={style.dot + " " + style.icon + " absolute left-1 top-1 bg-yellow-300 w-6 h-6 rounded-full transition"}></div>
            </div>
        </label>
    </div>
  )
}

function setUserTheme(curTheme: string): void {
    const checkbox: HTMLInputElement | null = document.querySelector('#toggleTheme');
    if (checkbox) {
       checkbox.checked = (curTheme === 'light' ? false : true) 
    }
    
    localStorage.setItem('theme', curTheme);
    
    if(curTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
}

function changeUserTheme(): void {
    const curTheme = checkUserTheme();
    if(curTheme === 'light') {
        setUserTheme('dark');
    } else {
        setUserTheme('light');
    }
}

function checkUserTheme(): string {
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

export default ThemeSwitcher