import { type } from 'os';
import React, { useState, useEffect } from 'react'
import style from './toggle.module.css';

const ThemeSwitcher: React.FC = () => {
  
  //const [theme, setTheme] = useState([]);

  useEffect(() => {
      const value = localStorage.getItem('theme');
      const theme = !!value ? JSON.parse(value) : undefined;
      //setTheme(theme);
      changeUserTheme();
  }, [])

  
  
  return (
    // <div onClick={changeUserTheme}>
    //     <input type="checkbox" name="toggle-switch" id="toggle-switch" />
    //     <label htmlFor="toggle-switch">
    //         <span><svg className="h-8 w-8 text-yellow-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg></span>
    //         <span><svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" /></svg></span>
    //         <span className="ball"><svg className="h-8 w-8 text-blue-800"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" /></svg></span>
    //     </label>
    // </div>
    <div className="flex items-center justify-center w-full mb-12">
  
        <label htmlFor="toggleTheme" className="flex items-center cursor-pointer">
            {/*toggle*/}
            <div className="relative" onClick={changeUserTheme}>
                <input type="checkbox" id="toggleTheme" className="sr-only"></input>
                {/*line*/}
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                {/*dot*/}
                <div className={style.dot + " absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"}></div>
            </div>
            {/*label*/}
            <div className="ml-3 text-gray-700 font-medium">
                Toggle Me!
            </div>
        </label>
    </div>
  )
}

function changeUserTheme(): void {
    console.log("trying...");
    const curTheme = checkUserTheme();
    if(curTheme === 'dark') {
        document.documentElement.classList.remove('dark');
        //setTheme('light');
    } else {
        document.documentElement.classList.add('dark');
        //setTheme(['dark']);
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